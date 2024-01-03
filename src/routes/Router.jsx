import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Login from "../authentication/Login";
import Registration from "../authentication/Registration";
import AllContacts from "../pages/AllContacts";
import AddContacts from "../pages/addContacts/AddContacts";

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
