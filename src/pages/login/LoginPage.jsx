/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import logoBarber from './../../assets/barber-logo-2.png';
import './LoginPage.css';
import Zoom from 'react-reveal/Zoom';
import { useNavigate } from 'react-router-dom';

function LoginPage() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  const navigate = useNavigate()
  const goToHomePage = () => {
    navigate('/home')
  }

  return (
    <div className="container">
      <div className="container-login">
      <Zoom bottom>
        <div className="wrap-login">
          <form className="login-form">

            <span className="login-form-title">Bem Vindo!</span>
            
            <span className="login-form-title">
              <img src={logoBarber} alt="Logo Barbearia" />
            </span>
          
            <div className="wrap-input">
              <input
               className={email !== "" ? 'has-val input' : 'input'} 
               type="email"
               value={email}
               onChange={e => setEmail(e.target.value)}
              />
              <span className="focus-input" data-placeholder='Email'></span>
            </div>

            <div className="wrap-input">
              <input 
                className={password !== "" ? 'has-val input' : 'input'}
                type="password" 
                value={password}
               onChange={e => setPassword(e.target.value)}
              />
              <span className="focus-input" data-placeholder='Password'></span>
            </div>

            <div className="container-login-form-btn">
              <button 
              className='login-form-btn'
              onClick={goToHomePage}>
                Login</button>
            </div>

            <div className="text-center">
              <span className="txt1">Esqueci a senha</span>
              <a href="#" className="txt2">Recuperar Senha</a>
            </div>

          </form>
        </div>
      </Zoom>
      </div>
    </div>
  );
}

export default LoginPage;
