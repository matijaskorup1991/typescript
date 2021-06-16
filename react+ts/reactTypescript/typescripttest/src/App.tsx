import React from 'react';
import Todo from './components/Todo';
import NewTodo from './components/NewTodo';

const App: React.FC = () => {
  const todos = [
    { id: 't1', text: 'lorem' },
    { id: 't2', text: 'ipsum' },
  ];

  const todoAddHandler = (text: string) => {
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
