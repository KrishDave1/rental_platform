// import PaymentForm from "../components/Paymentform";
import { useNavigate } from "react-router-dom";
import Summary from "../components/Summary";
import styles from "./payform.styles.module.css"
export default function Checkout() {
    const navigate=useNavigate();
    function handleSub(e) {
        e.preventDefault();
        alert("Your order has been placed")
        navigate("/")
    }
  return (
    <div style={{ display: "flex",justifyContent:"space-evenly" }}>
      <Summary />
      {/* <PaymentForm /> */}
      
      <div className="">
        <form onSubmit={handleSub} >
          <div className={styles.formcont}>
            <div className={styles.form}>
              <label htmlFor="n">Full Name</label>
              <input type="text" id="n"  className="" />
            </div>
            <div className={styles.form}>
              <label htmlFor="m">Mobile Number</label>

              <input type="text" id="m" />
            </div>
            <div className={styles.form}>
              <label htmlFor="p">Pincode</label>

              <input type="text" id="p"  />
            </div>
            <div className={styles.form}>
              <label htmlFor="a">Address</label>

              <input type="text" id="a"  />
            </div>
            <div className={styles.form}>
              <label htmlFor="s">State</label>

              <input type="text" id="s"  />
            </div>
            <div className={styles.form}>
              <label htmlFor="c">Country</label>

              <input type="text" id="c"  />
            </div>
            <div className={styles.form}>
              <label htmlFor="c">Payment method</label>

              <input type="text" id="c" value={"Cash on Delivery"} />
            </div>
            <div className={styles.span}>
              <span>
                Make this my default address
                <input type="checkbox" />
              </span>
            </div>
            <button className={styles.button}>Submit</button>
          </div>
        </form>
      </div>
      </div>
    
  );
}
