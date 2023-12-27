import './App.css';
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import BasketProduct from './components/BasketProduct';
import { useDispatch, useSelector } from 'react-redux';
import { updateTotal } from './features/basketSlice';

function App() {
  
  const {products} = useSelector((store) => store.basket);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateTotal())
  },[products,dispatch]);

  return (
    <>
      <Navbar />
      <BasketProduct />
    </>    
  );
}

export default App;
