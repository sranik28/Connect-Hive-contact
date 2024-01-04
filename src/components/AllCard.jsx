import React from "react";

const AllCard = ({ cards }) => {
  const { name, email, photoURL, address, phone } = cards || {};

  return (
    <div className="p-2 border shadow-lg rounded-xl ">
      <div className="relative flex flex-col items-center justify-end gap-2 overflow-hidden bg-gray-50 rounded-2xl text-sky-600">
        <svg
          className="absolute w-40 h-40 stroke-current opacity-30 -rotate-12 -bottom-12 -right-12"
          height="100"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 100 100"
          width="100"
          x="0"
          xmlns="http://www.w3.org/2000/svg"
          y="0"
        >
          <path
            className="svg-stroke-primary"
            d="M65.8,46.1V30.3a15.8,15.8,0,1,0-31.6,0V46.1M22.4,38.2H77.6l4,47.3H18.4Z"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          ></path>
        </svg>
        <div className="flex items-center w-full gap-1 border-2 justify-evenly ">
          <div>
            <img
              className="w-48 h-56 rounded-lg md:w-56 md:h-64"
              src={photoURL}
              alt=""
            />
          </div>
          <div>
            <div className="flex flex-col ">
              <p className="text-2xl font-semibold">{name}</p>
              <p className="inline-block my-1 relative w-full h-0.5 rounded-3xl bg-sky-500"></p>
              <p>{email}</p>
              <p className="inline-block my-1 relative w-full h-0.5 rounded-3xl bg-sky-500"></p>
              <p>{phone}</p>
              <p className="inline-block my-1 relative w-full h-0.5 rounded-3xl bg-sky-500"></p>
              <p>{address}</p>
              <p className="inline-block my-1 relative w-full h-0.5 rounded-3xl bg-sky-500"></p>
            </div>
          </div>
        </div>
        {/* <span className="mb-5 -mt-1 font-extrabold -skew-x-12 -skew-y-12 text-7xl">70%</span> */}

        <div className="absolute z-10 md:top-3 top-2 right-3 ">
          <ul className="px-0 py-0 text-base text-white rounded-lg menu bg-sky-500">
            <li>
              <details close>
                <summary className="rounded-lg hover:bg-sky-600">Menu</summary>

                <li className="rounded-lg hover:bg-sky-600 ">
                  <p>Update</p>
                </li>
                <li className="rounded-lg hover:bg-sky-600">
                  <p>Delete</p>
                </li>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AllCard;
