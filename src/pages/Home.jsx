import {
  // Offers_Discounts,
  // Extra_Discounts,
  Display_Slider,
} from "../components";
import { useState, useEffect } from "react";
const Home = (props) => {
  const[message, setMessage] = useState("");
  // useEffect(() => {
  //   if (localStorage.getItem("access_token") === null) {
  //     window.location.href = "/login";
  //   } else {
  //     (async () => {
  //       try {
  //         const { data } = await axios.get(
  //           "http://127.0.0.1:8000/pseudo_Home/",
  //           {
  //             headers: {
  //               "Content-Type": "application/json",
  //             },
  //           }
  //         );
  //         console.log(data.message);
  //         setMessage(data.message);
  //       } catch (e) {
  //         console.log("not auth");
  //       }
  //     })();
  //   }
  // }, []);
  return (
    <div className="">
      <Display_Slider />
      {/* {props.name ? "Hi " + props.name : "You are not logged in"} */}
      <h1 className="text-3xl font-bold text-center">Welcome to {message}</h1>
      <img className="w-full h-1/2" src="../homepage1.jpg" />
    </div>
  );
};
export default Home;
