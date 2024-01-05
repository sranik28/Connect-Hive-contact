import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Card from "./ui/card/Card";

const AllCard = ({ cards, handelModal }) => {
  // const { name, email, photoURL, address, phone } = cards || {};
  const [isFavorite, setIsFavorite] = useState(false);

  const options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: "{}",
  };
  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://connect-hive.vercel.app/deleteContact/${_id}`, options)
          .then((response) => response.json())
          .then((response) => {
            console.log(response);
          })
          .catch((err) => console.error(err));
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };

 
  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setIsFavorite(favorites.includes(cards?._id));
  }, [cards?._id]);
  const toggleFavorite = () => {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    if (isFavorite) {
      favorites = favorites.filter((favId) => favId !== cards?._id);
    } else {
      favorites.push(cards?._id);
    }

    localStorage.setItem("favorites", JSON.stringify(favorites));
    setIsFavorite(!isFavorite);
  };

  return (
    <div>
      <Card
        handelModal={handelModal}
        cards={cards}
        handleDelete={handleDelete}
        isFavorite={isFavorite}
        toggleFavorite={toggleFavorite}
      />
    </div>
  );
};

export default AllCard;
