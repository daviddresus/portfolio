import './Login.css';
import Title from '../../Components/Title/Title.js';

import React, { useEffect, useState } from 'react';

export default function Login() {
  const [loginError, setLoginError] = useState(null);

  useEffect(() => {
    document.title = 'Login';
  }, []);

  const handleLogin = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    try {
      const response = await fetch('https://daviddre.com/portfolio_backend/login.php', {
        method: 'POST',
        body: formData,
        credentials: 'include', // This is important for sending cookies
      });

      if (response.ok) {
        window.location.href = '/';
      } else {
        setLoginError('Ungültige Logindaten. Bitte versuchen Sie erneut.'); // Error message if login fails
      }
    } catch (error) {
      console.error('Error during login:', error);
      setLoginError('An error occurred during login. Please try again later.'); // Network errors
    }
  };

  return (
    <div>
      <body>
        <Title text="Login" />
        {loginError && <div className="login_error"><p>{loginError}</p></div>}
        <div id='login_form'>
          <form onSubmit={handleLogin}>
            <input type='text' placeholder='Benutzername' name='username' id='username' required></input>
            <input type='password' placeholder='Passwort' name='password' id='password' required></input>

            <button id='login_button' type='submit'>Einloggen</button>
          </form>
        </div>
      </body>
    </div>
  )
}