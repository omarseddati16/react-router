import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaulLayout from "./layouts/DefaulLayout"
import HomePage from "./pages/HomePage"
import AboutUs from "./pages/AboutUs"
import Products from "./pages/Products"
import ProductsDetail from "./pages/ProductsDetail"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaulLayout />}>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/about" element={<AboutUs />}></Route>
          <Route path="/product" element={<Products />}></Route>
          <Route path="/product/:id" element={<ProductsDetail />} />
        </Route>
      </Routes>
    </BrowserRouter >
  )
}

export default App
