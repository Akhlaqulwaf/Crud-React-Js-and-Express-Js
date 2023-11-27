const prisma = require("../db");
const {
  findProduct,
  findUnique,
  create,
  deleted,
  updated,
} = require("./product.repository");

const getAllProduct = async () => {
  const products = await findProduct();

  return products;
};

const getProductById = async (id) => {
  if (typeof id !== "number") {
    throw Error("id is not a number");
  }

  const product = await findUnique(id);

  if (!product) {
    throw Error("product not found");
  }

  return product;
};

const createProduct = async (newProduct) => {
  const product = await create(newProduct);
  return product;
};

const deleteProduct = async (productId) => {
  await getProductById(productId);
  const delProduct = await deleted(productId);
  return delProduct;
};

const putProduct = async (productId, productData) => {
  const product = await updated(productId, productData);
  return product;
};

const patchProduct = async (productId, productData) => {
  const product = await updated(productId, productData);
  return product;
};

module.exports = {
  getAllProduct,
  getProductById,
  createProduct,
  deleteProduct,
  putProduct,
  patchProduct,
};
