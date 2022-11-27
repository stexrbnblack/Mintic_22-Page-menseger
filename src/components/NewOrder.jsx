import { useState } from 'react';

export function NewOrder({ onSubmit }) {
  const [date, setDate, time, setTime] = useState('');
  const [long, setLong, tall, setTall] = useState('');
  const [heigth, setHeigth] = useState('');
  const [origen, setOrigen] = useState('');
  const [id, setId] = useState('');
  const [name, setName, id2, setId2] = useState('');
  const [dest, setDest] = useState('');

  const dateChangeHandler = (e) => {
    setDate(e.target.value);
  };
  const timeChangeHandler = (e) => {
    setTime(e.target.value);
  };
  const longChangeHandler = (e) => {
    setLong(e.target.value);
  };
  const tallChangeHandler = (e) => {
    setTall(e.target.value);
  };
  const heigthChangeHandler = (e) => {
    setHeigth(e.target.value);
  };
  const origenChangeHandler = (e) => {
    setOrigen(e.target.value);
  };
  const idChangeHandler = (e) => {
    setId(e.target.value);
  };
  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };
  const id2ChangeHandler = (e) => {
    setId2(e.target.value);
  };
  const destChangeHandler = (e) => {
    setDest(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(date);
    setDate('');

    onSubmit(time);
    setTime('');

    onSubmit(long);
    setLong('');

    onSubmit(tall);
    setTall('');

    onSubmit(heigth);
    setHeigth('');

    onSubmit(origen);
    setOrigen('');

    onSubmit(name);
    setName('');

    onSubmit(id2);
    setId2('');

    onSubmit(dest);
    setDest('');
  };

  return (
    <div>
      <p1>New Order</p1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="date">Fecha-Date: </label>
        <input
          type="datetime-local"
          id="date"
          name="date"
          placeholder="Programar Fecha de Recogida"
          value={date}
          onChange={dateChangeHandler}
        />
        <br />
        <label htmlFor="long">Diameter Box: </label>
        <input
          type="text"
          id="long"
          name="long"
          placeholder="long"
          value={long}
          onChange={longChangeHandler}
        />
        <input
          type="text"
          id="tall"
          name="tall"
          placeholder="tall"
          value={tall}
          onChange={tallChangeHandler}
        />
        <input
          type="text"
          id="heigth"
          name="heigth"
          placeholder="heigth (Kg)"
          value={heigth}
          onChange={heigthChangeHandler}
        />
        <br />

        <label htmlFor="id">Sender info</label>
        <input
          type="text"
          id="id"
          name="id"
          placeholder="ID"
          value={id}
          onChange={idChangeHandler}
        />
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name, Who Send"
          value={name}
          onChange={nameChangeHandler}
        />
        <input
          type="text"
          id="origin"
          name="origin"
          placeholder="Origin Address and City"
          value={origen}
          onChange={origenChangeHandler}
        />
        <br />
        <label htmlFor="id2">Reitend info</label>
        <input
          type="text"
          id="id2"
          name="id2"
          placeholder="ID"
          value={id2}
          onChange={id2ChangeHandler}
        />
        <input
          type="text"
          id="dest"
          name="dest"
          placeholder="Delivery Address - Destini Address"
          value={dest}
          onChange={destChangeHandler}
        />
        <br />
        <br />
        <button type="submit" disabled={id.length === 0}>
          Order Register
        </button>
      </form>
    </div>
  );
}
