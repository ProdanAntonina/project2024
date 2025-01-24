const express = require('express');
const router = express.Router();
const paymentsService = require('../services/paymentsService');

// Get all payments
router.get('/payments', async (req, res, next) => {
  try {
    const payments = await paymentsService.getPayments();
    res.json(payments);
  } catch (err) {
    console.error(`Error while getting payments: ${err.message}`);
    next(err);
  }
});

// Get payment by ID
router.get('/payments/:id', async (req, res, next) => {
  const paymentId = req.params.id;
  try {
    const payment = await paymentsService.getPaymentById(paymentId);
    if (!payment) {
      res.status(404).json({ message: 'Payment not found' });
    } else {
      res.json(payment);
    }
  } catch (err) {
    console.error(`Error while getting payment: ${err.message}`);
    next(err);
  }
});

// Create a payment
router.post('/payments', async (req, res, next) => {
  const paymentData = req.body;
  try {
    const paymentId = await paymentsService.createPayment(paymentData);
    res.status(201).json({ message: 'Payment created successfully', id: paymentId });
  } catch (err) {
    console.error(`Error while creating payment: ${err.message}`);
    next(err);
  }
});

// Delete a payment
router.delete('/payments/:id', async (req, res, next) => {
  const paymentId = req.params.id;
  try {
    await paymentsService.deletePayment(paymentId);
    res.json({ message: 'Payment deleted successfully' });
  } catch (err) {
    console.error(`Error while deleting payment: ${err.message}`);
    next(err);
  }
});

module.exports = router;
