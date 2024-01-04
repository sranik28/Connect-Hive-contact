import React, { useEffect, useState } from "react";
import axios from "axios";
import "./contsctModal.css";
import Modal from "../ui/Modal";
import Swal from "sweetalert2";

const ContactModal = ({ isOpen, setIsOpen, contactId }) => {
  const [singleContact, setSingleContact] = useState(null);
  const { name, email, address, photoURL, phone } = singleContact || {};

  const handelAddContact = (event) => {
    event.preventDefault();
    const from = event.target;
    const name = from.name.value;
    const email = from.email.value;
    const address = from.address.value;
    const phone = from.phone.value;
    const photoURL = from.photoURL.value;

    console.log(name, email, address, phone, photoURL);
    const userInfo = { name, email, phone, address, photoURL };
    const options = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    };

    

    fetch(`http://localhost:8888/allContact/${contactId}`, options)
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8888/allContact/${contactId}`
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
  // console.log(contactId);

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <main className="relative overflow-hidden">
        <div>
          {/* <img
          className="flex items-center justify-center w-full h-screen bg-cover "
          src=''
          alt=""
        /> */}

          <div className="">
            {/* <h1 className="flex items-center justify-center mt-10 text-2xl font-semibold text-white">
              Add Contact
            </h1> */}
            <div className="flex items-center justify-center ">
              <div className=" form-container">
                <form onSubmit={handelAddContact} className=" form">
                  <div className="form-group">
                    <label className="" for="name">
                      Name
                    </label>
                    <input
                      name="name"
                      id="name"
                      type="text"
                      defaultValue={name}
                    />
                    <label for="email"> Email</label>
                    <input
                      name="email"
                      id="email"
                      type="text"
                      defaultValue={email}
                    />
                    <label for="PhoneNumber"> Phone Number</label>
                    <input
                      name="phonNumber"
                      id="phonNumber"
                      type="text"
                      defaultValue={phone}
                      de
                    />
                    <label for="Address"> Address</label>
                    <input
                      name="address"
                      id="address"
                      type="text"
                      defaultValue={address}
                    />
                    <label for="Profile picture">picture URL</label>
                    <input
                      name="profilePicture"
                      id="profilePicture"
                      type="text"
                      defaultValue={photoURL}
                    />
                  </div>

                  <button type="submit" class="form-submit-btn">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Modal>
  );
};

export default ContactModal;
