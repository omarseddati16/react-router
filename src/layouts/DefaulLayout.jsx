import Header from "../components/Header"
import Main from "../components/Main"
import { Outlet } from "react-router-dom"

function DefaulLayout() {
  return <>
    <Header />
    <Main />
    <Outlet />
  </>

}

export default DefaulLayout
