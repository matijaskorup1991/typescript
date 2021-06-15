import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then((res) => {
  const data = res.data as Todo;
  const ID = data.ID;
  const title = data.Title;
  const finished = data.finished;

  console.log(`
  the todo with id: ${ID} 
  title: ${title} 
  finished: ${finished}
  `);
});
