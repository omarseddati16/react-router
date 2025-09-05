import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaulLayout from "./components/layouts/DefaulLayout"
import HomePage from "./components/pages/HomePage"
import AboutUs from "./components/pages/AboutUs"
import Product from "./components/pages/Product"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaulLayout />}>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/about" element={<AboutUs />}></Route>
          <Route path="/product" element={<Product />}></Route>
        </Route>
      </Routes>
    </BrowserRouter >
  )
}

export default App
