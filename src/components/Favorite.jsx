import React, { useEffect, useState } from "react";
import FavoriteCards from "./FavoriteCard";
import ContactModal from "./contactModal/ContactModal";

const Favorite = () => {
  const [favoriteContacts, setFavoriteContacts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [contactId, setContactId] = useState();
  useEffect(() => {
    const favoritesFromLocalStorage =
      JSON.parse(localStorage.getItem("favorites")) || [];
    setFavoriteContacts(favoritesFromLocalStorage);
  }, []);

  return (
    <div className="container">
      <h1 className="flex items-center justify-center my-2 mt-5 text-4xl">Favorite Contacts</h1>
      <div className="bg-Primary w-[100px] mx-auto h-[6px]"></div>
      <ContactModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        contactId={contactId}
      />
      <div className="grid gap-4 md:grid-cols-3">
        {favoriteContacts.map((item) => (
          <FavoriteCards key={item?._id} item={item}   />
        ))}
      </div>
    </div>
  );
};

export default Favorite;