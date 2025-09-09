import Header from "../components/Header"
import Main from "../components/Main"
import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"

function DefaultLayout() {
  return <>
    <Header />
    <Navbar />
    <Main />
    <Outlet />

  </>

}

export default DefaultLayout
