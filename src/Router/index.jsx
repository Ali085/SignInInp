import { createBrowserRouter } from "react-router-dom";
import Navbar from "../Components/Navbar";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Portfolio from "../Pages/Portfolio";
import Sercvices from "../Pages/Services";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar/>,
    },
    {
        path: "/about",
        element: <About/>,
      },
      {
        path: "/services",
        element: <Sercvices/>,
      },
      {
        path: "/portfolio",
        element: <Portfolio/>,
      },
      {
        path: "/contact",
        element: <Contact/>,
      },
  ]);

  export default router