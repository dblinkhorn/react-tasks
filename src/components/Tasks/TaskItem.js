import React from 'react';
import './TaskItem.css';

const TaskItem = (props) => {
  return (
    <li className='task-item'>
      <h3>
        {props.taskText}
      </h3>
    </li>
  );
};

export default TaskItem
