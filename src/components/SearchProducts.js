import React from 'react';
import { useState, useEffect, useRef } from 'react';

// import noPoster from '../assets/images/no-poster.jpg';

function SearchProducts(props) {


	const [keyword, setKeyword] = useState('');

	const search = useRef(null);
	
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(search.current.value);
		setKeyword(search.current.value);
	};

	const [productos, setProductos] = useState([]);

	useEffect(() => {
		fetch('http://localhost:3000/api/v1/products')
			.then(res => res.json())
			.then(data => setProductos(data.data.map((producto) => {
				return (
					{ "name": producto.name, "brand": producto.brand, "price": producto.price }
				)
			})))
			.catch(e => console.log(e))
	}, [keyword])

	return (
		<div className="container-fluid">
			{
					<>
						<div className="row my-4">
							<div className="col-12 col-md-6">
								{/* Buscador */}
								<form method="GET" onSubmit={handleSubmit}>
									<div className="form-group">
										<label htmlFor="">Buscar por producto:</label>
										<input type="text" className="form-control" ref={search} />
									</div>
									<button className="btn btn-info" type='submit'>Buscar</button>
								</form>
							</div>
						</div>
						<div className="row">
							<div className="col-12">
								<h2>Productos para la palabra: {keyword}</h2>
							</div>
							{/* Listado de películas */}
							{
								productos.length > 0 && productos.map((producto, i) => {
									return (
										<div className="col-sm-6 col-md-3 my-4" key={i}>
											<div className="card shadow mb-4">
												<div className="card-header py-3">
													<h5 className="m-0 font-weight-bold text-gray-800">{producto.name}</h5>
												</div>
												<div className="card-body">
													<div className="text-center">
														<img
															className="img-fluid px-3 px-sm-4 mt-3 mb-4"
															src={producto.Poster}
															alt={producto.name}
															style={{ width: '90%', height: '400px', objectFit: 'cover' }}
														/>
													</div>
													<p>{producto.price}</p>
												</div>
											</div>
										</div>
									)
								})
							}
						</div>
						{productos.length === 0 && <div className="alert alert-warning text-center">No se encontraron productos</div>}
					</>
			}
		</div>
	)
}

export default SearchProducts;