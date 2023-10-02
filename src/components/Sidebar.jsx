/** @format */

import React from "react";
import { useGlobalContext } from "../context";
import { useState } from "react";
import {RxCross1} from "react-icons/rx"

const cities = [
  {
    id: 11,
    img: "src/assets/images/del.webp",
    pincode: 110002,
    name: "Delhi",
  },
  {
    id: 12,
    img: "src/assets/images/gurugram.webp",
    pincode: 122018,
    name: "Gurugram",
  },
  {
    id: 41,
    img: "src/assets/images/pune.webp",
    pincode: 411005,
    name: "Pune",
  },
  {
    id: 56,
    img: "src/assets/images/blr.webp",
    pincode: 560100,
    name: "Bengaluru",
  },
  {
    id: 60,
    img: "src/assets/images/chennai.webp",
    pincode: 600001,
    name: "Chennai",
  },
  {
    id: 50,
    img: "src/assets/images/hyd.webp",
    pincode: 500001,
    name: "Hyderabad",
  },
  {
    id: 40,
    img: "src/assets/images/mum.webp",
    pincode: 400001,
    name: "Mumbai",
  },
  {
    id: 20,
    img: "src/assets/images/ghaz.webp",
    pincode: 201003,
    name: "Ghaziabad",
  },
  {
    id: 21,
    img: "src/assets/images/Noida.webp",
    pincode: 210310,
    name: "Noida",
  },
];

const Sidebar = () => {
  const { closeModal, setCity } = useGlobalContext();

  const closeModalandSelectCity = (name) => {
    closeModal();
    console.log(name);
    setCity(name);
  };

  return (
    <div className="sidebar-overlay">
      <div className="sidebar-header-main-main">
        <div className="sidebar-header-main">
          <h2>Select Your City</h2>
          <div className="sidebar-header">
            {cities.map((city) => {
              const { id, img, pincode, name } = city;
              return (
                <div key={id} className="sidebar-container">
                  <img
                    src={img}
                    className="img sidebar-img"
                    onClick={() => closeModalandSelectCity(name)}
                  />
                  <div className="sidebar-content">
                    <h4>{name}</h4>
                    {/* <h5>{pincode}</h5> */}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <button className="sidebar-cross" onClick={closeModal}><RxCross1/></button>
      </div>
    </div>
  );
};

export default Sidebar;
