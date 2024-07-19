import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const User = () => {
  const { id } = useParams();

  const [user, setUser] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/data/${id}`)
      .then((res) => setUser(res.data));
  }, []);

  return (
    <div className="view__section">
      {user && (
        <div className="view__section--container">
          <div className="flex flex-col gap-3 ">
            <h2 className="border-b-2">Name:</h2>
            <h2 className="border-b-2">Emai:</h2>
            <h2 className="border-b-2">Phone:</h2>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="border-b-2">{user.name}</h2>
            <h2 className="border-b-2">{user.email}</h2>
            <h2 className="border-b-2">{user.phone}</h2>
          </div>
        </div>
      )}
      <Link className="ml-3 bg-black text-white p-4 rounded-lg" to={"/"}>
        Back to home
      </Link>
    </div>
  );
};

export default User;
