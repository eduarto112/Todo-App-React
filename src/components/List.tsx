// import { ChangeEvent } from 'react';
import { Todo } from '../models/Todo';

function List(params: {
  todos: Todo[];
  onCompletedChange: (id: number) => void;
}) {
  const createList = () => {
    return params.todos.map((todo, idx) => (
      <li className="list-group-item" key={idx}>
        <div className="d-flex justify-content-between">
          <span>{todo.title}</span>
          <input
            className="form-check-input"
            type="checkbox"
            name={idx.toString()}
            checked={todo.isCompleted}
            onChange={() => {
              params.onCompletedChange(todo.id);
            }}
          />
        </div>
      </li>
    ));
  };

  return <ul className="list-group">{createList()}</ul>;
}

export default List;
