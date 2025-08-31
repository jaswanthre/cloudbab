const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Sample APIs for retail data
app.get("/api/customers", (req, res) => {
  res.json([
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" }
  ]);
});

app.get("/api/products", (req, res) => {
  res.json([
    { id: 101, name: "Laptop", price: 60000 },
    { id: 102, name: "Phone", price: 30000 }
  ]);
});

app.get("/api/sales", (req, res) => {
  res.json([
    { id: 1, customerId: 1, productId: 101, amount: 60000 },
    { id: 2, customerId: 2, productId: 102, amount: 30000 }
  ]);
});

// Health check
app.get("/api/message", (req, res) => {
  res.json({ message: "Hello from backend!" });
});

app.listen(PORT, () => {
  console.log(` Backend running on http://localhost:${PORT}`);
});
