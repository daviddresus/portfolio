import './Login.css';
import Title from '../../Components/Title/Title.js';

export default function Login() {
  return (
    <div>
        <Title text="Login"/>
            <div id='login_form'>
              {/* TODO: action is only temporary and needs to be changed!!! */}
                <form method='POST' action='http://localhost/portfolio_backend/login.php'>
                    <input type='text' placeholder='Benutzername' name='username' id='username' required></input>
                    <input type='password' placeholder='Passwort' name='password' id='password' required></input>

                    <button id='login_button' type='submit'>Einloggen</button>
                </form>
            </div>
    </div>
  )
}