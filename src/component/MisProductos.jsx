import React, { useState, useEffect } from 'react';
import '../styles/misProductos.css';

const categorias = ['smartphones', 'laptops', 'fragrances', 'skincare', 'groceries', 'home-decoration'];

const MisProductos = () => {
  const [productos, setProductos] = useState([]);
  const [productosFiltrados, setProductosFiltrados] = useState([]);
  const [categoria, setCategoria] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then((response) => response.json())
      .then((data) => {
        setProductos(data);
        setProductosFiltrados(data);
      })
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  useEffect(() => {
    if (categoria !== '') {
      const productosFiltradosTemp = productos.filter(
        (product) => product.category.toLowerCase() === categoria.toLowerCase()
      );

      setProductosFiltrados(productosFiltradosTemp);
    } else {
      setProductosFiltrados(productos);
    }
  }, [categoria, productos]);

  return (
    <div>
      <div className="types">
        <h1>Categorías</h1>
        <ul>
          {categorias.map((cat, index) => (
            <li key={index} onClick={() => setCategoria(cat)}>{cat}</li>
          ))}
        </ul>
      </div>
      <div className="product-container">
        {productosFiltrados.map((products) => (
          <div key={products.id} className="product-card">
            <h3>{products.title}</h3>
            <p>Description: {products.description}</p>
            <p>Price: {products.price}</p>
            <p>Discount Percentage: {products.discountPercentage}</p>
            <p>Rating: {products.rating}</p>
            <p>Stock: {products.stock}</p>
            <p>Brand: {products.brand}</p>
            <p>Category: {products.category}</p>
            <img src={products.thumbnail} alt={products.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MisProductos;
