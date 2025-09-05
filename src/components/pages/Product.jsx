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
    <div>
      <h1>Lista Prodotti</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <div>
              <h2>{product.title}</h2>
              <p>€ {product.price}</p>
              <img src={product.image}
                alt={product.title} />
            </div>
          </li>
        ))}
      </ul>
    </div >
  )
}

export default Product
