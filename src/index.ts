import { Hono } from "hono";
import { serveStatic } from "hono/serve-static.bun";
import mongoose from "mongoose";
import { Product } from "../models/product";
import { Store } from "../models/stores";
import ProductReviews from "../models/productReview";

const port = parseInt(process.env.PORT) || 3000;
const DB =
  // 'mongodb+srv://germys:5eucerYw0z7Z@cluster0.ga2lq.mongodb.net/?retryWrites=true&w=majority';
  'mongodb+srv://germys:LWBVI45dp8jAIywv@douvery.0oma0vw.mongodb.net/Production?retryWrites=true&w=majority';
const app = new Hono();

app.use("/favicon.ico", serveStatic({ path: "./public/favicon.ico" }));

app.get("/", (c) => {
  return c.json({ message: "Hello World!" });
});

app.get('/api/all-products', async (c) => {
  try {
    const products = await Product.find({});
    console.log(products);
    c.json(products);
  } catch (e) {
    c.json({ error: e.message });
  }
});

app.get('/api/products/:dui', async ( ctx: any) => {
  try {
    const { dui } = ctx.params.dui;
console.log(dui);
    const product = await Product.findOne({ dui: dui });

    if (!product) {
      return ctx.status(404).json({ message: 'Producto no encontrado' });
    }

    const productReviews = await ProductReviews.find({
      productDui: dui,
    });

    let totalRating = 0.0;
    for (let i = 0; i < productReviews.length; i++) {
      totalRating += productReviews[i].rating;
    }

    let averageRating;
    if (productReviews.length === 0) {
      averageRating = 0;
    } else {
      averageRating = totalRating / productReviews.length;
    }

    const productsInCategory = await Product.find({
      category: product.category,
    });

    let bestProduct = productsInCategory.sort((a, b) => {
      let aSum = 0;
      let bSum = 0;

     
      return aSum < bSum ? 1 : -1;
    })[0];

    const isBestInCategory = product._id.equals(bestProduct._id);

    const storeProduct = await Store.findById(product.store);

    if (!storeProduct) {
      return ctx
       
        .json({ message: 'Usuario de la tienda no encontrado' });
    }

    const storeName = storeProduct.name;
    const storeOspayne = storeProduct.ospayne;
    const response = {
      ...product.toJSON(),
      storeName,
      storeOspayne,
      isBestInCategory: isBestInCategory,
      averageRating: averageRating,
      reviewCount: productReviews.length,
    };

    ctx.json(response);
  } catch (e) {
    ctx.status(500).json({ error: e.message });
  }
});


mongoose
  .connect(DB)
  .then(() => {
    console.log('Conexion exitosaa!!!!!!!!');
  })
  .catch((e) => {
    console.log(e);
  });

console.log(`Running at http://localhost:${port}`);

export default {
  port,
  fetch: app.fetch,
};
