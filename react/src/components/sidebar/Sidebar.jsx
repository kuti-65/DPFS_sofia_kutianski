import '../../App.css';

import { Link } from 'react-router-dom'

export const Sidebar = () => {
  return (
    <div className='navbar'>
      <div className="title-dashboard">
        <ul className="list-title" >
          
        </ul>
      </div>
      <div className="link-options">
        <ul className="list-options">
          <li>
            <Link to="/catalog">Catalogo</Link>
          </li>
          <li>
            <Link to="/last-product">ultimo Producto</Link>
          </li>
          <li>
            <Link to="/counter">Counter</Link>
          </li>
          <li>
            <Link to="/">home</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}