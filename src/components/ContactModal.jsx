import React, { useEffect, useState } from "react";
import Modal from "./ui/Modal";
import axios from "axios";

const ContactModal = ({ isOpen, setIsOpen, contactId }) => {
  const [singleContact, setSingleContact] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://relate-hub-server.vercel.app/contacts/${contactId}`
        );
        setSingleContact(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    if (contactId) {
      fetchData();
    }
  }, [contactId]);
  console.log(contactId);

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <h1 className="">{singleContact?._id}</h1>
      <p>{singleContact?.name}</p>
    </Modal>
  );
};

export default ContactModal;
