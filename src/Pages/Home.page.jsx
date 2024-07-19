import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import TableHeader from "../components/tableHead.component";

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
      <div className="home__section">
        <h1 className="text-3xl font-semibold text-black my-2"> Home page</h1>
        <table className="table-auto border border-black ">
          <TableHeader />
          <tbody className="table__body">
            {users.map((user, index) => (
              <tr key={index} className=" border border-black">
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td className="flex py-2 space-x-4 whitespace-nowrap justify-center">
                  <Link to={`/users/${user.id}`} className="table__link">
                    View
                  </Link>
                  <Link
                    to={`/edit-user/${user.id}`}
                    className="table__link bg-yellow-500"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => Delete(user.id)}
                    className="table__link bg-red-500 "
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
