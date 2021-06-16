import React, { useRef } from 'react';

interface NewTodoProps {
  onAddTodo: (inputText: string) => void;
}

const NewTodo: React.FC<NewTodoProps> = ({ onAddTodo }) => {
  const ref = useRef<HTMLInputElement>(null);
  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const inputText = ref.current!.value;
    onAddTodo(inputText);
  };

  return (
    <div>
      <form onSubmit={todoSubmitHandler}>
        <input type='text' placeholder='new Todo' ref={ref} />
        <div>
          <button type='submit'>ADD TODO</button>
        </div>
      </form>
    </div>
  );
};

export default NewTodo;
