import React from 'react';
import './TaskItem.css';

const TaskItem = (props) => {
  return (
    <li className='task-item'>
      <h4>
        {props.taskText}
      </h4>
    </li>
  );
};

export default TaskItem;
