import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import Swal from "sweetalert2";

const FavoriteCards = ({ item }) => {
  const [contacts, setContacts] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://connect-hive.vercel.app/allContact/${item}`
        );
        setContacts(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    if (item) {
      fetchData();
    }
  }, [item]);

  const { name, email, photoURL, phone, address, _id } = contacts || {};
  const [isFavorite, setIsFavorite] = useState(false);
  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setIsFavorite(favorites.includes(_id));
  }, [_id]);
  const toggleFavorite = () => {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];


    if (isFavorite) {
      favorites = favorites.filter((favId) => favId !== _id);
    } else {
      favorites.push(_id);
    }

    localStorage.setItem("favorites", JSON.stringify(favorites));
    setIsFavorite(!isFavorite);
  };
  return (
    <div className="p-3 duration-300 border-2 rounded-md hover:border-2 hover:shadow-md hover:border-Primary hover:shadow-Primary">
      <div className="relative flex flex-col items-center justify-end gap-2 overflow-hidden bg-gray-50 rounded-2xl ">
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

        <button
          onClick={toggleFavorite}
          className={`${
            isFavorite ? "bg-red-600" : "bg-Primary"
          } text-white rounded-full p-3 font-semibold`}
        >
          {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
        </button>
      </div>
    </div>
  );
};

export default FavoriteCards;