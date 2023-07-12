import mongoose, { Document, Schema, Model, Types } from 'mongoose';

interface IDesign {
  logo: string;
  banners: string[];
  cover: string;
  primaryColor: string;
  secondaryColor: string;
}

interface IAddress {
  addressLine1?: string;
  addressLine2?: string;
  coordinates?: {
    lat?: number,
    lng?: number,
  };
  street?: string;
  city?: string;
  state?: string;
  zip?: string;
  country?: string;
  timezone?: string;
  isPrimary?: boolean;
  locationType?: 'Residential' | 'Business' | 'Other';
  createdAt?: Date;
  updatedAt?: Date;
}

interface ISocialLinks {
  facebook?: string;
  twitter?: string;
  instagram?: string;
}

interface IUpdates {
  updatedAt?: Date;
  updatedBy?: Types.ObjectId;
  description?: string;
}

interface IStore extends Document {
  ospayne: string;
  name: string;
  description?: string;
  design: IDesign;
  owner: Types.ObjectId;
  products?: Types.ObjectId[];
  contactInfo: {
    email?: string,
    phone?: string,
    address: IAddress,
  };
  socialLinks: ISocialLinks;
  updates?: IUpdates[];
  createdAt?: Date;
  updatedAt?: Date;
}

const StoreSchema: Schema = new mongoose.Schema({
  ospayne: {
    type: String,
    required: true,
    trim: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    default: '',
  },
  design: {
    logo: {
      type: String,
      required: true,
      trim: true,
    },
    banners: [
      {
        type: String,
        default: '',
      },
    ],
    cover: {
      type: String,
      default: '',
    },
    primaryColor: {
      type: String,
      default: '#000000',
    },
    secondaryColor: {
      type: String,
      default: '#FFFFFF',
    },
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
    },
  ],
  contactInfo: {
    email: {
      type: String,
      default: '',
    },
    phone: {
      type: String,
      default: '',
    },
    address: {
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
  },
  socialLinks: {
    facebook: {
      type: String,
      default: '',
    },
    twitter: {
      type: String,
      default: '',
    },
    instagram: {
      type: String,
      default: '',
    },
  },
  updates: [
    {
      updatedAt: { type: Date, default: Date.now },
      updatedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
      description: String,
    },
  ],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});


const Store = mongoose.model < IStore > ('Store', StoreSchema);
export { Store, StoreSchema };
