const express = require('express');
const router = express.Router();
const ordersService = require('../services/ordersService');

// Get all orders
router.get('/orders', async (req, res, next) => {
  try {
    const orders = await ordersService.getOrders();
    res.json(orders);
  } catch (err) {
    console.error(`Error while getting orders: ${err.message}`);
    next(err);
  }
});

// Get a specific order by ID
router.get('/orders/:id', async (req, res, next) => {
  const orderId = req.params.id;
  try {
    const order = await ordersService.getOrderById(orderId);
    if (!order) {
      res.status(404).json({ message: 'Order not found' });
    } else {
      res.json(order);
    }
  } catch (err) {
    console.error(`Error while getting order by ID: ${err.message}`);
    next(err);
  }
});

// Create a new order
router.post('/orders', async (req, res, next) => {
  const newOrderData = req.body;
  try {
    const newOrderId = await ordersService.createOrder(newOrderData);
    res.status(201).json({ message: 'Order created successfully', id: newOrderId });
  } catch (err) {
    console.error(`Error while creating an order: ${err.message}`);
    next(err);
  }
});

// Update an order
router.put('/orders/:id', async (req, res, next) => {
  const orderId = req.params.id;
  const updatedOrderData = req.body;
  try {
    await ordersService.updateOrder(orderId, updatedOrderData);
    res.json({ message: 'Order updated successfully' });
  } catch (err) {
    console.error(`Error while updating order: ${err.message}`);
    next(err);
  }
});

// Delete an order
router.delete('/orders/:id', async (req, res, next) => {
  const orderId = req.params.id;
  try {
    await ordersService.deleteOrder(orderId);
    res.json({ message: 'Order deleted successfully' });
  } catch (err) {
    console.error(`Error while deleting order: ${err.message}`);
    next(err);
  }
});

module.exports = router;
