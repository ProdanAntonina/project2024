const mysql = require('mysql2/promise');
const config = require('../config');

async function getOrderProducts() {
  const connection = await mysql.createConnection(config.db);
  const [results] = await connection.execute('SELECT * FROM orderProducts');
  return results;
}

async function getOrderProductById(id) {
  const connection = await mysql.createConnection(config.db);
  const [results] = await connection.execute('SELECT * FROM orderProducts WHERE id = ?', [id]);
  return results[0];
}

async function createOrderProduct(newOrderProduct) {
  const connection = await mysql.createConnection(config.db);
  const [result] = await connection.execute(
    'INSERT INTO OrderProducts (order_id, product_id, quantity) VALUES (?, ?, ?)',
    [newOrderProduct.order_id, newOrderProduct.product_id, newOrderProduct.quantity]
  );
  return result.insertId;
}

async function deleteOrderProduct(id) {
  const connection = await mysql.createConnection(config.db);
  await connection.execute('DELETE FROM orderProducts WHERE id = ?', [id]);
}

module.exports = {
  getOrderProducts,
  getOrderProductById,
  createOrderProduct,
  deleteOrderProduct,
};
