import './App.css';
import { ToDoList } from './components/todoList/Controller';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>MVC APP</p>
        <ToDoList />
      </header>
    </div>
  );
}

export default App;
