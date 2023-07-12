const mongoose = require('mongoose');
const { productSchema } = require('./product');

const orderSchema = mongoose.Schema({
  orderId: {
    type: String,
    required: true,
  },
  orderUserIdCreate: {
    required: true,
    type: mongoose.Schema.Types.ObjectID,
  },
  orderItems: [
    {
      name: {
        type: String,
        required: true,
      },
      dui: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      discount: {
        type: Number,
        required: true,
      },
      quantity: {
        type: Number,
      },
    },
  ],

  ordertotalItems: {
    type: Number,
    required: true,
  },
  orderTotalAmout: {
    type: Number,
    required: true,
  },
  orderTotaltax: {
    type: Number,
    required: true,
  },
  orderedAt: {
    type: Number,
    required: true,
  },
  orderStatus: {
    type: Number,
    required: true,
  },
  orderShippingAddress: {
    addressLine1: { type: String },
    addressLine2: { type: String },
    coordinates: {
      lat: { type: Number },
      lng: { type: Number },
    },
    street: { type: String },
    city: { type: String },
    state: { type: String },
    zip: { type: String },
    country: { type: String },
    timezone: { type: String },
    isPrimary: { type: Boolean, default: false },
    locationType: {
      type: String,
      enum: ['Residential', 'Business', 'Other'],
    },
  },
  orderPaymentMethod: {
    method: {
      type: String,
      required: true,
    },
    idMethod: {
      type: String,
    },
  },
  orderIsPaid: {
    type: Boolean,
    default: false,
  },
  orderPaymentResult: {
    id: String,
    state: String,
    status: String,
    cart: String,
    payer: {
      payment_method: String,
      status: String,
      payer_info: {
        email: String,
        first_name: String,
        last_name: String,
        payer_id: String,
        shipping_address: Object,
        country_code: String,
      },
    },
    transactions: [
      {
        amount: Object,
        payee: Object,
        description: String,
        item_list: Object,
        related_resources: Array,
      },
    ],
    create_time: Date,
    update_time: Date,
    httpStatusCode: Number,
    email_address: String,
  },
  userCalification: {
    userQualifyExperiencePurchase: String,
    userQualifyExperienceDelivery: String,
    userQualifyExperienceService: String,
    userQualifyExperienceProduct: String,
  },
  orderUserNotificationEmail: {
    type: Boolean,
    default: true,
  },
  paidAt: { type: Date },
  createdAt: { type: Date },
  updatedAt: { type: Date, default: Date.now },
});

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;
