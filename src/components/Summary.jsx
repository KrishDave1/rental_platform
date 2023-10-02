import { useGlobalContext } from "../context";
import Products from "./Products";

import SummaryItem from "./summaryitem";
import styles from "./summarylist.module.css";

export default function Summary() {
  const { cartItems, ClearCart, GetAmount,products } = useGlobalContext();
  return (
    <div className={styles.list}>
      <h1>Order Summary</h1>
      <ul>
        {products?.map((item) => {
          if (cartItems[item.id] !== 0) {
            return <SummaryItem key={item.id} item={item} />;
          }
        })}
      </ul>
    </div>
  );
}