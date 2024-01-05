import React from "react";
import Swal from "sweetalert2";
import Card from "./ui/card/Card";

const AllCard = ({ cards, handelModal }) => {
  // const { name, email, photoURL, address, phone } = cards || {};

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

  return (
    <div>
      <Card
        handelModal={handelModal}
        cards={cards}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default AllCard;
