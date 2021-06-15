import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then((res) => {
  const data = res.data as Todo;
  const ID = data.id;
  const title = data.title;
  const finished = data.completed;

  logTodo(ID, title, finished);
});

const logTodo = (id: number, title: string, finished: boolean) => {
  console.log(`
  the todo with id: ${id} 
  title: ${title} 
  finished: ${finished}
  `);
};
