import React, { useState } from 'react';
import { useDispatch } from 'react-redux'; 
import { loginSuccess } from '../redux/actions/authActions';
import { useNavigate } from 'react-router-dom';
import '../css/main.css';
import { API_BASE_URL } from "../api/apiConfig";

function Form() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);  
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_BASE_URL}/user/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();  
        
        const { token } = data.body;  
        dispatch(loginSuccess(token));  

        if (rememberMe) {
          localStorage.setItem("token", token);  
        } else {
          sessionStorage.setItem("token", token);  
        }
        navigate('/user');  

      } else {
        console.error('Erreur de connexion');
      }
    } catch (error) {
      console.error('Erreur de connexion:', error);
    }
  };

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="email">Username</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="input-remember">
            <input 
              type="checkbox" 
              id="remember-me"
              checked={rememberMe} 
              onChange={(e) => setRememberMe(e.target.checked)} 
            />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button type="submit" className="sign-in-button">
            Sign In
          </button>
        </form>
      </section>
    </main>
  );
}

export default Form;
