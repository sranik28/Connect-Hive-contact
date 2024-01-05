import { FaHeart } from "react-icons/fa";

const Card = ({ cards, handelModal, handleDelete,toggleFavorite,isFavorite }) => {
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
        <button onClick={toggleFavorite} className="">
          <div className="tooltip-container">
            <span
              //       className={`  isFavorite ? "bg-yellow-400" : "bg-sky-500"
              //    tooltip w-48 py-3 md:py-3 ml-2   text-xl border-2 border-white bg-sky-500`}
              className={`${
                isFavorite ? "bg-red-600" : "bg-sky-600"
              }  tooltip w-48 py-3 md:py-3 ml-2   text-xl border-2 border-white rounded-full p-2`}
            >
              <p className="text-base">
                {isFavorite ? "Remove " : "Add to Favorites"}
              </p>
            </span>
            <span className="text">
              <div className="">
                <div
                  className={`${
                    isFavorite ? "bg-red-600" : "bg-sky-600"
                  } icon border-2 border-white bg-sky-500`}
                >
                  <FaHeart className="text-xl text-white " />
                </div>
              </div>
            </span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Card;
