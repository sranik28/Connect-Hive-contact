import React, { useEffect, useState } from "react";
import AllCard from "../components/AllCard";
import ContactModal from "../components/contactModal/ContactModal";

const AllContacts = () => {
  const [data, setData] = useState([]);
  const [contactId, setContactId] = useState();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    fetch("https://connect-hive.vercel.app/allContact")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [data]);

  const handelModal = (id) => {
    setIsOpen(!isOpen);
    setContactId(id);
    // console.log(id);
  };

  return (
    <main className="container ">
      {/* <div className="flex  border-2 mt-10 gap-5 border-red-900 w-[400px] h-[250px]">
          <div>
            <img
              className="w-[200px] object-cover h-[247px]"
              src="https://c4.wallpaperflare.com/wallpaper/944/995/821/abstract-backgrounds-minimalistic-website-wallpaper-preview.jpg"
              alt=""
            />
          </div>
          <div className="mt-5">
            <h1 className="my-3 text-lg font-semibold">Name:</h1>
            <h1 className="my-3 text-lg font-semibold">Email:</h1>
            <h1 className="my-3 text-lg font-semibold">Phone Number:</h1>
            <h1 className="my-3 text-lg font-semibold">Address:</h1>
          </div>
        </div> */}
      <ContactModal
        contactId={contactId}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <h1 className="flex items-center justify-center mt-20 mb-5 text-4xl font-semibold md:text-5xl">All Contacts</h1>
      <div className="bg-Primary w-[100px] mx-auto h-[6px]"></div>	
      <div className="grid gap-10 mt-10 md:grid-cols-3">
        {data?.map((cards) => (
          <AllCard handelModal={handelModal} key={cards._id} cards={cards} />
        ))}
      </div>
    </main>
  );
};

export default AllContacts;
