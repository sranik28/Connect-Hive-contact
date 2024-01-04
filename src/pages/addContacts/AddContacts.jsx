import React from "react";
// import bgImg from "../../assets/addContact/abstract-backgrounds-minimalistic-website-wallpaper-preview.jpg";

import "./AddContact.css";
import { useForm } from "react-hook-form";

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
              <form onSubmit={handleSubmit(handelAddContact)} className=" form">
                <div className="form-group">
                  <label className="" for="name">
                    Name
                  </label>
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
        </div>
      </div>
    </main>
  );
};

export default AddContacts;
