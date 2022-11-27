import { use, useState } from 'react';

const MIN = 6;
const MAX = 50;
const GROUP = `[a-záéíóúüA-ZÁÉÍÓÚÜÑ]{${MIN},${MAX}}`;
const VALIDATION = new RegExp(`^(${GROUP})( ${GROUP})*$`);

export function Login({ onSubmit }) {
  const validate = (email, pass, pass2) => {
    ///if (pass.length < 6 || pass2.length < 6) return 'La contraseña debe tener min 6 caracteres';
    //if (!user || !usern.includes(GROUP)) return 'Usuario de contener caracter especial';
    if (!email.includes('@')) return 'emal incorrecto';
  };

  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [email, setEmail] = useState('');
  const [usern, setUsern] = useState('');
  const [pass2, setPass2] = useState('');

  const errorMessange = validate(user, pass);
  const errorMessange1 = validate(usern, email, pass2);

  return (
    <div class="login" id="login">
      <div class="login-box1" id="login-box1">
        <p1>Login</p1>
        <form>
          <label htmlFor="user">User: </label>
          <input
            type="text"
            id="user"
            name="user"
            placeholder="User Name"
            autoComplete="off"
            value={user}
            onChange={(ev) => setUser(ev.target.value)}
          />
          <br />
          <label htmlFor="pass">Password: </label>
          <input
            type="password"
            id="pass"
            name="pass"
            placeholder="Password"
            value={pass}
            onChange={(ev) => setPass(ev.target.value)}
          />
          <p>{errorMessange}</p>
          <p>
            mostrar: {user} {pass} {usern}
          </p>
          <br />
          <button type="submit" disabled={user.length === 0}>
            Ingresar
          </button>
        </form>
      </div>
      <div class="login-box1" id="login-box1">
        <p1>Register</p1>
        <form>
          <label htmlFor="usern">User Name: </label>
          <input
            type="text"
            id="usern"
            name="usern"
            placeholder="User Name"
            value={usern}
            onChange={(ev) => setUsern(ev.target.value)}
          />
          <br />
          <label htmlFor="email">Email: </label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
          />
          <br />
          <label htmlFor="pass2">Password: </label>
          <input
            type="password"
            id="pass2"
            name="pass2"
            placeholder="Password"
            value={pass2}
            onChange={(ev) => setPass2(ev.target.value)}
          />
          <p>{errorMessange1}</p>
          <p>
            mostrar1: {pass2} {email}
          </p>
          <br />
          <button type="submit" disabled={email.length === 0}>
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
