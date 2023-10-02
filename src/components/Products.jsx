// /** @format */

import { ToastContainer, toast } from "react-toastify";
import { useGlobalContext } from "../context";
import { AiOutlineStar } from "react-icons/ai";
import { useContext, useState, useEffect } from "react";


const Products = () => {
  const { products } = useGlobalContext();
  const { handleAdd, cartItems,categoriesProducts,searchTerm,months,setMonths } = useGlobalContext();

  // function toastfn(singleProduct) {
  //   return (
  //     toast.success(`${singleProduct.title} added to Cart`),
  //     {
  //       theme: "colored",
  //     }
  //   );
  // }

  const displayProducts = categoriesProducts.length > 0 ? categoriesProducts : products;

  const FinaldisplayProduct = displayProducts.filter((item) => {
    return searchTerm.toLowerCase() === '' ? item : item.Title.toLowerCase().includes(searchTerm.toLowerCase())
  })
  if (FinaldisplayProduct.length < 1) {
    return <section className='section-noitems'>
      <h4>No Products matched your search. Please try again.</h4>
    </section>
  }


  
  function handle(singleProduct) {
    handleAdd(singleProduct.id);
    // if (cartItems[singleProduct.id] < 1) toastfn(singleProduct);
  }

  return (
    <section className="section-center">
      {FinaldisplayProduct?.map((singleProduct) => {
        const { id, Title, Product_Image, Price,Reviews,Rating,Price_was,Percentage_off } = singleProduct;
        const PriceRs=(Number(Price)*83)/100;
        const PriceWasRs=(Number(Price_was)*83)/100
        return (
          <article key={id} className="single-product">
            <img src={Product_Image} alt={Title} className="img" />
            <footer className="text-area">
              <div className="title-text">
                <h5>{Title}</h5>
                </div>
              <div className="mt-0">
                <AiOutlineStar color="yellow" /> {Number(Rating)===0? 2: Number(Rating).toFixed(1)}
                <p>{Reviews==="undefined" || Number(Reviews)<=20?  169 + " Reviews":Reviews +" Reviews"}</p>
                </div>
              <div className="mrp-text">
                <h5>Our Price :</h5>
                <h4>₹ {PriceRs.toFixed(2)}/mo</h4>
              </div>
              <div>
                Total Price for {months} months: ₹ {PriceRs.toFixed(2)*months}
              </div>
              <label htmlFor="months">Select the Time period</label>
              <div className="border-solid border-2 border-slate-100">
      
              <select name="months" id="months" onChange={(e)=>setMonths(Number(e.target.value))}>
              {Array.from({ length: 12 }, (_, i) => i+1 ).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
              </select>
              </div>
              <div>
              {Percentage_off==="undefined" || Price_was==="undefined"? "M.R.P: "+"₹"+PriceRs.toFixed(2)+"/mo"+" (0% off)": "M.R.P: ₹"+PriceWasRs.toFixed(2)+"/mo"+` (${Percentage_off}% off)`}
              </div>
              <div className="cart-buy-btn">
                <button
                  className="cart-btn btn"
                  onClick={() => handle(singleProduct)}
                >
                  Add To Cart
                  {cartItems[singleProduct.id] === 0
                    ? ""
                    : `(${cartItems[singleProduct.id]})`}
                </button>
                <button className="buy-btn btn">Rent Now</button>
              </div>
            </footer>
            {/* <ToastContainer /> */}
          </article>
        );
      })}
    </section>
  );
};
export default Products