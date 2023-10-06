import { useState } from 'react';

function Form(props: { onButtonClick: (event: string) => void }) {
  const [todo, setTodo] = useState('');

  const onButtonClickHandler = () => {
    props.onButtonClick(todo);
    setTodo('');
  };

  return (
    <div className="input-group mt-3">
      <input
        type="text"
        className="form-control"
        placeholder="Todo"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        className="btn btn-primary"
        type="button"
        onClick={onButtonClickHandler}
      >
        Add Todo
      </button>
    </div>
  );
}

export default Form;
