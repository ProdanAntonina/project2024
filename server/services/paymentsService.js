const mysql = require('mysql2/promise');
const config = require('../config');

async function getPayments() {
  const connection = await mysql.createConnection(config.db);
  const [results] = await connection.execute('SELECT * FROM payments');
  return results;
}

async function getPaymentById(id) {
  const connection = await mysql.createConnection(config.db);
  const [results] = await connection.execute('SELECT * FROM payments WHERE id = ?', [id]);
  return results[0];
}

async function createPayment(newPayment) {
  const connection = await mysql.createConnection(config.db);
  const [result] = await connection.execute(
    'INSERT INTO Payments (order_id, amount, payment_date) VALUES (?, ?, ?)',
    [newPayment.order_id, newPayment.amount, newPayment.payment_date]
  );
  return result.insertId;
}

async function deletePayment(id) {
  const connection = await mysql.createConnection(config.db);
  await connection.execute('DELETE FROM payments WHERE id = ?', [id]);
}

module.exports = {
  getPayments,
  getPaymentById,
  createPayment,
  deletePayment,
};
