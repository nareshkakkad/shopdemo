import React, { useContext } from "react";
import Items from "./Item";
import Navbar from "./Navbar";
import { Scrollbars } from "react-custom-scrollbars-2";
import { CartContext } from "./cart";

const ContextCart = () => {
  // cosumer
  const { item, totalAmount, totalItems, clearCart } = useContext(CartContext);
  {
    if (item.length === 0) {
      return (
        <>
          <Navbar />
          <section className="main-cart-section">
            <h1>shopping Cart</h1>
            <p className="total-items">
              you have <span className="total-items-count">{totalItems} </span>
              items in shopping cart
            </p>

            <div className="cart-items">
              <div className="cart-items-container">
                <Scrollbars className="cart-items-container">
                  <h1>Empty Cart</h1>
                </Scrollbars>
              </div>
            </div>
          </section>
        </>
      );
    } else {
      return (
        <>
          <Navbar />
          <section className="main-cart-section">
            <h1>shopping Cart</h1>
            <p className="total-items">
              you have <span className="total-items-count">{totalItems} </span>
              items in shopping cart
            </p>

            <div className="cart-items">
              <div className="cart-items-container">
                <Scrollbars className="cart-items-container">
                  {item.map((curItem) => {
                    return <Items key={curItem.id} {...curItem} />;
                  })}
                </Scrollbars>
              </div>
            </div>
            <div className="card-total">
              <h3>
                card total: <span> {totalAmount}₹ </span>
              </h3>
              <button className="abc">CheckOut</button>
              <button onClick={clearCart}  className="abc">Clear Cart</button>
            </div>
          </section>
        </>
      );
    }
  }
};

export default ContextCart;