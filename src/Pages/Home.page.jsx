import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Home = () => {
  const [users, setUsers] = useState([]);
  const loadUsers = () => {
    axios.get("http://localhost:3001/data").then((res) => {
      const reversedUsers = res.data.reverse();
      setUsers(reversedUsers);
    });
  };

  useEffect(() => {
    loadUsers();
  }, []);

  function Delete(id) {
    axios.delete(`http://localhost:3001/data/${id}`).then(() => loadUsers());
  }

  return (
    <>
      <div className="w-full h-full flex flex-col px-10 oy-8">
        <h1 className="text-3xl font-semibold text-black my-2"> Home page</h1>
        <table className="table-auto border border-black ">
          <thead className="bg-gray-700">
            <tr className="text-white">
              <th className="w-[30rem]">#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className=" text-center font-bold text-black  w-full bg-blue-300">
            {users.map((user, index) => (
              <tr key={index} className=" border border-black">
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td className="flex  space-x-4 whitespace-nowrap justify-center">
                  <Link
                    to={`/users/${user.id}`}
                    className="px-2 py-2 bg-black text-white rounded-lg w-[70px]"
                  >
                    View
                  </Link>
                  <Link
                    to={`/edit-user/${user.id}`}
                    className="px-2 py-2 bg-yellow-400 text-white rounded-lg w-[70px]"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => Delete(user.id)}
                    className="px-2 py-2 bg-red-500 rounded-lg text-white w-[70px]"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Home;
