/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { toaster } from "evergreen-ui";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { loginUser } from "../../store/actions/userActions";
import { useDispatch } from "react-redux";

function LoginComponent({ handleChain, handleChainSignUp, setLogged }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
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
  const onSubmit = async (data) => {
    try {
      await dispatch(loginUser(data));
      console.log(data);
      reset();
    } catch (error) {
      toaster.danger(error.message);
    }
  };
  return (
    <div className="">
      <section className="rounded-md p-2 bg-white">
        <div className="flex items-center justify-center my-2">
          <div className="xl:mx-auto shadow-md p-4 xl:w-full xl:max-w-sm 2xl:max-w-md">
            <div className="mb-2"></div>
            <h2 className="text-2xl font-bold leading-tight">
              Log in to your account
            </h2>
            <p
              onClick={handleChainSignUp}
              className="mt-2 text-base text-gray-600"
            >
              Don't have an account? Sign Up
            </p>
            <p onClick={handleChain} className="mt-2 text-base text-gray-600">
              Lost your password
            </p>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-5">
              <div className="">
                <div>
                  <label className="text-base font-medium text-gray-900">
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      placeholder="Email"
                      type="email"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email",
                        },
                      })}
                      autoComplete="username"
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      name="email"
                    />
                    {errors.email && (
                      <p style={{ color: "red" }} role="alert">
                        {errors.email?.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <label className="text-base font-medium text-gray-900">
                    Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    placeholder="Password"
                    type="password"
                    {...register("password", {
                      required: "Password is required",
                    })}
                    autoComplete="current-password"
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    name="password"
                  />
                  {errors.password && (
                    <p style={{ color: "red" }} role="alert">
                      {errors.password?.message}
                    </p>
                  )}
                </div>

                <div className="mt-4">
                  <button
                    className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                    type="submit"
                  >
                    Login to your Account
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LoginComponent;
