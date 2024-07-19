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
    <div className="admin__section ">
      <h1 className="text-[35px] font-bold">Add User</h1>

      <form className="admin__form">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Enter your Name"
          className="custominput"
        />

        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Enter your Email"
          className="custominput"
        />

        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          type="phone"
          placeholder="Enter your Phone"
          className="custominput"
        />

        <button onClick={Submit} type="submit" className="custom__button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Adduser;
