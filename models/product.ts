import mongoose, { Document, Schema } from 'mongoose';

const ratingSchema = new Schema({
  score: Number,
  comment: String,
  user: { type: Schema.Types.ObjectId, ref: 'User' }
});

const variationSchema = new Schema({
  color: String,
  size: Number
});

interface IProduct extends Document {
  dui: string;
  name: string;
  slug: string;
  marca: string;
  description: string;
  images: string[];
  quantity: number;
  price: number;
  discount: number;
  category: string;
  subCategory: string;
  uploaded_by: string;
  raw: string[];
  productDetails: {
    pd_backgroundColor: string,
    pd_detailsBuyBox: string,
  };
  store: Schema.Types.ObjectId;
  ratings: typeof ratingSchema[];
  item_condition: string;
  variations: typeof variationSchema[];
  lastViewedProducts: string[];
  vinetas: string[];
  booksDescription: string;
  booksAuthor: string;
  booksGenres: string[];
  basicFeatures: any[];
  keywords: string;
  updates: {
    updatedAt: Date,
    updatedBy: Schema.Types.ObjectId,
    description: string,
  }[];
  sponsored: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const productSchema = new mongoose.Schema<IProduct>({
  dui: {
    type: String,
    trim: true,
  },
  name: {
    type: String,
    trim: true,
  },
    slug: {
      type: String,
      trim: true,
    },
    marca: {
      type: String,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    images: [
      {
        type: String,
      },
    ],
    quantity: {
      type: Number,
    },
    price: {
      type: Number,
    },
    discount: {
      type: Number,
      default: 0,
    },
    category: {
      type: String,
    },
    subCategory: {
      type: String,
      trim: true,
    },
    uploaded_by: {
      type: String,
    },
    raw: [
      {
        type: String,
      },
    ],
    productDetails: {
      pd_backgroundColor: {
        type: String,
      },
      pd_detailsBuyBox: {
        type: String,
        default:
          '5042765B5DD2164B3E578AE3E1AEAA0AC720FD04CBEDBBF78B64B1C4168F2820',
      },
    },
    store: {
      type: Schema.Types.ObjectId,
      ref: 'Store',
      required: true,
    },
    ratings: [ratingSchema],
    item_condition: {
      type: String,
      trim: true,
      default: 'Nuevo',
    },
    variations: [variationSchema],
    lastViewedProducts: [String],
    vinetas: [
      {
        type: String,
      },
    ],
    booksDescription: {
      type: String,
      default: '',
    },
    booksAuthor: {
      type: String,
    },
    booksGenres: [
      {
        type: String,
      },
    ],
    basicFeatures: [
      {
        size: String,
        weigth: String,
        screen: [
          {
            sizeScreen: String,
            resolution: String,
            refreshRate: Number,
            responseTime: String,
            aspectRatio: String,
            displayType: String,
            model: String,
            marco: Boolean,
            curve: Boolean,
            touch: Boolean,
            hdmi: Boolean,
            vga: Boolean,
            dvi: Boolean,
            displayPort: Boolean,
            usb: Boolean,
            audio: Boolean,
            speakers: Boolean,
            webcam: Boolean,
            bluetooth: Boolean,
            wifi: Boolean,
            ethernet: Boolean,
            cardReader: Boolean,
            osVersion: String,
            processor: String,
            processorModel: String,
            processorSpeed: String,
            processorCores: Number,
            processorThreads: Number,
            processorCache: String,
            ram: String,
            ramType: String,
            ramSpeed: String,
            ramSlots: Number,
            storage: String,
            storageType: String,
            storageSpeed: String,
          },
        ],
        util: [
          {
            color: String,
            size: String,
            materialSole: String,
            materialUpper: String,
          },
        ],
      },
    ],
    keywords: String,
    updates: [
      {
        updatedAt: { type: Date, default: Date.now },
        updatedBy: {
          type: Schema.Types.ObjectId,
          ref: 'User',
        },
        description: String,
      },
    ],
    sponsored: {
      type: Boolean,
    },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  
});

const Product = mongoose.model < IProduct > ('Product', productSchema);
export { Product, productSchema };
