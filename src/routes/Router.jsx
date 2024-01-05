import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Login from "../authentication/Login";
import Registration from "../authentication/Registration";
import AddContacts from "../pages/addContacts/AddContacts";
import AllContacts from "../pages/AllContacts";
import Home from "../pages/Home";
import Favorite from "../components/Favorite";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/registration",
        element: <Registration />,
      },
      {
        path: "/addContacts",
        element: <AddContacts />,
      },
      {
        path: "/allContacts",
        element: <AllContacts />,
      },
      {
        path: "/favorite",
        element: <Favorite />,
      },
    ],
  },
]);

export default Router;
