const express = require('express');
const router = express.Router();
const orderProductsService = require('../services/orderProductsService');

// Get all order products
router.get('/order-products', async (req, res, next) => {
  try {
    const orderProducts = await orderProductsService.getOrderProducts();
    res.json(orderProducts);
  } catch (err) {
    console.error(`Error while getting order products: ${err.message}`);
    next(err);
  }
});

// Get a specific order product by ID
router.get('/order-products/:id', async (req, res, next) => {
  const id = req.params.id;
  try {
    const orderProduct = await orderProductsService.getOrderProductById(id);
    if (!orderProduct) {
      res.status(404).json({ message: 'Order product not found' });
    } else {
      res.json(orderProduct);
    }
  } catch (err) {
    console.error(`Error while getting order product: ${err.message}`);
    next(err);
  }
});

// Create a new order product
router.post('/order-products', async (req, res, next) => {
  const newOrderProductData = req.body;
  try {
    const newId = await orderProductsService.createOrderProduct(newOrderProductData);
    res.status(201).json({ message: 'Order product created successfully', id: newId });
  } catch (err) {
    console.error(`Error while creating order product: ${err.message}`);
    next(err);
  }
});

// Delete an order product
router.delete('/order-products/:id', async (req, res, next) => {
  const id = req.params.id;
  try {
    await orderProductsService.deleteOrderProduct(id);
    res.json({ message: 'Order product deleted successfully' });
  } catch (err) {
    console.error(`Error while deleting order product: ${err.message}`);
    next(err);
  }
});

module.exports = router;
