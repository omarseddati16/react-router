import { NavLink } from "react-router-dom"

function Main() {
  return (
    <main>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <ul className="list-unstyled">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About us</NavLink>
              </li>
              <li>
                <NavLink to="/product">Products</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Main
