import  { Outlet } from "react-router-dom";
import Navbars from "../components/Navbars";
import Footer from "../components/Footer";

const main = () => {
  return (
    <div>
      <Navbars/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default main
