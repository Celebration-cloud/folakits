/* eslint-disable react/prop-types */

import { useForm } from "react-hook-form";

const error = {
  name: {
    required: "Name is required",
    minLength: { value: 3, message: "Name must be at least 3 characters" },
  },
  email: {
    required: "Email is required",
    pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]{2,}$/i,
        message: "Email is not valid"
    },
  },
  password: {
    required: "Password is required",
    minLength: { value: 3, message: "Name must be at least 3 characters" },
  },
  picture: {
    required: "Picture is required",
  },
};
function SignUpComponent({ handleChainLogin }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
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
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                {...register("firstName", { required: true })}
                aria-invalid={errors.firstName ? "true" : "false"}
              />
              {errors.firstName?.type === "required" && (
                <p role="alert">First name is required</p>
              )}

              <input
                {...register("mail", { required: "Email Address is required" })}
                aria-invalid={errors.mail ? "true" : "false"}
              />
              {errors.mail && <p role="alert">{errors.mail?.message}</p>}

              <input type="submit" />
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SignUpComponent
