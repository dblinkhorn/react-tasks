import React from 'react';
import TaskItem from './TaskItem';
import './TaskList.css';

const TaskList = (props) => {
  return (
    <div className='task-list'>
      {props.tasks.map((task) => (
        <TaskItem taskText={task.text} />
      ))}
    </div>
  )
}

export default TaskList;
