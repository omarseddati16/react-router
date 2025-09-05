import axios from "axios"
import { useState, useEffect } from "react"


function Product() {

  const [products, setProducts] = useState([])

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((resp) => {
        setProducts(resp.data);
      })
  }, []);

  return (
    <div className="d-flex flex-column align-items-center text-center">
      <h1>Lista Prodotti</h1>
      <ul className="list-unstyled m-5 ">
        {products.map((product) => (
          <li className="pb-5" key={product.id}>
            <div>
              <h4>{product.title}</h4>
              <p>€ {product.price}</p>
              <img src={product.image} alt={product.title} style={{ maxWidth: "130px" }} />
            </div>
          </li>
        ))}
      </ul>
    </div >
  )
}

export default Product
