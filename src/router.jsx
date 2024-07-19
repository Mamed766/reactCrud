import Home from "./Pages/Home.page";
import User from "./Pages/user/User";
import Adduser from "./Pages/user/Adduser";
import Edit from "./Pages/user/Edit";

export const routers = [
  {
    id: 1,
    path: "/",
    element: <Home />,
  },
  {
    id: 2,
    path: "/users/:id",
    element: <User />,
  },
  {
    id: 3,
    path: "/add-user",
    element: <Adduser />,
  },
  {
    id: 4,
    path: "/edit-user/:id",
    element: <Edit />,
  },
];
