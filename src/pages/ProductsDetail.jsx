import axios from 'axios'
import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'

function ProductsDetail() {

  const { id } = useParams()
  const [product, setProduct] = useState({});

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then((resp) =>
      setProduct(resp.data))
  }, [id]);

  return (
    <div className="d-flex flex-column align-items-center text-center">
      <h1 className='m-4'>{product.title}</h1>
      <img src={product.image} alt={product.title} style={{ maxWidth: "250px" }} />
      <p className='mt-4'>{product.description}</p>
      <p>€ {product.price}</p>
      <p>Categoria: {product.category}</p>
    </div>
  )
}

export default ProductsDetail
