import React from "react";

const Card = ({ cards, handelModal, handleDelete }) => {
  const { name, email, photoURL, address, phone } = cards || {};

  return (
    <div className="p-3 duration-300 border-2 rounded-md hover:border-2 hover:shadow-md hover:border-Primary hover:shadow-Primary">
      <div class="card">
        <div className=" card__avatar">
          <img
            className="object-cover mx-auto mb-5 duration-500 transform border-4 rounded-full hover:scale-110 h-36 w-36 border-Primary"
            src={photoURL}
            alt=""
          />
        </div>
        <div className="mb-2 text-xl card__title">
          <span className="font-semibold">Name:</span> {name}
        </div>
        <div className="mb-2 text-xl card__title">
          <span className="font-semibold">Email:</span> {email}
        </div>
        <div className="mb-2 text-xl card__title">
          <span className="font-semibold">Address:</span> {address}
        </div>
        <div className="mb-2 text-xl card__title">
          <span className="font-semibold">Phone:</span> {phone}
        </div>
        <div className="">
          <ul className="px-0 py-0 text-base text-white rounded-lg menu bg-Primary">
            <li>
              <details close>
                <summary className="rounded-lg hover:bg-Primary">Menu</summary>

                <li className="rounded-lg hover:bg-Primary">
                  <p
                    className="border-b-2 rounded-none"
                    onClick={() => handelModal(cards?._id)}
                  >
                    Update
                  </p>
                </li>
                <li className="rounded-lg hover:bg-Primary">
                  <p
                    className="border-b-2 rounded-none"
                    onClick={() => handleDelete(cards?._id)}
                  >
                    Delete
                  </p>
                </li>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Card;
