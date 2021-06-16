import React from 'react';

interface TodoList {
  items: { id: string; text: string }[];
}

const Todo: React.FC<TodoList> = ({ items }) => {
  return (
    <ul>
      {items.map((el) => (
        <li key={el.id}>{el.text}</li>
      ))}
    </ul>
  );
};

export default Todo;
