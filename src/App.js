import Header from "./components/Header";
import './App.css';
import { useState } from "react";
import TaskList from "./components/Tasks/TaskList";

const exampleTasks = [
  {
    id: 'task1',
    text: 'this is the first example task'
  },
  {
    id: 'task2',
    text: 'this is the second example task'
  },
  {
    id: 'task3',
    text: 'this is the third example task'
  }
]

function App() {

  const [tasks, setTasks] = useState(exampleTasks);

  // const addTaskHandler = () => {
  //   setTasks(tasks)
  // }

  return (
    <div className='app-container'>
      <Header />
      <TaskList
        tasks={tasks}
      />
    </div>
  );
}

export default App;
