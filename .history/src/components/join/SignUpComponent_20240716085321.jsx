/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { signUpUser } from "../../store/actions/userActions";
import { useEffect } from "react";

const error = {
  name: {
    required: "Name is required",
    minLength: { value: 3, message: "Name must be at least 3 characters" },
  },
  email: {
    required: "Email is required",
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]{2,}$/i,
      message: "Email is not valid",
    },
  },
  password: {
    required: "Password is required",
    minLength: { value: 3, message: "Name must be at least 3 characters" },
  },
  phone: {
    required: "Phone number is required",
    pattern: {
      value: /^[0-9]+$/i,
      message: "phone number is not valid",
    },
  },
  picture: {
    required: "Picture is required",
  },
};
function SignUpComponent({ handleChainLogin }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();
  const dispatch = useDispatch()

   useEffect(() => {
     if (isSubmitSuccessful) {
       
       reset();
     }
   }, [isSubmitSuccessful, reset]);
  const onSubmit = async (data) => {
    dispatch(signUpUser(data))
    handleChainLogin()
  };

  return (
    <div className="">
      <section className="rounded-md p-2 bg-white">
        <div className="flex items-center justify-center my-2">
          <div className="xl:mx-auto shadow-md p-4 xl:w-full xl:max-w-sm 2xl:max-w-md">
            <div className="mb-2"></div>
            <h2 className="text-2xl font-bold leading-tight">
              Sign up to create account
            </h2>
            <p
              onClick={handleChainLogin}
              className="mt-2 text-base text-gray-600"
            >
              Already have an account? Sign In
            </p>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-5">
              <div className="">
                <div>
                  <label className="text-base font-medium text-gray-900">
                    User Name
                  </label>
                  <div className="mt-2">
                    <input
                      placeholder="Full Name"
                      type="text"
                      {...register("user_name", {
                        required: error.name.required,
                        minLength: error.name.minLength,
                      })}
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      name="user_name"
                    />
                    {errors.user_name && (
                      <p style={{ color: "red" }} role="alert">
                        {errors.user_name?.message}
                      </p>
                    )}
                  </div>
                </div>
                <div>
                  <label className="text-base font-medium text-gray-900">
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      placeholder="Email"
                      type="email"
                      autoComplete="username"
                      {...register("email", {
                        required: error.email.required,
                        pattern: error.email.pattern,
                      })}
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
                <div>
                  <div className="flex items-center justify-between">
                    <label className="text-base font-medium text-gray-900">
                      Password
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      placeholder="Password"
                      type="password"
                      autoComplete="current-password"
                      {...register("password", {
                        required: error.password.required,
                        minLength: error.password.minLength,
                      })}
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      name="password"
                    />
                    {errors.password && (
                      <p style={{ color: "red" }} role="alert">
                        {errors.password?.message}
                      </p>
                    )}
                  </div>
                  <div className="mt-2">
                    <input
                      placeholder="Phone Number"
                      type="tel"
                      autoComplete="tel"
                      {...register("password", {
                        required: error.phone.required,
                        pattern: error.phone.pattern,
                      })}
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      name="password"
                    />
                    {errors.password && (
                      <p style={{ color: "red" }} role="alert">
                        {errors.password?.message}
                      </p>
                    )}
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <label className="text-base font-medium text-gray-900">
                      Profile Picture
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      className="file-input w-full max-w-xs"
                      type="file"
                      {...register("profile_picture", {
                        required: error.picture.required,
                      })}
                      name="profile_picture"
                    />
                    {errors.profile_picture && (
                      <p style={{ color: "red" }} role="alert">
                        {errors.profile_picture?.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="mt-4">
                  <button
                    className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                    type="submit"
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
  );
}

export default SignUpComponent
