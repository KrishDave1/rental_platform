import { useContext, useState, useEffect } from "react";
import React from "react";
import axios from "axios";

const AppContext = React.createContext();
function getDefaultCart() {
  let cart = {};
  for (let i = 1; i < 341; i++) {
    cart[i] = 0;
  }
  return cart;
}
function getDefaultCartPrice(){
  let cart={};
  for(let j=1;j<341;j++) cart[j]=0;
  return cart;
}

const dummyProducts = "http://localhost:7100/Products";

const AppProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const [sidebar, setSidebar] = useState(false);
  const [wishItems, setWishItems] = useState(getDefaultCart());
  const [searchTerm,setSearchTerm]=useState("");
  const [categoriesProducts, setCategoriesProducts] = useState([]);
  const [city, setCity] = useState("");
  const [totalPrice,setTotalPrice]=useState(getDefaultCartPrice());
  const [months,setMonths]=useState("1");
  function handleAdd(id) {
    setCartItems((prev) => ({ ...prev, [id]: prev[id] + 1 }));
  }
  function handleDelete(id) {
    setCartItems((prev) => ({ ...prev, [id]: prev[id] - 1 }));
  }
  function Delete(id) {
    setCartItems((prev) => ({ ...prev, [id]: 0 }));
  }
  function handleAddWish(id) {
    setWishItems((prev) => ({ ...prev, [id]: 1 }));
  }
  function handleDeleteWish(id) {
    setWishItems((prev) => ({ ...prev, [id]: 0 }));
  }

  function GetAmount() {
    let amt = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let iteminfo = products.find((it) => it.id === Number(item));
        amt += cartItems[item] * (iteminfo.Price*83)/100;
      }
    }
    return amt;
  }
  function getTotalPrice(){
    let a=0;
    for(const i in totalPrice){
      let info=products.find()
    }
  }
  function count() {
    let c = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        c += cartItems[item];
      }
    }
    return c;
  }
  function ClearCart() {
    setCartItems(getDefaultCart());
  }

  const closeModal = () => {
    setSidebar(false);
  };

  async function fetchProducts() {
    const res=await fetch(dummyProducts);
    const data= await res.json();
    setProducts(data);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <AppContext.Provider
      value={{
        cartItems,
        products,
        handleAdd,
        handleDelete,
        Delete,
        GetAmount,
        ClearCart,
        count,
        sidebar,
        setSidebar,
        closeModal,
        wishItems,
        handleAddWish,
        handleDeleteWish,
        searchTerm,setSearchTerm,
        categoriesProducts, setCategoriesProducts,
        city, setCity,
        totalPrice,setTotalPrice,
        months,setMonths
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
