import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Banners from './components/Banners';
import './App.css';
import ItemListContainer from './components/ItemListContainer';



function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting={"Bienvenido/a a Sangre de Cristo, el lugar donde encontrarás TU vino"}/>
      <Banners />
      <Footer />
    </div>
  );
}

export default App;
