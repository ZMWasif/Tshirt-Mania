import React from "react";
import "./Cart.css";
const Cart = ({ cart, handleRemoveFromCart }) => {
  /* Conditional Rendering Options */
  /* 1. Element Variable */
  /* 2. Ternary Operator condition ? ture : false */
  let command;
  if (cart.length === 0) {
    command = <p>Please add at least one item !!!</p>;
  } else if (cart.length === 1) {
    command = <p>Please add more...</p>;
  } else {
    command = (
      <p>
        <small>Thanks for adding item</small>
      </p>
    );
  }

  return (
    <div>
      <h2>Items Selected: {cart.length}</h2>
      {command}
      {cart.map((tshirt) => (
        <p>
          {tshirt.name}
          <button onClick={() => handleRemoveFromCart(tshirt)}>X</button>
        </p>
      ))}
      {cart.length !== 4 ? <p>Keep Adding</p> : <button> Remove All</button>}
    </div>
  );
};

export default Cart;
