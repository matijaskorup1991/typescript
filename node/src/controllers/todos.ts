import { RequestHandler } from 'express';
import Todo from '../models/todo';

// interface Todo {
//   text: string;
// }

const TODOS: Todo[] = [];

export const createTodo: RequestHandler = (req, res, next) => {
  // const text = req.body as Todo;

  const text = (req.body as { text: string }).text;
  const newTodo = new Todo(Math.random().toString(), text);
  TODOS.push(newTodo);
  res.status(201).json({ message: 'Created', todo: newTodo });
};

export const updateTodo: RequestHandler<{ id: string }> = (req, res, next) => {
  const idToUpdate = req.params.id;
  const updateText = (req.body as { text: string }).text;
};
