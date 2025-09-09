import axios from 'axios'
import { useState, useEffect } from "react"
import { useParams, useNavigate } from 'react-router-dom'


function ProductsDetail() {

  const { id } = useParams()
  const [product, setProduct] = useState({});
  const navigate = useNavigate();



  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then((resp) =>
      setProduct(resp.data))
  }, [id]);

  const less = product.id === 1 ? 20 : product.id - 1
  const more = product.id === 20 ? 1 : product.id + 1

  return (
    <div className="d-flex flex-column align-items-center text-center">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-header">
                <h1 className='m-4'>{product.title}</h1>
              </div>
              <div className="card-body">
                <img src={product.image} alt={product.title} style={{ maxWidth: "250px", height: "300px" }} />
              </div>
              <div className="card-footer">
                <p className='mt-4'>{product.description}</p>
                <p>€ {product.price}</p>
                <p>Categoria: {product.category}</p>


                <div className="d-flex justify-content-between mt-4">
                  <button onClick={() => navigate(`/product/${less}`)
                  }
                  >
                    Prodotto Precedente
                  </button>

                  <button onClick={() => navigate(`/product/${more}`)
                  }
                  >
                    Prodotto Successivo
                  </button>
                </div>
              </div>
            </div >
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductsDetail
