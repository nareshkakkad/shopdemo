import React from "react";

export default function Footer(props) {
  return (
    <div className="row">
      <button
        className="btn-2 btn-primary col-2"
        onClick={() => {
          props.resetQuantity();
        }}
      >
        Reset
      </button>
      <div className="btn-2">
        {props.totalAmount}
      </div>
      <button className="btn-2 btn-primary col-2">Pay Now</button>
    </div>
  );
}
