import React, { useState } from "react";
import "../styles/App.css";

const BASE_DRINKS = [
  {
    id: 1,
    name: "Latte",
    basePrice: 3.5,
    customizations: [
      { name: "Size", options: ["Short", "Tall", "Grande", "Venti"] },
      {
        name: "Milk Type",
        options: ["Whole Milk", "Almond Milk", "Oat Milk", "Soy Milk"],
        price: 0.5
      },
      { name: "Number of Shots", options: [1, 2], price: 0.5 }
    ]
  },
  {
    id: 2,
    name: "Cappuccino",
    basePrice: 3,
    customizations: [
      { name: "Size", options: ["Short", "Tall", "Grande", "Venti"] },
      {
        name: "Milk Type",
        options: ["Whole Milk", "Almond Milk", "Oat Milk", "Soy Milk"],
        price: 0.5
      },
      { name: "Number of Shots", options: [1, 2], price: 0.5 }
    ]
  },
  {
    id: 3,
    name: "Mocha",
    basePrice: 4,
    customizations: [
      { name: "Size", options: ["Short", "Tall", "Grande", "Venti"] },
      {
        name: "Milk Type",
        options: ["Whole Milk", "Almond Milk", "Oat Milk", "Soy Milk"],
        price: 0.5
      },
      { name: "Number of Shots", options: [1, 2], price: 0.5 },
      {
        name: "Sauce",
        options: ["Chocolate Sauce", "Caramel Sauce", "Hazelnut Sauce"],
        price: 0.5
      }
    ]
  },
  {
    id: 4,
    name: "Espresso",
    basePrice: 2,
    customizations: [{ name: "Number of Shots", options: [1, 2], price: 0.5 }]
  },
  {
    id: 5,
    name: "Americano",
    basePrice: 3,
    customizations: [
      { name: "Size", options: ["Short", "Tall", "Grande", "Venti"] },
      { name: "Number of Shots", options: [1, 2], price: 0.5 }
    ]
  }
];

function OrderForm({ onSubmit }) {
  const [drinkId, setDrinkId] = useState(BASE_DRINKS[0].id);
  const [customizations, setCustomizations] = useState({});
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);

  const handleDrinkChange = (event) => {

  };

  const handleCustomizationChange = (event) => {

  };

  const handleNameChange = (event) => {

  };

  const handleSubmit = (event) => {

  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Drink:
          <select value={drinkId} onChange={handleDrinkChange}>
            <option >
            </option>
          </select>
        </label>
      </div>
      <div >
        <label>
          <select
            onChange={handleCustomizationChange}
          >
            <option value="">--Select--</option>
            <option key={option} value={option}>
              {option}
              { }
            </option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Name:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
      </div>
      <div>
        <button type="submit">Place Order</button>
      </div>
    </form>
  );
}

function Order({ id, name, description, price }) {
  return (
    <div>
      <p>Order ID: {id}</p>
      <p>Name: {name}</p>
      <p>Description: {description}</p>
      <p>Price: ${price.toFixed(2)}</p>
    </div>
  );
}

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
