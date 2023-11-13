import './Style.css';
import logo from './assets/logo.png'
import login from './assets/login.png'
import password from './assets/password.png'

function Login() {
    return (
        <div id = 'login'>
            <div id = 'loginWrapper'>
                <img src={logo} alt="logo"/>
                <h1>NOME_EMPRESA</h1>
                <div class = 'loginIconWrapper sublinhado'><input type="email"placeholder="email"/><img src={login} alt="logins salvos"/></div>
                <div class = 'loginIconWrapper sublinhado'><input type="password" placeholder="senha"/><img src={password} alt="mostrar senha"/></div>
                
                

                <button>ENTRAR</button>

                <span>Não possui contra? <a class = 'sublinhado' href="/cadastro.html">Cadastre-se</a></span>

            </div>

            </div>
    );
}

export default Login;
