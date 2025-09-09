import Header from "../components/Header"
import Main from "../components/Main"
import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"

function DefaulLayout() {
  return <>
    <Header />
    <Main />
    <Outlet />
    <Navbar />
  </>

}

export default DefaulLayout
