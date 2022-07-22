const Product = require("../models/Products");

exports.addProduct = async (req, resp) => {
  const {
    title,
    description,
    imageUrl,
    videoUrl,
    productInfo,
    shipping,
    applicable,
  } = req.body;

  try {
    const body = {
      title: title,
      description: description,
      imageUrl: imageUrl,
      videoUrl: videoUrl,
      productInfo: productInfo,
      shipping: shipping,
      applicable: applicable,
    };
    const data = await Product.create(body);
    resp.send(data);
  } catch (err) {
    console.log(err);
    resp.send(err);
  }
};

exports.getProduct = async (req, resp) => {
  try {
    const data = await Product.find();
    resp.send(data);
  } catch (err) {
    console.log(err);
  }
};

exports.updateProduct = async (req, resp) => {
  const id = req.params.id;
  const {
    title,
    description,
    imageUrl,
    videoUrl,
    productInfo,
    shipping,
    applicable,
  } = req.body;

  try {
    const body = await Product.findByIdAndUpdate(id, {
      title: title,
      description: description,
      imageUrl: imageUrl,
      videoUrl: videoUrl,
      productInfo: productInfo,
      shipping: shipping,
      applicable: applicable,
    });
    const data = await Product.create(body);
    console.log(data);
  } catch (err) {
    console.log(err);
    resp.send("error");
  }
};

exports.deleteProduct = async (req, resp) => {
  const id = req.params.id;
  try {
    let data = await Product.findByIdAndRemove(id);
    resp.send(data);
  } catch (err) {
    console.log(err);
  }
};
