import { useGlobalContext } from "../context";
import styles from "./summaryitem.module.css";

export default function SummaryItem({ item }) {
  const { handleDelete, handleAdd, cartItems, Delete,months,setMonths } = useGlobalContext();
  const PriceRs=(Number(item.Price)*83)/100;
  return (
    <li className={styles.items}>
      <h1 className="text-lg font-bold">{item.Title}</h1>
      <p>Quantity:{cartItems[item.id]}</p>
      <p>Price:{((item.Price*83)/100 * cartItems[item.id]).toFixed(2)}/mo</p>
      <p>Total Price for {months} months: ₹ {(PriceRs.toFixed(2)*months*cartItems[item.id]).toFixed(2)}</p>
    </li>
  );
}