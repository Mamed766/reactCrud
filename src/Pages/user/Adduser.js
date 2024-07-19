import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";

const Adduser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const navigate = useNavigate();

  const data = {
    name: name,
    email: email,
    phone: phone,
  };

  function Submit(e) {
    e.preventDefault();
    axios.post("http://localhost:3001/data", data).then(navigate("/"));
  }

  return (
    <div className="w-screen h-full justify-center flex flex-col items-center mt-16 ">
      <h1 className="text-[35px] font-bold">Add User</h1>

      <form className="w-[80%] h-full flex flex-col justify-center items-center border p-3">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Enter your Name"
          className="w-[80%] text-xl font-normal p-5 outline-none"
        />

        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Enter your Email"
          className="w-[80%] text-xl font-normal p-5 outline-none"
        />

        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          type="phone"
          placeholder="Enter your Phone"
          className="w-[80%] text-xl font-normal p-5 outline-none"
        />

        <button
          onClick={Submit}
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-lg w-full"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Adduser;
