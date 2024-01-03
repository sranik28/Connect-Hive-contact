import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import Registration from "./Registration";
import { useForm } from "react-hook-form";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const Login = () => {
  const [signIn, setSignIn] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const toggle = () => {
    setSignIn(!signIn);
  };

  const { register, handleSubmit, reset } = useForm();

  return (
    <main className="flex items-center justify-center w-full md:h-screen bg-[#1b1e34] px-3 ">
      <div className="max-w-[1240px] w-full mx-auto mt-10 grid  md:grid-cols-2 gap-5 md:gap-0 py-5">
        {signIn ? (
          <>
            <div className="flex items-center justify-center bg-[#ffffff]  rounded-s-md p-3 ">
              <div className="text-center bg-[#ffffff]  rounded-s-md px-3 ">
                <h1 className="my-5 text-3xl font-bold ">
                  {signIn ? "Create your Account" : "Create your  Account"}
                </h1>
                <p className="mb-5 text-lg">
                  If you’re not a registered , please click the button below to
                  sign up ConnectHive.
                </p>
                {/* <Link  className='px-10 py-2 font-semibold text-white bg-black rounded-md' to="/">Sign Up</Link> */}
                <button
                  onClick={toggle}
                  className="px-10 py-2 font-semibold text-white bg-black rounded-md"
                >
                  {signIn ? "SingUP" : "Login"}
                </button>
              </div>
            </div>
            <div className="bg-black border-2 border-[#4c5696] rounded-e-md">
              <h1 className="my-5 text-5xl font-bold text-center text-white">
                Please Login
              </h1>
              <div className=" text-center py-5 rounded md:w-[500px] mx-auto my-5">
                <form>
                  <input
                    {...register("email", { required: true })}
                    className="border-b-2 border-[#d9d9d9]  w-[80%] py-2 my-5 rounded outline-none px-4 "
                    type="email"
                    name="email"
                    placeholder="    enter your email"
                    required
                  />

                  <div className="relative">
                    <input
                      {...register("password", { required: true })}
                      name="password"
                      id="password"
                      type={showPassword ? "text" : "password"}
                      className="border-b-2 border-[#d9d9d9] w-[80%] rounded py-2 px-4 outline-none text-base "
                      autoComplete="off"
                      placeholder="   enter your password"
                    />
                    <span className="absolute md:top-3 md:right-14 top-3 right-11">
                      {showPassword ? (
                        <AiFillEyeInvisible
                          className="cursor-pointer"
                          onClick={() => setShowPassword(!showPassword)}
                        />
                      ) : (
                        <AiFillEye
                          className="cursor-pointer"
                          onClick={() => setShowPassword(!showPassword)}
                        />
                      )}
                    </span>
                  </div>

                  <p className="mt-5 text-white underline">
                    <Link>Forget Password</Link>
                  </p>
                  <button
                    type="submit"
                    className="w-[80%]  bg-[#4c5696]  mx-auto rounded py-2 my-5 text-white font-semibold flex items-center justify-center"
                  >
                    Login{" "}
                  </button>

                  <p className="text-lg text-red-600"></p>
                </form>
              </div>
              <button className="p-[10px] border rounded flex justify-center items-center gap-[6px] mx-auto mb-10  ">
                {" "}
                <FcGoogle />{" "}
                <span className="text-white">Continue with Google</span>
              </button>
            </div>
          </>
        ) : (
          <>
            {signIn ? (
              <>
                <div className="bg-black border-2 border-[#4c5696] rounded-e-md">
                  <h1 className="my-5 text-5xl font-bold text-center text-white">
                    Please Login
                  </h1>
                  <div className=" text-center py-5 rounded md:w-[500px] mx-auto my-5">
                    <form>
                      <input
                        className="w-[80%] py-2 my-5 rounded outline-none px-4 "
                        type="email"
                        name="email"
                        placeholder="    enter your email"
                        required
                      />

                      <div className="relative">
                        <input
                          name="password"
                          id="password"
                          className="border-b-2 w-[80%] rounded py-2 px-4 outline-none text-base "
                          autoComplete="off"
                          placeholder="   enter your password"
                        />
                        {/* <span className='absolute md:top-3 md:right-14 top-3 right-11'>
                              {
                                  showPassword ? <AiFillEyeInvisible className='cursor-pointer' onClick={() => setShowPassword(!showPassword)} /> : <AiFillEye className='cursor-pointer' onClick={() => setShowPassword(!showPassword)} />
                              }
                          </span> */}
                      </div>

                      <p className="mt-5 text-white underline">
                        <Link>Forget Password</Link>
                      </p>
                      <button
                        type="submit"
                        className="w-[80%]  bg-[#4c5696]  mx-auto rounded py-2 my-5 text-white font-semibold flex items-center justify-center"
                      >
                        Login{" "}
                      </button>

                      <p className="text-lg text-red-600"></p>

                      <p className="my-5 text-white">
                        {" "}
                        Create a new account?
                        <Link
                          onClick={() => signUpToggle(false)}
                          to="/signup"
                          className="text-[#4c5696] underline"
                        >
                          {" "}
                          Registration
                        </Link>
                      </p>
                    </form>
                  </div>
                  <button className="p-[10px] border rounded flex justify-center items-center gap-[6px] mx-auto mb-10  ">
                    {" "}
                    <FcGoogle />{" "}
                    <span className="text-white">Continue with Google</span>
                  </button>
                </div>
              </>
            ) : (
              <Registration />
            )}
            <div className="flex items-center justify-center bg-[#ffffff]  rounded-s-md p-3 ">
              <div className="text-center bg-[#ffffff]  rounded-s-md px-3 ">
                <h1 className="my-5 text-3xl font-bold ">
                  {signIn ? "Create your Account" : "Hello, Friend!"}
                </h1>
                <p className="mb-5 text-lg">
                  Already create your account? Please click the button below to
                  login.
                </p>
                {/* <Link  className='px-10 py-2 font-semibold text-white bg-black rounded-md' to="/">Sign Up</Link> */}
                <button
                  onClick={toggle}
                  className="px-10 py-2 font-semibold text-white bg-black rounded-md"
                >
                  {signIn ? "SingUP" : "Login"}
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </main>
  );
};

export default Login;
