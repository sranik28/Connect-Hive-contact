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
    <div className="max-w-[1400px] mx-auto">
      <h1 className="my-4 heading">Favorite Contacts</h1>
     
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