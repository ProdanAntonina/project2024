const express = require("express");
const cors = require("cors"); 

const app = express();
const port = 5000;

app.use(cors()); 
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// Import routes for each table
const categoriesRoutes = require("./routes/categoriesRoutes");
const orderProductsRoutes = require("./routes/orderProductsRoutes");
const ordersRoutes = require("./routes/ordersRoutes");
const paymentsRoutes = require("./routes/paymentsRoutes");
const productsRoutes = require("./routes/productsRoutes");

// Register routes
app.use("/", categoriesRoutes);
app.use("/", orderProductsRoutes);
app.use("/", ordersRoutes);
app.use("/", paymentsRoutes);
app.use("/", productsRoutes);

app.get("/", (req, res) => {
  res.json({ message: "ok" });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});