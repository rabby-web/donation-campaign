import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Page/Home/Home";
import Donation from "../Page/Donation/Donation";
import Error from "../Page/Error/Error";
import Cart from "../Page/Cart/Cart";
import Statistics from "../Page/Statistics/Statistics";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        // loader: () => fetch("/donation.json"),
      },
      {
        path: "/donation",
        element: <Donation></Donation>,
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/cart/:id",
        element: <Cart></Cart>,
        loader: () => fetch("/donation.json"),
      },
    ],
  },
]);
export default router;
