import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

export default function AppLayouts() {
  return (
    <div className="">
      <Navbar />
      <Outlet/>
      <Footer/>
    </div>
  )
}
