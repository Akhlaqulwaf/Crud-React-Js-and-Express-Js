const express = require("express");
const {
  getAllProduct,
  getProductById,
  createProduct,
  deleteProduct,
  putProduct,
  patchProduct,
} = require("./product.service");

const router = express.Router();

router.get("/", async (req, res) => {
  const products = await getAllProduct();

  res.send(products);
});

router.get("/:id", async (req, res) => {
  try {
    const productId = parseInt(req.params.id);

    const product = await getProductById(productId);
    res.send(product);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.post("/", async (req, res) => {
  try {
    const newProduct = req.body;

    const product = await createProduct(newProduct);
    res.send({
      data: product,
      message: "create successfully",
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const idProduct = parseInt(req.params.id);

    await deleteProduct(idProduct);

    res.send("deleted product");
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const productId = parseInt(req.params.id);
    const productData = req.body;

    if (
      !(
        productData.image &&
        productData.name &&
        productData.description &&
        productData.price
      )
    ) {
      return res.status(400).send("some field missing");
    }

    const product = await putProduct(productId, productData);

    res.send({
      data: product,
      message: "edit product successfully",
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const productId = parseInt(req.params.id);
    const productData = req.body;

    const product = await patchProduct(productId, productData);
    res.send({
      data: product,
      message: "edit product successfully",
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
