import { useState, useEffect } from 'react';
import './App.css';
import List from './components/List.js';
import WithLoading from './components/WithLoading.js';
const ListWithLoading = WithLoading(List);

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [repos, setRepos] = useState([]);
  const [term, setTerm] = useState("");    // adding search functionality

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/users`)                // API pulling repo list that might take some time 
      .then((json) => json.json())
      .then((repos) => {
        console.log(repos);
        setIsLoading(false);
        setRepos(repos);
        if (term) setRepos(repos.filter(({ name }) => name.indexOf(term) >= 0));
      })
  }, [term]);

  return (
    <div className="App">
      <h2>Users List and Search using Higher Order Component</h2>
      <input type="text" value={term} onChange={(e) => setTerm(e.target.value)} />
      <ListWithLoading
        isLoading={isLoading}
        repos={repos}
      />
    </div>
  );
}

export default App;
