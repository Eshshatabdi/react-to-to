import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <ToDoList></ToDoList>


    </div>
  );
}
function ToDoList() {
  const [todos, setTodo] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then(data => setTodo(data))


  }, [])
  return (

    <div>
      <h2>To Do of React</h2>
      {
        todos.map(todo => <Countries userId={todo.userId} title={todo.title}
          completed={todo.completed ? 'done' : 'not completed'}></Countries>)

      }




    </div>
  )
}

function Countries(props) {
  console.log(props)

  return (
    <div style={{
      backgroundColor: 'lightblue',

      margin: '10px',
      padding: '20px',
    }}>
      <h2>UserID:{props.userId} </h2>
      <p>Title:{props.title} </p>
      <p>Completed:{props.completed}</p>
    </div>
  )

}

export default App;
