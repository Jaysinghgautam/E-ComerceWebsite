 
import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";

function Login() {
  // Initial State
  const [currentState, setCurrentState] = useState("Login");

  const { token, setToken, navigate, backendUrl } =
    useContext(ShopContext);

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      // ✅ Sign Up
      if (currentState === "Sign Up") {
        const response = await axios.post(
          backendUrl + "/api/user/register",
          {
            name,
            email,
            password,
          }
        );

        console.log(response.data);

        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
          
        } else {
          console.log(error)
          toast.error(response.data.message)
        }
      }

      // ✅ Login
      else {
        const response = await axios.post(
          backendUrl + "/api/user/login",
          {
            email,
            password,
          }
        );

        console.log(response.data);

        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
          
        } else {
          toast.success(response.message)
        }
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }
  };

  useEffect(()=> {
    if(token) {
      navigate('/')
    }
  },[token])

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800"
    >
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text-3xl">{currentState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>

      {/* Name */}
      {currentState === "Login" ? null : (
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          placeholder="Name"
          className="w-full px-3 py-2 border border-gray-800"
          required
        />
      )}

      {/* Email */}
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        name="email"
        type="email"
        placeholder="Enter your email"
        autoComplete="email"
        className="w-full px-3 py-2 border border-gray-800"
        required
      />

      {/* Password */}
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
        placeholder="Password"
        autoComplete={
          currentState === "Login"
            ? "current-password"
            : "new-password"
        }
        className="w-full px-3 py-2 border border-gray-800"
        required
      />

      <div className="w-full flex justify-between text-sm">
        <p className="cursor-pointer">Forgot Password?</p>

        {currentState === "Login" ? (
          <p
            className="cursor-pointer"
            onClick={() => setCurrentState("Sign Up")}
          >
            Create Account
          </p>
        ) : (
          <p
            className="cursor-pointer"
            onClick={() => setCurrentState("Login")}
          >
            Login Here
          </p>
        )}
      </div>

      <button
        type="submit"
        className="bg-black text-white w-full py-3 mt-2"
      >
        {currentState === "Login" ? "Sign In" : "Sign Up"}
      </button>
    </form>
  );
}

export default Login;