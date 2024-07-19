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
    <div className="admin__section">
      <h1 className="text-[35px] font-bold">Edit User</h1>

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

        <button onClick={Update} type="submit" className="custom__button">
          Update User
        </button>
      </form>
    </div>
  );
};

export default Edit;
