import mongoose, { Document, Schema } from 'mongoose';

interface IReviewComment extends Document {
  authorId: Schema.Types.ObjectId;
  authorName: string;
  authorLastName: string;
  authorAvatar?: string;
  date: Date;
  content: string;
  helpful: {
    users: Schema.Types.ObjectId[],
    count: number,
  };
  notHelpful: {
    users: Schema.Types.ObjectId[],
    count: number,
  };
  hasPurchased: boolean;
}


  const reviewCommentSchema = new mongoose.Schema<IReviewComment>({
  
    authorId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    authorName: {
      type: String,
      required: true,
    },
    authorLastName: {
      type: String,
      required: true,
    },
    authorAvatar: {
      type: String,
    },
    date: {
      type: Date,
      default: Date.now,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    helpful: {
      users: [
        {
          type: Schema.Types.ObjectId,
          ref: 'User',
        },
      ],
      count: {
        type: Number,
        default: 0,
      },
    },
    notHelpful: {
      users: [
        {
          type: Schema.Types.ObjectId,
          ref: 'User',
        },
      ],
      count: {
        type: Number,
        default: 0,
      },
    },
    hasPurchased: {
      type: Boolean,
      default: false,
    },
 });

interface IProductReview extends Document {
  productDui: string;
  buyerId: Schema.Types.ObjectId;
  date: Date;
  rating: number;
  title: string;
  review?: string;
  clickHelp?: string;
  helpful: {
    users: Schema.Types.ObjectId[],
    count: number,
  };
  notHelpful: {
    users: Schema.Types.ObjectId[],
    count: number,
  };
  photos: string[];
  comments: IReviewComment[];
}


  const productReviewSchema = new mongoose.Schema<IProductReview>({
  
  
    productDui: {
      type: String,
      ref: 'Product',
      required: true,
    },
    buyerId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
      required: true,
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
      required: true,
    },
    title: {
      type: String,
      maxlength: 100,
      required: true,
    },
    review: {
      type: String,
    },
    clickHelp: {
      type: String,
    },
    helpful: {
      users: [
        {
          type: Schema.Types.ObjectId,
          ref: 'User',
        },
      ],
      count: {
        type: Number,
        default: 0,
      },
    },
    notHelpful: {
      users: [
        {
          type: Schema.Types.ObjectId,
          ref: 'User',
        },
      ],
      count: {
        type: Number,
        default: 0,
      },
    },
    photos: [
      {
        type: String,
      },
    ],
    comments: [reviewCommentSchema],
});

const ProductReviews =
  mongoose.model < IProductReview > ('ProductReviews', productReviewSchema);

export default ProductReviews;
