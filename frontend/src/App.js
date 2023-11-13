import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Component';
import About from './Components/About/Component'
import Hardware from './Components/Hardware/Component';
import Monte from './Components/Monte/Component';
import Perifericos from './Components/Perifericos/Component';
import Suporte from './Components/Suporte/Component';
import Software from './Components/Software/Component'
import Home from './Components/Home/Component'
import Cadastro from './Components/Cadastro/Component'

function App() {
  const [currentPage, setCurrentPage] = useState('home'); 

  const changePage = (newPage) => {
    setCurrentPage(newPage);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home/>
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
      case 'software':
        return <Software/>
      case 'cadastro':
        return <Cadastro/>
      default:
        return <div>Page Not Found</div>;
        
    }
  };

  return (
    <div>
      <Navbar currentPage={currentPage} changePage={changePage} />
      <div>
        {renderPage()}
      </div>
    </div>
  );
}

export default App;
