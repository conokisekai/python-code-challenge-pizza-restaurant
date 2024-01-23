import React, { useState, useEffect } from 'react';
import logo from '../images/logo.jpeg';  
import { Link } from 'react-router-dom';

function RestaurantList() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
 
    fetch('/restaurants')
      .then(response => response.json())
      .then(data => setRestaurants(data));
  }, []);

  function handleDelete(id) {
    fetch(`/restaurants/${id}`, {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        setRestaurants((restaurants) =>
          restaurants.filter((restaurant) => restaurant.id !== id)
        );
      }
    });
  }

  return (
    <div className="bg-primary text-white p-5" style={{ backgroundImage: `url(${logo})` }}>
        <img src={logo} className="img-fluid" alt="" />
      <div className="container">
        <h1 className="display-4 mb-4">Our Restaurants</h1>
        <div style={{paddingBottom: 20}}>
          <button><Link className="btn btn-light text-primary p-3" to="/restaurant_pizzas/new">Add a new Pizza</Link></button>
        </div>

        <ul className="list-group">
          {restaurants.map(restaurant => (
            <li key={restaurant.id} className="list-group-item bg-transparent">
              <Link to={`/restaurants/${restaurant.id}`} className="text-white p-3">{restaurant.name}</Link>
              <p className="text-white p-3">{restaurant.address}</p>
              <button type="button" className="btn btn-danger" onClick={() => handleDelete(restaurant.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default RestaurantList;