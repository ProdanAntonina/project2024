const mysql = require('mysql2/promise');
const config = require('../config');

async function getProducts() {
  const connection = await mysql.createConnection(config.db);
  const [results] = await connection.execute('SELECT * FROM products'); // Changed to lowercase 'products'
  return results;
}

async function getProductById(id) {
  const connection = await mysql.createConnection(config.db);
  const [results] = await connection.execute('SELECT * FROM products WHERE id = ?', [id]); // Changed to lowercase 'products'
  return results[0];
}

async function createProduct(newProduct) {
  const connection = await mysql.createConnection(config.db);
  const [result] = await connection.execute(
    'INSERT INTO products (name, description, price, stock, category_id) VALUES (?, ?, ?, ?, ?)', // Changed to lowercase 'products'
    [newProduct.name, newProduct.description, newProduct.price, newProduct.stock, newProduct.image, newProduct.category_id]
  );
  return result.insertId;
}

async function updateProduct(id, updatedProduct) {
  const connection = await mysql.createConnection(config.db);
  await connection.execute(
    'UPDATE products SET name = ?, description = ?, price = ?, stock = ?, category_id = ? WHERE id = ?', // Changed to lowercase 'products'
    [
      updatedProduct.name,
      updatedProduct.description,
      updatedProduct.price,
      updatedProduct.stock,
      updatedProduct.image,
      updatedProduct.category_id,
      id
    ]
  );
}

async function deleteProduct(id) {
  const connection = await mysql.createConnection(config.db);
  await connection.execute('DELETE FROM products WHERE id = ?', [id]); // Changed to lowercase 'products'
}

module.exports = {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
