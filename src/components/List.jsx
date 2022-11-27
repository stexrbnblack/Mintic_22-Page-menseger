
import { NewOrder } from './NewOrder'

export function List({ onToggle, todos = [] }) {
  return(
    <>
    <hr />
      <span>Pendientes: {incomplete.length}.</span>
    <hr />
    <ul className="card">
        {todos?.map(({ id, description, isDone }) => (
          <NewOrder
            key={id}
            id={id}
            description={description}
            isDone={isDone}
            onToggle={onToggle}
          />
        ))}
      </ul>
    </>

  );
}