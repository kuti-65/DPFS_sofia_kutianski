// import React from 'react'
// import './Catalog.css';
import { useState, useEffect } from "react";
import './counter.css'

export const Counter = () => {
  const [models, setModels] = useState([]);
  const [users, setUsers] = useState([]);
 
  useEffect(() => {
    fetch("http://localhost:3000/api/products")
      .then((res) => res.json())
      .then((data) => setModels(data));

    fetch("http://localhost:3000/api/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className='container-counter'>

      {models ? (
        <>
          <div>
            <h4 className="list-title">items totales</h4>
            <ul className="list-count">
              <li>productos: {models.count}</li>
              <li>usuarios: {users.count}</li>
              
            </ul>
          </div>
          <div></div>
        </>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  )
}