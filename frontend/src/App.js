import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Component';
import About from './Components/About/Component'
import Hardware from './Components/Hardware/Component';
import Monte from './Components/Monte/Component';
import Perifericos from './Components/Perifericos/Component';
import Suporte from './Components/Suporte/Component';

function App() {
  const [currentPage, setCurrentPage] = useState('home'); 

  const changePage = (newPage) => {
    setCurrentPage(newPage);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <div>Home Page Content</div>;
      case 'about':
        return <About/>
      case 'hardware':
        return <Hardware/>
      case 'monte':
        return <Monte/>
      case 'perifericos':
        return <Perifericos/>
      case 'suporte':
        return <Suporte/>
      default:
        return <div>Page Not Found</div>;
        
    }
  };

  return (
    <div>
      <h1>App</h1>
      <Navbar currentPage={currentPage} changePage={changePage} />
      <div>
        {renderPage()}
      </div>
    </div>
  );
}

export default App;
