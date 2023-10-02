import "./App.css";
import { Navbar, Sidebar } from "./components";
import { useState, useEffect } from "react";
import axios from "axios";
import { useGlobalContext } from "./context";
import { Cart, Home, Login, Profile, Rent,Checkout } from "./pages";
import { Footer } from "./components";
import SignUp from "./pages/SignUp";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Wishlist from "./pages/Wishlist";
import data from "../data/data.json";


const App = () => {
  // const { sidebar } = useGlobalContext();

  // const data20 = async() => {
  //   const response = await fetch("http://localhost:3001/Refer");
  //   const res = await response.json();
  //   console.log(res);
  //   const data1 = res.Refer;
  //   const data = data1.map((item) => ({
  //     Title: item.Title,
  //     Product_Id: item.Product_Id,
  //     Product_Image: item.images[6],
  //     Price: item.Price,
  //     Reviews: item.Reviews,
  //     Rating: item.Rating,
  //     Price_was: item.Price_was,
  //     Percentage_off: item.Percentage_off,
  //     Type: item.Type,
  //   }));
  //   console.log(data);
  // axios
  //   .post("http://192.168.66.165:55000/products/", data)
  //   .then((response) => {
  //     console.log("Item added to database", response.data);
  //   })
  //   .catch((error) => {
  //     console.error("Error adding item to the database : ", error);
  //   });
  // }

  // useEffect(() => {
  //   axios
  //     .get("http://192.168.66.165:55000/products/")
  //     .then((res) => {
  //       setDetails(res.data);
  //       console.log(res.data);
  //     })
  //     .catch((error) => {});
  // }, []);
  const [name, setName] = useState("");

  useEffect(() => {
    (async () => {
      let headers = new Headers();
      headers.append(
        "Access-Control-Allow-Origin",
        "http://192.168.66.165:55000/products/"
      );
      headers.append("Access-Control-Allow-Credentials", "true");
      const response = await axios.get("http://192.168.66.165:55000/products/", {
        headers: headers,
        method: "GET",
        mode: "no-cors",
        credentials: "include",
      });

      const content = await response;
      console.log(content);

      setName(content.name);
    })();

  }, []);

  return (
    <BrowserRouter>
      <main>
        <Navbar />
        {/* <Nav name={name} setName={setName} /> */}
        {/* {sidebar && <Sidebar />} */}
        <Routes>
          <Route path="/" element={<Home name={name} />} />
          <Route path="cart" element={<Cart />} />
          <Route path="profile" element={<Profile />} />
          <Route path="login" element={<Login setName={setName} />} />
          <Route path="signup" element={<SignUp component={SignUp} />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path='rent' element={
              <Rent />
            
          }>
            </Route>
            <Route path="checkout" element={<Checkout/>}/>
        </Routes>
        <Footer />
      </main>
    </BrowserRouter>
  );
};

export default App;
