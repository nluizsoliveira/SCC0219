import './Style.css'
import carrinho from './assets/carrinho.png'
import logo from './assets/logo.png'
import login from './assets/login.png'

function Navbar() {
    return (
        <nav id = 'headerNav'>
        <img id = 'logo' src={logo} alt="logo"/>
        <div id = "inputPageListWrapper">
            <input/>
            <button>Procurar</button>
            <ul id = "pageList">
                <li className = "selected"><a href="home.html">Oferta do Dia</a></li>
                <li><a href="perifericos.html">Periféricos</a></li>
                <li><a href="hardware.html">Hardware</a></li>
                <li><a href="software.html">Software</a></li>
                <li><a href="monte.html">Monte o Seu</a></li>
                <li><a href="about.html">Quem Somos</a></li>
                <li><a href="suporte.html">Suporte</a></li>
            </ul>
        </div>
        <div id = 'iconsWrapper'>
           <div className = 'iconWrapper'><a href="carrinho.html"><img src={carrinho} alt="carrinho"/><span>Carrinho</span></a></div>
           <div className = 'iconWrapper'><a href="login.html"><img src={login} alt="entrar"/><span>Login</span></a></div>
           <div className = 'iconWrapper'><a href="cadastro.html"><img src={login} alt="cadastro"/><span>Cadastro</span></a></div>
        </div>
    </nav>
    );
  }
  
  export default Navbar;