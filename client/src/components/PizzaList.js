import React, { useState, useEffect } from 'react';
import img from '../images/restaurant.jpg';  

function PizzaList() {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    
    fetch('/pizzas')
      .then(response => response.json())
      .then(data => setPizzas(data));
  }, []);

  return (
    <div className="bg-primary text-black p-5" style={{ backgroundImage: `url(${img})` }}>
      <img src={img} className="img-fluid" alt="" />
      <h3 className="mt-3">Pizzas:</h3>
      <ul className="list-group">
        {pizzas.map((pizza) => (
          <li key={pizza.id} className="list-group-item bg-transparent border-light">
            <h2 className="mb-0 text-black bg-light">{pizza.name}</h2>
            <p className="mb-0 text-black bg-light">{pizza.ingredients}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PizzaList;