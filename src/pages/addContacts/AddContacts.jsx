import { useForm } from "react-hook-form";
import React from "react";

import "./AddContact.css";

const AddContacts = () => {
  const { register, handleSubmit } = useForm();

  const handelAddContact = (data) => {
    const name = data.name;
    const email = data.email;
    const address = data.address;
    const phonNumber = data.phonNumber;
    const photo = data.profilePicture;

    console.log(name, email, address, phonNumber, photo);
  };

  return (
    <main>
      <h1 className="flex items-center justify-center mt-10 text-2xl font-semibold">
        Add Contact
      </h1>
      <div className="flex items-center justify-center ">
        <div class="form-container mt-10 ">
          <form onSubmit={handleSubmit(handelAddContact)} class="form">
            <div class="form-group">
              <label for="name">Name</label>
              <input
                {...register("name", { required: true })}
                name="name"
                id="name"
                type="text"
              />
              <label for="email"> Email</label>
              <input
                {...register("email", { required: true })}
                name="email"
                id="email"
                type="text"
              />
              <label for="PhoneNumber"> Phone Number</label>
              <input
                {...register("phonNumber", { required: true })}
                name="phonNumber"
                id="phonNumber"
                type="text"
              />
              <label for="Address"> Address</label>
              <input
                {...register("address", { required: true })}
                name="address"
                id="address"
                type="text"
              />
              <label for="Profile picture">picture URL</label>
              <input
                {...register("profilePicture", { required: true })}
                name="profilePicture"
                id="profilePicture"
                type="text"
              />
            </div>

            <button type="submit" class="form-submit-btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default AddContacts;
