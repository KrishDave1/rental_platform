/** @format */

import CartItem from "../components/Cart_Item";

import { useNavigate } from "react-router-dom";
// import { useState } from "react";
import { BiArrowBack } from "react-icons/bi";

import { useGlobalContext } from "../context";

export default function Cart() {
  const { ClearCart, GetAmount, products, cartItems, count } =
    useGlobalContext();
  const c = count();

  function Clear() {
    ClearCart();
  }

  const navigate = useNavigate();
  let totalprice = GetAmount();
  let deliverycharges = (totalprice * 10) / 100;
  const Total_Price = deliverycharges + totalprice;
  if (totalprice === 0)
    return (
      <>
        <h3 className="text-center mt-5">Your Cart is empty!</h3>
        <div className="flex justify-center">
          <img src="../cartemp.png" />
        </div>
        <div className="flex justify-center">
          <BiArrowBack
            cursor={"pointer"}
            onClick={() => navigate("/rent")}
          ></BiArrowBack>
          Go back to to rent page
        </div>
      </>
    );

  return (
    <>
      <h3 className="text-center">Your Cart has {c} products</h3>
      <div className="bg-white mx-3 rounded-md cartpage-container">
        <ul>
          {products?.map((item) => {
            if (cartItems[item.id] !== 0) {
              return <CartItem key={item.id} item={item} />;
            }
          })}
        </ul>

        <div className="bg-slate-200 mt-5 h-96  rounded-md mx-3 justify-between cart-total-container">
          <div className="p-6">
            <span className="font-bold text-lg">Subtotal</span>
            <span className="float-right font-bold text-lg">
              ₹{totalprice.toFixed(2)}
            </span>
          </div>

          <div className="p-6">
            <span className="font-bold text-lg">Delivery Charges</span>
            <span className="float-right font-bold text-lg">
              ₹{deliverycharges.toFixed(2)}
            </span>
          </div>
          <hr />

          <div className="p-6 ">
            <span className="font-bold text-lg">Total Amount</span>
            <span className="float-right font-bold text-lg">
              {" "}
              ₹{Total_Price.toFixed(2)}
            </span>
          </div>
          <div className="flex mt-20 bg-slate-300 p-5 rounded-md ">
            <button onClick={Clear} className="cart-btn btn">
              Clear Cart
            </button>
            <button onClick={() => navigate("/rent")} className="cart-btn btn">
              Continue Shopping
            </button>
            <button
              onClick={() => navigate("/checkout")}
              className="cart-btn btn"
            >
              Proceed to checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
