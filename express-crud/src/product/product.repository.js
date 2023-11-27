
const prisma = require("../db");

const findProduct = async () => {
    const product = await prisma.product.findMany();

    return product
}

const findUnique = async (id) => {
    const product = await prisma.product.findUnique({
        where: {
          id: id,
        },
      });
    return product
}

const create = async (newProduct) => {
    const product = await prisma.product.create({
        data: {
          name: newProduct.name,
          price: newProduct.price,
          description: newProduct.description,
          image: newProduct.image,
        },
      });
    return product
}

const deleted = async (productId) => {
    const product = await prisma.product.delete({
        where: {
          id: productId,
        },
      });
    return product
}

const updated = async (productId, productData) => {
    const product = await prisma.product.update({
        where: {
          id: productId,
        },
        data: {
          name: productData.name,
          price: productData.price,
          description: productData.description,
          image: productData.image,
        },
      });
    return product
}

module.exports = {
    findProduct,
    findUnique,
    create,
    deleted,
    updated
}