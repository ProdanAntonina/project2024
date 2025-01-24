const express = require('express');
const router = express.Router();
const categoriesService = require('../services/categoriesService');

// Get all categories
router.get('/categories', async (req, res, next) => {
  try {
    const categories = await categoriesService.getCategories();
    res.json(categories);
  } catch (err) {
    console.error(`Error while getting categories: ${err.message}`);
    next(err);
  }
});

// Get a specific category by ID
router.get('/categories/:id', async (req, res, next) => {
  const categoryId = req.params.id;
  try {
    const category = await categoriesService.getCategoryById(categoryId);
    if (!category) {
      res.status(404).json({ message: 'Category not found' });
    } else {
      res.json(category);
    }
  } catch (err) {
    console.error(`Error while getting category by ID: ${err.message}`);
    next(err);
  }
});

// Create a new category
router.post('/categories', async (req, res, next) => {
  const newCategoryData = req.body;
  try {
    const newCategoryId = await categoriesService.createCategory(newCategoryData);
    res.status(201).json({ message: 'Category created successfully', id: newCategoryId });
  } catch (err) {
    console.error(`Error while creating a category: ${err.message}`);
    next(err);
  }
});

// Update an existing category by ID
router.put('/categories/:id', async (req, res, next) => {
  const categoryId = req.params.id;
  const updatedCategoryData = req.body;
  try {
    await categoriesService.updateCategory(categoryId, updatedCategoryData);
    res.json({ message: 'Category updated successfully' });
  } catch (err) {
    console.error(`Error while updating a category: ${err.message}`);
    next(err);
  }
});

// Delete a category by ID
router.delete('/categories/:id', async (req, res, next) => {
  const categoryId = req.params.id;
  try {
    await categoriesService.deleteCategory(categoryId);
    res.json({ message: 'Category deleted successfully' });
  } catch (err) {
    console.error(`Error while deleting a category: ${err.message}`);
    next(err);
  }
});

module.exports = router;
