import React from 'react';
import RestaurantList from './components/RestaurantList';
import RestaurantDetail from './components/RestaurantDetail';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PizzaList from './components/PizzaList';
import AddRestaurantPizzaForm from './components/AddRestaurantPizzaForm';
import './styles/App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/restaurants/:id"
            element={<RestaurantDetail />}
          />
          <Route path="/*" element={<RestaurantList />} />
         
          <Route path="/pizzas/:id" element={<PizzaList />} />
          <Route path="/add-restaurant-pizza" element={<AddRestaurantPizzaForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;