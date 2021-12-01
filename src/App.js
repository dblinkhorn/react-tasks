import Header from "./components/Header";
import './App.css';
import { useState } from "react";
import Lists from "./components/Lists/Lists";
import TaskList from "./components/Tasks/TaskList";

const taskLists = [
  {
    id: Math.random().toString(),
    name: 'House Tasks',
    tasks: [
      {
        id: Math.random().toString(),
        text: 'this is the first example house task'
      },
      {
        id: Math.random().toString(),
        text: 'this is the second example house task'
      },
      {
        id: Math.random().toString(),
        text: 'this is the third example house task'
      }
    ]
  },
  {
    id: Math.random().toString(),
    name: 'Work Stuff',
    tasks: [
      {
        id: Math.random().toString(),
        text: 'this is the first example work task'
      },
      {
        id: Math.random().toString(),
        text: 'this is the second example work task'
      },
      {
        id: Math.random().toString(),
        text: 'this is the third example work task'
      }
    ]
  },
  {
    id: Math.random().toString(),
    name: "Coding To-do's",
    tasks: [
      {
        id: Math.random().toString(),
        text: 'this is the first example coding task'
      },
      {
        id: Math.random().toString(),
        text: 'this is the second example coding task'
      },
      {
        id: Math.random().toString(),
        text: 'this is the third example coding task'
      }
    ]
  }
]

let clickedList = '';

function App() {

  const [lists, setLists] = useState(taskLists);
  const [tasks, setTasks] = useState(taskLists[0].tasks);

  // const addTaskHandler = (newTask) => {
  //   setTasks(newTask)
  // }

  // const addListHandler = () => {
  //   setLists(lists)
  // }

  const showSelectedTasks = (event) => {
    clickedList = event.target.innerText;
    let clickedTasks = taskLists.find(({name}) => name === clickedList);
    setTasks(clickedTasks.tasks)
  }

  return (
    <div className='app-container'>
      <Header />
      <Lists onClickSelectedList={showSelectedTasks} lists={lists} />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
