import React from 'react';
import './ListItem.css';

const ListItem = (props) => {
  return (
    <li className='list-item'>
      <div className='list-item__title'>
        <div onClick={props.onClickSelectedList}>
          {props.listName}
        </div>
      </div>
    </li> 
  );
};

export default ListItem
