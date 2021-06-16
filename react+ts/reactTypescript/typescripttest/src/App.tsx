import React, { useState } from 'react';
import Todo from './components/Todo';
import NewTodo from './components/NewTodo';

interface Todo {
  id: string;
  text: string;
}

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 't1', text: 'lorem' },
    { id: 't2', text: 'ipsum' },
  ]);

  const todoAddHandler = (text: string) => {
    setTodos((prevState) => [
      ...prevState,
      { id: Math.random().toString(), text },
    ]);
    console.log(text);
  };

  return (
    <div className='App'>
      <Todo items={todos} />
      <NewTodo onAddTodo={todoAddHandler} />
    </div>
  );
};

export default App;
