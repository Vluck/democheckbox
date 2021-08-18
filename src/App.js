import './App.css';
import InputCheck from './input';
import List from './list';
import { useState } from 'react';

function App() {
  const initialItems = sessionStorage.getItem("taskList") ? JSON.parse(sessionStorage.getItem("taskList")) : [];
  const [items, setItems] = useState(initialItems);
  
  const addtask = (taskName) => {
    const taskObj = {name:taskName, id:items.length}
    const itemList = [...items, taskObj];
    setItems(itemList);
    sessionStorage.setItem("taskList", JSON.stringify(itemList))
  }

  const deleteTask = (id) => {
    const itemsList = items.filter(x=> x.id != id);
    setItems(itemsList);
    sessionStorage.setItem("taskList", JSON.stringify(itemsList))
  }
  return (
    <div className="container">
      <InputCheck addtask = {addtask}/>
      <List listItems = {items} deleteTask ={deleteTask} />
    </div>
  );
}

export default App;
