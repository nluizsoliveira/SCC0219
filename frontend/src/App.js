import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar/Component';
import About from './Components/About/Component';
import Hardware from './Components/Hardware/Component';
import Monte from './Components/Monte/Component';
import Perifericos from './Components/Perifericos/Component';
import Suporte from './Components/Suporte/Component';
import Software from './Components/Software/Component';
import Home from './Components/Home/Component';
import Cadastro from './Components/Cadastro/Component';
import Login from './Components/Login/Component';
import Carrinho from './Components/Carrinho/Component';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [cartItems, setCartItems] = useState([]);
  const [peripheralsData, setPeripheralsData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8080/perifericos')
      .then(response => response.json())
      .then(json => setPeripheralsData(json))
      .catch(error => console.error('Error fetching peripherals:', error));
  }, []);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };


  const finalizePurchase = () => {
    fetch('http://localhost:8080/perifericos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ cartItems }),
    })
    .then(response => response.json())
    .then(data => {
      if (data.status === 'error') {
        alert('Error: ' + data.message); 
      } else {
        alert('Purchase successful!'); 
        setCartItems([]);
      }
    })
    .catch((error) => {
      alert('An error occurred while processing your purchase.'); 
      console.error('Purchase Error:', error);
    });
  };

  const updatePeripheralItem = (updatedItem) => {
    const newData = peripheralsData['data'].map(item =>
      item.id === updatedItem.id ? updatedItem : item
    );
    setPeripheralsData({ data: newData });
  };

  const changePage = (newPage) => {
    setCurrentPage(newPage);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'about':
        return <About />;
      case 'hardware':
        return <Hardware />;
      case 'monte':
        return <Monte />;
      case 'perifericos':
        return <Perifericos 
                 data={peripheralsData} 
                 addToCart={addToCart} 
                 updateItem={updatePeripheralItem} 
               />;
      case 'suporte':
        return <Suporte />;
      case 'software':
        return <Software />;
      case 'cadastro':
        return <Cadastro />;
      case 'login':
        return <Login />;
      case 'carrinho':
        return <Carrinho 
                 cartItems={cartItems} 
                 finalizePurchase={finalizePurchase} 
               />;
      default:
        return <div>Page Not Found</div>;
    }
  };

  return (
    <div>
      <Navbar currentPage={currentPage} changePage={changePage} />
      <div>{renderPage()}</div>
    </div>
  );
}

export default App;
