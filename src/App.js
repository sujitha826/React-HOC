import { useState, useEffect } from 'react';
import './App.css';
import List from './components/List';
import TodoList from './components/TodoList';
import WithLoading from './components/WithLoading.js';
const ListWithLoading = WithLoading(List);
const TodosWithLoading = WithLoading(TodoList);


function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [repos, setRepos] = useState([]);
  const [term, setTerm] = useState("");    // adding search user functionality
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/users`)                // API pulling users list that might take some time 
      .then((json) => json.json())
      .then((repos) => {
        console.log(repos);
        setIsLoading(false);
        setRepos(repos);
        if (term) setRepos(repos.filter(({ name }) => name.indexOf(term) >= 0));
      })
  }, [term]);

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/todos`)                // API pulling todo list that might take some time 
      .then((json) => json.json())
      .then((todos) => {
        console.log(todos);
        setIsLoading(false);
        setTodos(todos.slice(0, 10));
      })
  }, []);

  return (
    <div className="App">
      <div className='flex-container'>
        <div className='flex-item'>
          <h2>Users List and Search using Higher Order Component</h2>
          <input type="text" value={term} onChange={(e) => setTerm(e.target.value)} />
          <ListWithLoading
            isLoading={isLoading}
            repos={repos}
          />
        </div>
        <div className='flex-item'>
          <h2>Todos List using Higher Order Component</h2>
          <TodosWithLoading
            isLoading={isLoading}
            repos={todos}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
