/* eslint-disable react/prop-types */

import { useState } from "react";
import useWidthSize from "../reuseable/width/useWidthSize";

const containerStyle = {
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "#f9f9f9",
};



const inputStyle = {
  padding: "10px",
  margin: "10px 0",
  border: "1px solid #ccc",
  backgroundColor: "white",
  color: "black",
  borderRadius: "4px",
};

const buttonStyle = {
  padding: "10px 20px",
  margin: "10px 0",
  border: "none",
  borderRadius: "4px",
  backgroundColor: "#007bff",
  color: "white",
  cursor: "pointer",
};

const linkStyle = {
  color: "#007bff",
  textDecoration: "none",
  marginTop: "10px",
  cursor: "pointer",
};



function LoginComponent({ handleChain, handleChainSignUp }) {
  const [userData, setUserData] = useState([]);
  const {width} = useWidthSize()
  //   const handleLogin = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const email = /* Get email from input */;
  //     const password = /* Get password from input */;

  //     await firebase.auth().signInWithEmailAndPassword(email, password);
  //     // Handle successful login (redirect, update state, etc.)
  //   } catch (error) {
  //     console.error('Login error:', error.message);
  //     // Handle login error (display error message, etc.)
  //   }
  // };
const formStyle = {
  display: "flex",
  flexDirection: "column",
  padding: "20px",
  backgroundColor: "#fff",
  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  borderRadius: "5px",
  width: width < 700 ? "100%":"50%",
};
  
  console.log(userData);
  return (
    <div style={containerStyle}>
      <div class="">
        <section class="rounded-md p-2 bg-white">
          <div class="flex items-center justify-center my-2">
            <div class="xl:mx-auto shadow-md p-4 xl:w-full xl:max-w-sm 2xl:max-w-md">
              <div class="mb-2"></div>
              <h2 class="text-2xl font-bold leading-tight">
                Sign up to create account
              </h2>
              <p class="mt-2 text-base text-gray-600">
                Already have an account? Sign In
              </p>
              <form class="mt-5">
                <div class="">
                  <div>
                    <label class="text-base font-medium text-gray-900">
                      User Name
                    </label>
                    <div class="mt-2">
                      <input
                        placeholder="Full Name"
                        type="text"
                        class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        name="user_name"
                      />
                    </div>
                  </div>
                  <div>
                    <label class="text-base font-medium text-gray-900">
                      Email address
                    </label>
                    <div class="mt-2">
                      <input
                        placeholder="Email"
                        type="email"
                        class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        name="email"
                      />
                    </div>
                  </div>
                  <div>
                    <div class="flex items-center justify-between">
                      <label class="text-base font-medium text-gray-900">
                        Password
                      </label>
                    </div>
                    <div class="mt-2">
                      <input
                        placeholder="Password"
                        type="password"
                        class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        name="password"
                      />
                    </div>
                    <div class="flex items-center justify-between mt-3">
                      <label class="text-base font-medium text-gray-900">
                        Profile Picture
                      </label>
                    </div>
                    <div class="mt-2">
                      <input
                        class="file-input w-full max-w-xs"
                        type="file"
                        name="avatar"
                      />
                    </div>
                  </div>
                  <div>
                    <button
                      class="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                      type="button"
                    >
                      Create Account
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default LoginComponent;
