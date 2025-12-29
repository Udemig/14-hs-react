const mongoose = require("mongoose");

const shoeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    picture: {
      type: [String],
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    isNew: {
      type: Boolean,
      default: false,
    },
    discount: {
      type: Number,
      default: 0,
    },
    size: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      enum: ["men", "women", "unisex"],
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
    virtuals: false,
    toJSON: {
      transform: (doc, ret) => {
        ret.id = ret._id;
        delete ret.__v;
        delete ret._id;

        return ret;
      },
    },
  }
);

module.exports = mongoose.model("Shoe", shoeSchema);
