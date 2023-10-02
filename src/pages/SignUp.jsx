import { useState } from "react";
import axios from "axios";
// import {Redirect, redirect} from "react-router-dom";

import { Link, useNavigate } from "react-router-dom";
// import styles from "./login.module.css";
// import { UseAuth } from "../contexts/authcontext";
// import { Container, Alert } from "react-bootstrap";
export default function SignUp() {
  //   const { signup } = UseAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPwd] = useState("");
  const [cpassword, setcPwd] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const navigate = useNavigate();
  // async function handleSubmit(e) {
  //   e.preventDefault();
  //   if (password !== cpassword) {
  //     return setError("Passwords do not match");
  //   }
  // }

  const submit = async (e) => {
    e.preventDefault();
    console.log(name, email, password);
    if (password !== cpassword) {
      return setError("Passwords do not match");
    }

    try {
      const response = await axios.post("http://127.0.0.1:8000/register/", {
        name,
        email,
        password,
      });

      console.log("Response:", response);

      // If you want to redirect after successful registration, uncomment the following line
      // navigate("/login");
    } catch (error) {
      setError(error.message);
    }
  };


  //     try {
  //       setLoading(true);
  //       setError("");
  //       await signup(email, password);
  //       navigate("/login");
  //     } catch (err) {
  //       setError(err.message);
  //     }
  //     setLoading(false);
  //   }
  return (
    <div className="flex min-h-full items-center justify-center text-center ">
      <div className=" mt-16 h-2/5 w-2/5 bg-slate-100 p-16 shadow-md shadow-slate-400">
        <h2>Signup to Rental.in!</h2>
        {/* 
        {error && <Alert variant="danger">{error}</Alert>} */}

        <form className="flex flex-col justify-around bg-slate-100" onSubmit={submit}>
          <div className="p-3">
            <input
              type="text"
              value={name}
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
              className="w-64 rounded bg-slate-200 shadow-sm shadow-slate-400 p-2"
            />
          </div>
          <div className="p-3">
            <input
              type="text"
              value={email}
              placeholder="Email Address"
              onChange={(e) => setEmail(e.target.value)}
              className="w-64 rounded bg-slate-200 shadow-sm shadow-slate-400 p-2"
            />
            </div>
          <div className="p-3">
            <input
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPwd(e.target.value)}
              className="w-64 rounded bg-slate-200 shadow-sm shadow-slate-400 p-2"
            />
          </div>
          <div className="p-3">
            <input
              type="password"
              value={cpassword}
              placeholder="Confirm Password"
              onChange={(e) => setcPwd(e.target.value)}
              className="w-64 rounded bg-slate-200 shadow-sm shadow-slate-400 p-2"
            />
          </div>
          <div>
            <button type="submit" disabled={loading} className="w-24 rounded bg-blue-400 mt-5 justify-center p-2 text-lg hover:bg-blue-700">Sign Up</button>
          </div>
          <div className="mt-3">
        Already have an account? <Link to="/login">Log in</Link>
      </div>
        </form>
      </div>
     
    </div>
  );
}
