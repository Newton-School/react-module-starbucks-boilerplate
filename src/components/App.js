import React, { useState } from "react";
import "../styles/App.css";
import Order from "./Order";
import OrderForm from "./OrderForm";



function App() {
  const [orders, setOrders] = useState([]);
  const handleOrderSubmit = (order) => {
    setOrders((prev) => [...prev, { ...order, id: prev.length + 1 }]);
  };
  return (
    <div>
      <OrderForm onSubmit={handleOrderSubmit} />
      <hr />
      {orders.map((order) => (
        <Order key={order.id} {...order} />
      ))}
    </div>
  );
}

export default App;
