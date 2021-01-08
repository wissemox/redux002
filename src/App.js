import React,{useState}  from 'react'
import logo from './logo.svg';

import './App.css';

import Todoinput from './compents/Todoinput';
import Todolist from './compents/todolist';

function App() {
  const [filter, setFilter] = useState("all")

  
  return (
    <div className="App">
      <>
      
      <Todoinput  setFilter={setFilter} />
      <Todolist filter={filter}/>
      
      </>

    </div>
  );
}

export default App;
