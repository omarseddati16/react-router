import axios from "axios"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import { useBudget } from "../contexts/BudgetContext";



function Products() {

  const [products, setProducts] = useState([])
  const { budgetMode } = useBudget();

  const lowBudget = budgetMode ? products.filter(product => product.price <= 30) : products;

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((resp) => {
      setProducts(resp.data);
    })
  }, []);

  return (
    <div className="d-flex flex-column align-items-center text-center">
      <h1>Lista Prodotti</h1>
      <ul className="list-unstyled m-5 ">
        {lowBudget.map((product) => (
          <li className="pb-5" key={product.id}>
            <Link to={`/product/${product.id}`} className="text-decoration-none text-dark">
              <div>
                <h4>{product.title}</h4>
                <p>€ {product.price}</p>
                <img src={product.image} alt={product.title} style={{ maxWidth: "130px" }} />
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div >
  )
}

export default Products
