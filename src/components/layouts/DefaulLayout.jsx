import Header from "../Header"
import Main from "../Main"
import { Outlet } from "react-router-dom"

function DefaulLayout() {
  return <>
    <Header />
    <Main />
    <Outlet />
  </>

}

export default DefaulLayout
