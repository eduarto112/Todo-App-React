import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Todo } from './models/Todo';
import Form from './components/Form';
import List from './components/List';
import Filters, { FilterType } from './components/Filter';

// type AppData = {
//   allTodos: Todo[];
//   shownTodos: Todo[];
// };

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [allTodos, setAllTodos] = useState<Todo[]>([]);

  const onTodoAdded = (todo: string) => {
    const newTodo: Todo = {
      isCompleted: false,
      title: todo,
      id: Math.floor(Math.random() * 100),
    };

    setAllTodos((prev) => [...prev, newTodo]);
    setTodos((prev) => [...prev, newTodo]);
  };

  const onCompletedChange = (id: number) => {
    const newState = todos.map((x) => {
      if (x.id == id) {
        x.isCompleted = !x.isCompleted;
      }
      return x;
    });
    setTodos(newState);
  };

  const onFilterChangeHandler = (filter: FilterType) => {
    const newAppDataState = [...filterTodos(filter)];

    setTodos(newAppDataState);
  };

  const filterTodos = (filter: FilterType) => {
    switch (filter) {
      case 'all':
        return allTodos;

      case 'done':
        return allTodos.filter((x) => x.isCompleted);

      case 'inprogress':
        return allTodos.filter((x) => !x.isCompleted);
    }
  };

  return (
    <div className="container">
      <section>
        <Form onButtonClick={onTodoAdded} />
      </section>
      <Filters onFilterChange={onFilterChangeHandler} />
      <hr />
      <h3>Todos</h3>
      <section>
        <List todos={todos} onCompletedChange={onCompletedChange} />
      </section>
    </div>
  );
}

export default App;
