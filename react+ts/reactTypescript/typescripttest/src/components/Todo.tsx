import React from 'react';

interface TodoList {
  items: { id: string; text: string }[];
  onDeleteTodo: (todoId: string) => void;
}

const Todo: React.FC<TodoList> = ({ items, onDeleteTodo }) => {
  return (
    <ul>
      {items.map((el) => (
        <li key={el.id}>
          <span>{el.text}</span>
          <button onClick={() => onDeleteTodo(el.id)}>DELETE</button>
        </li>
      ))}
    </ul>
  );
};

export default Todo;
