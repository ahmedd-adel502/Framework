import { createBrowserRouter, RouterProvider } from "react-router";
import Navbar from "./Components/Navbar/Navbar";
import Layout from "./Pages/Layout/Layout";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Contact from "./Pages/Contact/Contact";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";
import { useState } from "react";

export default function App() {
   
      const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
      function toggleTheme(){
        if(theme === "light"){
          setTheme("dark");
          localStorage.setItem("theme","dark");
        }else{
          setTheme("light");
          localStorage.setItem("theme","light");
        }
      }
    
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout toggleTheme={toggleTheme} theme={theme} />,
      children: [
        { path: "/",index: true, element: <Home  toggleTheme={toggleTheme} theme={theme} /> },
        { path: "/about", element: <About  toggleTheme={toggleTheme} theme={theme} /> },
        { path: "/portfolio", element: <Portfolio  toggleTheme={toggleTheme} theme={theme} /> },
        { path: "/contact", element: <Contact  toggleTheme={toggleTheme} theme={theme} /> }
      ]
    }
  ])

  return <>
    <RouterProvider router={router} />
  </>
}
