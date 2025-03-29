import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './components/home/Home.js'
import  Catalog from './components/catalog/Catalog.js';
import Cart from './components/cart/Cart.js';
import { Provider } from 'react-redux';
import store from './store/cart.js';


const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/catalog", element: <Catalog /> },
      { path: "/cart", element: <Cart /> }
    ],
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store = {store}>
    <RouterProvider router={router} />
  </Provider>
);

reportWebVitals();
