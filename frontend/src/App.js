import React, { useEffect, useState } from "react";
import axios from "axios";
import './App.css';

function App() {
  const [customers, setCustomers] = useState([]);
  const [products, setProducts] = useState([]);
  const [sales, setSales] = useState([]);

  const BASE_URL = "/api";

  useEffect(() => {
    axios.get(`${BASE_URL}/customers`).then(res => setCustomers(res.data));
    axios.get(`${BASE_URL}/products`).then(res => setProducts(res.data));
    axios.get(`${BASE_URL}/sales`).then(res => setSales(res.data));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Retail Dashboard</h1>

      <h2>Customers</h2>
      <ul>
        {customers.map(c => <li key={c.id}>{c.name}</li>)}
      </ul>

      <h2>Products</h2>
      <ul>
        {products.map(p => <li key={p.id}>{p.name} - ₹{p.price}</li>)}
      </ul>

      <h2>Sales</h2>
      <ul>
        {sales.map(s => (
          <li key={s.id}>
            Sale #{s.id} → Customer {s.customerId}, Product {s.productId}, Amount ₹{s.amount}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;