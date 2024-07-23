/* eslint-disable react/prop-types */

import useWidthSize from "../reuseable/width/useWidthSize";

function SignUpComponent({ handleChainLogin }) {
    const {width} = useWidthSize()
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: 'center',
    
    backgroundColor: "#f9f9f9",
  };

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    padding: "20px",
    backgroundColor: "#fff",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    borderRadius: "5px",
    width: width < 700 ? "100%" : "50%",
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

//   const textStyle = {
//     fontSize: "12px",
//     color: "#757575",
//     marginTop: "15px",
//   };
  return (
      <div className="">
        <section className="rounded-md p-2 bg-white">
          <div className="flex items-center justify-center my-2">
            <div className="xl:mx-auto shadow-md p-4 xl:w-full xl:max-w-sm 2xl:max-w-md">
              <div className="mb-2"></div>
              <h2 className="text-2xl font-bold leading-tight">
                Sign up to create account
              </h2>
              <p className="mt-2 text-base text-gray-600">
                Already have an account? Sign In
              </p>
              <form className="mt-5">
                <div className="">
                  <div>
                    <label className="text-base font-medium text-gray-900">
                      User Name
                    </label>
                    <div className="mt-2">
                      <input
                        placeholder="Full Name"
                        type="text"
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        name="user_name"
                      />
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
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        name="email"
                      />
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
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        name="password"
                      />
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
                        name="avatar"
                      />
                    </div>
                  </div>
                  <div>
                    <button
                      className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
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
  );
}

export default SignUpComponent
