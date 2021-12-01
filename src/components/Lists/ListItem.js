import React from 'react';
import './ListItem.css';

const ListItem = (props) => {
  return (
    <li className='list-item'>
      <div className='list-item__title'>
        <button onClick={props.onClickSelectedList}>{props.listName}</button>
      </div>
    </li>
  );
};

export default ListItem
