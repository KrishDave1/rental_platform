/** @format */

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
// import Rent from "./components/Rent";


const App = () => {
  const { sidebar } = useGlobalContext();
  
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/products/")
      .then((res) => {
        setDetails(res.data);
        console.log(res.data);
      })
      .catch((error) => {});
  }, []);
  const [name, setName] = useState("");
  return (
    <BrowserRouter>
      <main>
        <Navbar />
        {/* <Nav name={name} setName={setName} /> */}
        {sidebar && <Sidebar />}
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
