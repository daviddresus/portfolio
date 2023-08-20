import './Login.css';
import Title from '../../Components/Title/Title.js';

import React, { useEffect } from 'react';

export default function Login() {

  useEffect(() => {
    document.title = 'Login';
  }, []);

  return (
    <div>
        <Title text="Login"/>
            <div id='login_form'>
                <form method='POST' action='https://daviddre.com/portfolio_backend/login.php'>
                    <input type='text' placeholder='Benutzername' name='username' id='username' required></input>
                    <input type='password' placeholder='Passwort' name='password' id='password' required></input>

                    <button id='login_button' type='submit'>Einloggen</button>
                </form>
            </div>
    </div>
  )
}