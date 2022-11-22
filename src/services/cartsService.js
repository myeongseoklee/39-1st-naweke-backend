const {
  selectProdcutOptionId,
  checkIfSameProduct,
  insertProduct,
  getCarts,
  addQuantity,
} = require('../models/cartsDao');

const addItemToCartsService = async (userId, productId, sizeId) => {
  const select = await selectProdcutOptionId(productId, sizeId);
  const productOptionId = select[0].id;
  const check = await checkIfSameProduct(userId, productOptionId);

  if (check[0].check_product == 0) {
    await insertProduct(userId, productOptionId);
    return true;
  }

  await addQuantity(userId, productOptionId);
  return false;
};

const getCartsService = async (userId) => {
  return await getCarts(userId);
};

module.exports = { addItemToCartsService, getCartsService };