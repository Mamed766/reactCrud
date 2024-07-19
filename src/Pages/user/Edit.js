import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

const Edit = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3001/data/${id}`).then((res) => {
      setName(res.data.name);
      setEmail(res.data.email);
      setPhone(res.data.phone);
    });
  }, []);

  const data = {
    name: name,
    email: email,
    phone: phone,
  };

  function Update(e) {
    e.preventDefault();
    axios.put(`http://localhost:3001/data/${id}`, data).then(navigate("/"));
  }

  return (
    <div className="w-screen h-full justify-center flex flex-col items-center mt-16 ">
      <h1 className="text-[35px] font-bold">Edit User</h1>

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
          onClick={Update}
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-lg w-full"
        >
          Update User
        </button>
      </form>
    </div>
  );
};

export default Edit;
