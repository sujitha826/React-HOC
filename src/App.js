import { useState, useEffect } from 'react';
import './App.css';
import List from './components/List.js';
import WithLoading from './components/WithLoading.js';
const ListWithLoading = WithLoading(List);

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [repos, setRepos] = useState();

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/users`)                // API pulling repo list that might take some time 
      .then((json) => json.json())
      .then((repos) => {
        console.log(repos);
        setIsLoading(false);
        setRepos(repos);
      })
  }, []);

  return (
    <div className="App">
      <ListWithLoading
        isLoading={isLoading}
        repos={repos}
      />
    </div>
  );
}

export default App;
