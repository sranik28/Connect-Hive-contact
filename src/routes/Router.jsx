import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Login from "../authentication/Login";
import Registration from "../authentication/Registration";
import AddContacts from "../pages/AddContacts";
import AllContacts from "../pages/AllContacts";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
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
    ],
  },
]);

export default Router;
