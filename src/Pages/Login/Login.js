import './Login.css';
import Title from '../../Components/Title/Title.js';

export default function Login() {
  return (
    <div>
        <Title text="Login"/>
            <div id='login_form'>
                <form>
                    <input type='text' placeholder='Benutzername' required></input>
                    <input type='password' placeholder='Passwort' required></input>

                    <button id='login_button' type='submit'>Einloggen</button>
                </form>
            </div>
    </div>
  )
}