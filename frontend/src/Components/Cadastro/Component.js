import './Style.css';
import logo from './assets/logo.png'

function Cadastro() {
    return (
        <div id = 'cadastro'>
            <div id = 'cadastroWrapper'>
                <img src={logo} alt="logo"/>
                <h1>CADASTRO</h1>
                <div class = 'sublinhado'><input type="text" placeholder="Nome Completo"/></div>
                <div class = 'sublinhado'><input type="text" placeholder="CPF"/> </div>
                <div class = 'sublinhado'><input type="text" placeholder="Endereço"/> </div>
                <div class = 'sublinhado'><input type="text" placeholder="Complemento"/> </div>
                <div class = 'sublinhado'><input type="email" placeholder="E-mail"/> </div>
                <div class = 'sublinhado'><input type="password" placeholder="Senha"/> </div>
                
                <button>CADASTRAR</button>

            </div>
        </div>
    );
}

export default Cadastro;
