import React from 'react';
import './Style.css';
import carrinho from './assets/carrinho.png';
import logo from './assets/logo.png';
import login from './assets/login.png';

function Navbar({ currentPage, changePage }) {
    return (
        <nav id='headerNav'>
            <img id='logo' src={logo} alt="logo" />
            <div id="inputPageListWrapper">
                <input />
                <button>Procurar</button>
                <ul id="pageList">
                    <li className={currentPage === 'home' ? 'selected' : ''}>
                        <button onClick={() => changePage('home')}>Oferta do Dia</button>
                    </li>
                    <li className={currentPage === 'perifericos' ? 'selected' : ''}>
                        <button onClick={() => changePage('perifericos')}>Periféricos</button>
                    </li>
                    <li className={currentPage === 'hardware' ? 'selected' : ''}>
                        <button onClick={() => changePage('hardware')}>Hardware</button>
                    </li>
                    <li className={currentPage === 'software' ? 'selected' : ''}>
                        <button onClick={() => changePage('software')}>Software</button>
                    </li>
                    <li className={currentPage === 'monte' ? 'selected' : ''}>
                        <button onClick={() => changePage('monte')}>Monte o Seu</button>
                    </li>
                    <li className={currentPage === 'about' ? 'selected' : ''}>
                        <button onClick={() => changePage('about')}>Quem Somos</button>
                    </li>
                    <li className={currentPage === 'suporte' ? 'selected' : ''}>
                        <button onClick={() => changePage('suporte')}>Suporte</button>
                    </li>
                </ul>
            </div>
            <div id='iconsWrapper'>
                <div className='iconWrapper'>
                    <button onClick={() => changePage('carrinho')}>
                        <img src={carrinho} alt="carrinho" /><span>Carrinho</span>
                    </button>
                </div>
                <div className='iconWrapper'>
                    <button onClick={() => changePage('login')}>
                        <img src={login} alt="entrar" /><span>Login</span>
                    </button>
                </div>
                <div className='iconWrapper'>
                    <button onClick={() => changePage('cadastro')}>
                        <img src={login} alt="cadastro" /><span>Cadastro</span>
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
