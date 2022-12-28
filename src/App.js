import React from 'react';

import {Routes,  Route} from 'react-router-dom';

//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from "./components/Navbar";
import Details from "./components/Details";
import Cart from "./components/Cart";
import Default from "./components/Default";
import ProductList from "./components/ProductList";
import Modal from "./components/Modal";


class App extends React.Component {
  render()
  {
    return(
      <React.Fragment>

        <Navbar></Navbar>


        <Routes>
          <Route  path="/" element={<ProductList />} > </Route>  
          <Route  path="/details" element={<Details/>} > </Route> 
          <Route  path="/cart" element={<Cart/>} > </Route>
          <Route  path="/*"  element={<Default/>}> </Route> 

        </Routes>
        <Modal />


      
      </React.Fragment>



    );
  }
}

export default App;
