/** @format */

// import { useState } from "react";

import { LiaMinusCircleSolid, LiaPlusCircleSolid } from "react-icons/lia";

import { RiDeleteBin6Line } from "react-icons/ri";

import { useGlobalContext } from "../context";

export default function CartItem({ item }) {
  const {
    handleDelete,
    handleAdd,
    Delete,
    cartItems,
    handleAddWish,
    totalPrice,
    setTotalPrice,
    months,
    setMonths,
  } = useGlobalContext();
  const PriceRs = (Number(item.Price) * 83) / 100;
  const PriceWasRs = (Number(item.Price_was) * 83) / 100;

  return (
    <div className="bg-slate-200 rounded-md cart-container ">
      {/* <div className="flex flex-col"> */}
      <div className="border-b-2 border-black w-full text-lg font-semibold">
        Buy Item
      </div>
      <div className="flex items-center w-full justify-around">
        <div className="flex flex-row items-center cart-container-image img mx-6">
          <img
            src={item.Product_Image}
            alt={item.Title}
            className="h-full rounded-md"
          />
        </div>
        <div className="flex flex-col justify-center">
          <div className="m-3">
            <h2 className="text-xl font-semibold">{item.Title}</h2>
            <div>
              {/* {item.Percentage_off==="undefined" || item.Price_was==="undefined"? "M.R.P: "+"$"+Number(item.Price)*cartItems[item.id].toFixed(2)+" (0% off)": "M.R.P: $"+Number(item.Price_was)*cartItems[item.id].toFixed(2)+` (${item.Percentage_off}% off)`} */}
              {item.Percentage_off === "undefined" ||
              item.Price_was === "undefined"
                ? "M.R.P: " +
                  "₹" +
                  (PriceRs.toFixed(2) * cartItems[item.id]).toFixed(2) +
                  "/mo" +
                  " (0% off)"
                : "M.R.P: ₹" +
                  (PriceWasRs.toFixed(2) * cartItems[item.id]).toFixed(2) +
                  "/mo" +
                  ` (${item.Percentage_off}% off)`}
            </div>
            <p className="text-lg font-semibold">
              Our Price: ₹{(PriceRs * cartItems[item.id]).toFixed(2)}/mo
            </p>
          </div>
          <div>
            Total Price for {months} months: ₹{" "}
            {(PriceRs.toFixed(2) * months * cartItems[item.id]).toFixed(2)}
          </div>

          <div className="flex px-4 mb-7">
            <button>
              {" "}
              <LiaMinusCircleSolid
                size={"30px"}
                onClick={() => handleDelete(item.id)}
              />
            </button>
            <span className="text-lg font-bold">{cartItems[item.id]}</span>
            <button>
              <LiaPlusCircleSolid
                size={"30px"}
                onClick={() => handleAdd(item.id)}
              />
            </button>
            <div className="border-solid border-2 mx-5 rounded-md border-slate-100">
              <select
                name="months"
                id="months"
                onChange={(e) => setMonths(Number(e.target.value))}
              >
                {Array.from({ length: 12 }, (_, i) => i + 1).map((num) => (
                  <option value={num} key={num}>
                    {num}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="p-5 ">
          <RiDeleteBin6Line
            cursor="pointer"
            size={"30px"}
            onClick={() => Delete(item.id)}
          />
        </div>
        <div className="p-2 cart-btn w-24 rounded md">
          <button onClick={() => handleAddWish(item.id)}>
            {" "}
            Add to Wishlist
          </button>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}
