import './App.css';
import { Login } from './components/Login';
import { NewOrder } from './components/NewOrder';
import { List } from './components/List';
import { X } from './components/X';

export default function App() {
  const handleSubmit = (user) => {
    const newUser = {
      id: user.at(-1).id + 1,
      description: user,
      isDone: false,
    };

    setUsers((prevUsers) => [...prevUsers, newUser]);
  };
  return (
    <div className="App">
      <h1>Login</h1>
      <Login />
      <NewOrder />
    </div>
  );
}
