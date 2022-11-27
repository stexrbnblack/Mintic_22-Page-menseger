import { useState } from 'react';

export function Login({ onSubmit }) {
  const [user, setUser, pass, setPass] = useState('');
  const [email, setEmail, usern, setUsern] = useState('');

  const userChangeHandler = (e) => {
    setUser(e.target.value);
  };
  const passChangeHandler = (e) => {
    setPass(e.target.value);
  };

  const usernChangeHandler = (e) => {
    setUsern(e.target.value);
  };
  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(user);
    setUser('');

    onSubmit(pass);
    setPass('');

    onSubmit(usern);
    setUsern('');

    onSubmit(email);
    setEmail('');
  };

  return (
    <div class="login" id="login">
      <div class="login-box1" id="login-box1">
        <p1>Login</p1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="user">User: </label>
          <input
            type="text"
            id="user"
            name="user"
            placeholder="User Name"
            autoComplete="off"
            value={user}
            onChange={userChangeHandler}
          />
          <br />
          <label htmlFor="user">Password: </label>
          <input
            type="text"
            id="pass"
            name="pass"
            placeholder="Password"
            value={pass}
            onChange={passChangeHandler}
          />
          <br />
          <br />
          <button type="submit" disabled={user.length === 0}>
            Ingresar
          </button>
        </form>
      </div>
      <div class="login-box1" id="login-box1">
        <p1>Register</p1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="user">User Name: </label>
          <input
            type="text"
            id="user"
            name="user"
            placeholder="User Name"
            value={usern}
            onChange={usernChangeHandler}
          />
          <br />
          <label htmlFor="user">Email: </label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={emailChangeHandler}
          />
          <br />
          <label htmlFor="user">Password: </label>
          <input
            type="text"
            id="pass"
            name="pass"
            placeholder="Password"
            value={pass}
            onChange={passChangeHandler}
          />
          <br />
          <br />
          <button type="submit" disabled={email.length === 0}>
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
