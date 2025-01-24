const mysql = require('mysql2/promise');
const config = require('../config');

async function getCategories() {
  const connection = await mysql.createConnection(config.db);
  const [results] = await connection.execute('SELECT * FROM categories');
  return results;
}

async function getCategoryById(id) {
  const connection = await mysql.createConnection(config.db);
  const [results] = await connection.execute('SELECT * FROM categories WHERE id = ?', [id]);
  return results[0];
}

async function createCategory(newCategory) {
  const connection = await mysql.createConnection(config.db);
  const [result] = await connection.execute(
    'INSERT INTO Categories (name, description) VALUES (?, ?)',
    [newCategory.name, newCategory.description]
  );
  return result.insertId;
}

async function updateCategory(id, updatedCategory) {
  const connection = await mysql.createConnection(config.db);
  await connection.execute(
    'UPDATE Categories SET name = ?, description = ? WHERE id = ?',
    [updatedCategory.name, updatedCategory.description, id]
  );
}

async function deleteCategory(id) {
  const connection = await mysql.createConnection(config.db);
  await connection.execute('DELETE FROM categories WHERE id = ?', [id]);
}

module.exports = {
  getCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
};
