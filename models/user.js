const mongoose = require('mongoose');
const { productSchema } = require('./product');
const history = require('mongoose-history');

const userSchema = mongoose.Schema({
  name: {
    required: true,
    type: String,
    trim: true,
  },
  lastname: {
    type: String,
    trim: true,
  },
  phones: [
    {
      type: String,
      trim: true,
      default: [],
    },
  ],
  email: {
    required: true,
    type: String,
    trim: true,
    validate: {
      validator: (value) => {
        const re =
          /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        return value.match(re);
      },
      message:
        'Por favor, introduce una dirección de correo electrónico válida',
    },
  },
  password: {
    required: true,
    type: String,
  },
  address: {
    type: [
      {
        name: { type: String },
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
        createdAt: { type: Date, default: Date.now },
        updatedAt: { type: Date, default: Date.now },
      },
    ],
    default: [],
  },

  type: {
    type: String,
    default: 'user',
  },
  isStore: {
    default: false,
  },
  store: {
    logo: String,
    name: String,
    category: String,
    description: String,
    // rating: { type: Number, default: 0, required: true },
    // numReviews: { type: Number, default: 0, required: true },
  },
  avatar: {
    type: String,
  },

  receiveGmail: {
    type: Boolean,
    default: false,
  },
  cart: [
    {
      product: productSchema,
      quantity: {
        type: Number,
        default: 1,
      },
    },
  ],
  lastViewedProducts: [String],
  futurePurchases: [
    {
      dui: { type: String },
      reminderDate: { type: Number },
      notification: { type: Boolean },
      payAutomatic: { type: Boolean },
    },
  ],
  followingStores: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Store',
    },
  ],

  sessionVerification: {
    status: { type: Boolean, default: false },
    token: { type: String },
    sessions: [
      {
        idSe: {
          type: String,
        },
        reminderDate: {
          type: Number,
        },
        notification: {
          type: Boolean,
        },
        createdAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    notification: { type: Boolean },
    updatedAt: { type: Date, default: Date.now },
    createdAt: { type: Date, default: Date.now },
  },
  notification: {
    status: { type: Boolean, default: false },
    token: { type: String },
    token: { type: String },
    sessions: [
      {
        idSe: {
          type: String,
        },
        reminderDate: {
          type: Number,
        },
        notification: {
          type: Boolean,
        },
        createdAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    notification: { type: Boolean },
    updatedAt: { type: Date, default: Date.now },
    createdAt: { type: Date, default: Date.now },
  },

  veriToolVerification: {
    status: { type: Boolean, default: false },
    token: { type: String },
    notification: { type: Boolean },
    updatedAt: { type: Date, default: Date.now },
    createdAt: { type: Date, default: Date.now },
  },

  twoStepVerification: {
    status: { type: Boolean, default: false },
    token: { type: String },
    notification: { type: Boolean },
    updatedAt: { type: Date, default: Date.now },
    createdAt: { type: Date, default: Date.now },
  },
  verificationCode: {
    type: String,
  },
  verificationCodeExpires: {
    type: Date,
  },
  accountStatus: {
    type: String,
    enum: ['active', 'inactive', 'suspended'],
    default: 'active',
  },
  accountVerification: {
    type: String,
    enum: ['verified', 'unverified'],
    default: 'unverified',
  },
  accountVerificationCode: {
    type: Boolean,
    default: false,
  },
  private: {
    type: Boolean,
    default: false,
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});
userSchema.plugin(history, { collection: 'userHistory' });

const User = mongoose.model('User', userSchema);
module.exports = User;
