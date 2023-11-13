import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Component';

function App() {
  const [currentPage, setCurrentPage] = useState('home'); // Default page

  const changePage = (newPage) => {
    setCurrentPage(newPage);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <div>Home Page Content</div>;
      // Add cases for other pages
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
