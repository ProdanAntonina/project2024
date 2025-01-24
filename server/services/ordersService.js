const mysql = require('mysql2/promise');
const config = require('../config');

async function getOrders() {
  const connection = await mysql.createConnection(config.db);
  const [results] = await connection.execute('SELECT * FROM orders');
  return results;
}

async function getOrderById(id) {
  const connection = await mysql.createConnection(config.db);
  const [results] = await connection.execute('SELECT * FROM orders WHERE id = ?', [id]);
  return results[0];
}

async function createOrder(newOrder) {
  const connection = await mysql.createConnection(config.db);
  const [result] = await connection.execute(
    'INSERT INTO Orders (customer_name, total_price, order_date) VALUES (?, ?, ?)',
    [newOrder.customer_name, newOrder.total_price, newOrder.order_date]
  );
  return result.insertId;
}

async function updateOrder(id, updatedOrder) {
  const connection = await mysql.createConnection(config.db);
  await connection.execute(
    'UPDATE Orders SET customer_name = ?, total_price = ?, order_date = ? WHERE id = ?',
    [updatedOrder.customer_name, updatedOrder.total_price, updatedOrder.order_date, id]
  );
}

async function deleteOrder(id) {
  const connection = await mysql.createConnection(config.db);
  await connection.execute('DELETE FROM orders WHERE id = ?', [id]);
}

module.exports = {
  getOrders,
  getOrderById,
  createOrder,
  updateOrder,
  deleteOrder,
};
