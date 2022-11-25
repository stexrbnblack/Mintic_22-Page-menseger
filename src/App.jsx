import { Login } from './components/Login';
import './App.css';

export default function App() {
  const handleSubmit = (user) => {
    const newUser = {
      id: users.at(-1).id + 1,
      description: user,
      isDone: false,
    };

    setUsers((prevUsers) => [...prevUsers, newUser]);
  };
  return (
    <div className="App">
      <h1>Login</h1>
      <Login onSubmit={handleSubmit} />
    </div>
  );
}
