import React, { useState } from "react";
import "react-phone-number-input/style.css";
import "./AddContact.css";
import Swal from "sweetalert2";
import PhoneInput from "react-phone-number-input";

const AddContacts = () => {
  const [value, setValue] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const address = form.address.value;
    const photoURL = form.photoURL.value;
    const userInfo = { name, email, phone, address, photoURL };
    console.log(userInfo);
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    };

    fetch("https://connect-hive.vercel.app/contacts", options)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        if (response.insertedId) {
          Swal.fire({
            title: "Contact Added Successfully",
            icon: "success",

            confirmButtonColor: "cool",
            confirmButtonText: "OK",
          });
        } else {
          Swal.fire({
            title: "Already Added Bookmark",
            icon: "error",

            confirmButtonColor: "cool",
            confirmButtonText: "OK",
          });
        }
      })
      .catch((err) => console.error(err));
  };
  return (
    <main className="relative overflow-hidden">
      <div
        className="bg-[centertop-1rem]   bg-cover bg-opacity-75 
        flex items-center justify-center min-h-screen "
        style={{
          backgroundImage:
            'url("https://c4.wallpaperflare.com/wallpaper/944/995/821/abstract-backgrounds-minimalistic-website-wallpaper-preview.jpg")',
        }}
      >
        {/* <img
          className="flex items-center justify-center w-full h-screen bg-cover "
          src=''
          alt=""
        /> */}

        <div className="">
          <h1 className="flex items-center justify-center mt-10 text-2xl font-semibold text-white">
            Add Contact
          </h1>
          <div className="flex items-center justify-center ">
            <div className="mt-10 form-container ">
              <form onSubmit={handleSubmit} className=" form">
                <div className="form-group">
                  <label className="" for="name">
                    Name
                  </label>
                  <input name="name" id="name" type="text" />
                  <label for="email"> Email</label>
                  <input name="email" id="email" type="text" />
                  <label for="PhoneNumber"> Phone Number</label>
                  <PhoneInput
                    className="text-black"
                    name="phone"
                    id="email"
                    international
                    defaultCountry="BD"
                    value={value}
                    onChange={setValue}
                  />
                  <label for="Address"> Address</label>
                  <input name="address" id="address" type="text" />
                  <label for="Profile picture">picture URL</label>
                  <input name="photoURL" id="photoURL" type="text" />
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
  );
};

export default AddContacts;
