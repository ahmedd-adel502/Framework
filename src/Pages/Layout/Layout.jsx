import { Outlet } from "react-router";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

export default function Layout({toggleTheme,theme}) {
  return <>
    <Navbar toggleTheme={toggleTheme} theme={theme==="dark"?"dark":"light"} />
    <Outlet toggleTheme={toggleTheme} theme={theme==="dark"?"dark":"light"} />
    <Footer toggleTheme={toggleTheme} theme={theme==="dark"?"dark":"light"} />
  </>
}
