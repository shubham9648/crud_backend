const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imageUrl: {

    image1: {
      type: String,
      required: true,
    },
    image2: {
      type: String,
    },
    image3: {
      type: String,
    },
    image4: {
      type: String,
    },
  },
  videoUrl: {
    type: String,
  },
  productInfo: {
    size: {
      type: Number,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    condition: {
      type: String,
      required: true,
    },
    mrp: {
      type: Number,
      required: true,
    },
    salePrice: {
      type: Number,
      required: true,
    },
    deleiveryTime: {
      type: String,
      required: true,
    },
  },
  shipping: {
    domestic: {
      type: Boolean,
      required: true,
    },
    worldwide: {
      type: Boolean,
      required: true,
    },
  },
  applicable: {
    type: Boolean,
    required: true,
  },
});
module.exports = mongoose.model("products", productSchema);
