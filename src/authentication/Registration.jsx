import React from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const Registration = () => {
  const { createUser, signInGoogle } = useAuthGlobally();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const { register, handleSubmit, reset } = useForm();

  return (
    <div className="bg-black border-2 border-[#4c5696] rounded-e-md">
      <h1 className="my-5 text-5xl font-bold text-center text-white">
        Please Sing Up
      </h1>
      <div className=" text-center py-5 rounded md:w-[500px] mx-auto my-5">
        <form>
          <input
            className="w-[80%] py-2  rounded outline-none px-4 border-b-2 border-[#d9d9d9] "
            type="text"
            name="name"
            placeholder="    enter your name"
            required
          />
          <input
            className="w-[80%] py-2 my-5 rounded outline-none px-4 border-b-2 border-[#d9d9d9]"
            type="email"
            name="email"
            placeholder="    enter your email"
            required
          />

          <div className="relative">
            <input
              name="password"
              id="password"
              className="border-b-2 border-[#d9d9d9] w-[80%] rounded py-2 px-4 outline-none text-base "
              autoComplete="off"
              placeholder="   enter your password"
            />
          </div>

          <button
            type="submit"
            className="w-[80%]  bg-[#4c5696]  mx-auto rounded py-2 my-5 text-white font-semibold flex items-center justify-center"
          >
            SignUp{" "}
          </button>

          <p className="text-lg text-red-600"></p>

          {/* <p className='my-5 text-white'> Create a new account?<Link to="/signup" className='text-[#4c5696] underline'> Registration</Link></p> */}
        </form>
      </div>
      <button className="p-[10px] border rounded flex justify-center items-center gap-[6px] mx-auto mb-10  ">
        {" "}
        <FcGoogle /> <span className="text-white">Continue with Google</span>
      </button>
    </div>
  );
};

export default Registration;
