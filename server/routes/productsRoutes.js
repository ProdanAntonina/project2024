const express = require('express');
const router = express.Router();
const productsService = require('../services/productsService');

// Get all products
router.get('/products', async (req, res, next) => {
  try {
    const products = await productsService.getProducts();
    res.json(products);
  } catch (err) {
    console.error(`Error while getting products: ${err.message}`);
    next(err);
  }
});

// Get a specific product by ID
router.get('/products/:id', async (req, res, next) => {
  const productId = req.params.id;
  try {
    const product = await productsService.getProductById(productId);
    if (!product) {
      res.status(404).json({ message: 'Product not found' });
    } else {
      res.json(product);
    }
  } catch (err) {
    console.error(`Error while getting product by ID: ${err.message}`);
    next(err);
  }
});

// Create a new product
router.post('/products', async (req, res, next) => {
  const newProductData = req.body;
  try {
    const newProductId = await productsService.createProduct(newProductData);
    res.status(201).json({ message: 'Product created successfully', id: newProductId });
  } catch (err) {
    console.error(`Error while creating a product: ${err.message}`);
    next(err);
  }
});

// Update an existing product by ID
router.put('/products/:id', async (req, res, next) => {
  const productId = req.params.id;
  const updatedProductData = req.body;
  try {
    await productsService.updateProduct(productId, updatedProductData);
    res.json({ message: 'Product updated successfully' });
  } catch (err) {
    console.error(`Error while updating a product: ${err.message}`);
    next(err);
  }
});

// Delete a product by ID
router.delete('/products/:id', async (req, res, next) => {
  const productId = req.params.id;
  try {
    await productsService.deleteProduct(productId);
    res.json({ message: 'Product deleted successfully' });
  } catch (err) {
    console.error(`Error while deleting a product: ${err.message}`);
    next(err);
  }
});

module.exports = router;
