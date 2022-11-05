import React from "react";
import { useState, useEffect, useRef } from "react";

// import noPoster from '../assets/images/no-poster.jpg';

const SearchProducts = () => {
  const [equipo, setEquipo] = useState([])

  useEffect(() => {
    // console.log('useEffect')
    obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    // const data = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await fetch('http://localhost:3000/api/v1/products')
    const users = await data.json()
    console.log(users)
    setEquipo(users.data);
  };

  return (
    <div>
      <h1>Búsqueda</h1>
      <ul>
		{
			equipo.map(item => (
				<li key='item.id'>{item.name}</li>
			))
		}
      </ul>
    </div>
  );
};

export default SearchProducts;
