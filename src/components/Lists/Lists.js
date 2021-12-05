import React from 'react'
import { useState } from 'react/cjs/react.development'
import ListItem from './ListItem'
import './Lists.css'
import NewList from './NewList'

const Lists = (props) => {

  console.log(props);

  const [showAddNewList, setShowAddNewList] = useState(false);

  return (
    <div className='lists'>
      {props.lists.map((list) => (
        <ListItem 
          onClickSelectedList={props.onClickSelectedList}
          key={list.id}
          listName={list.name}
        />
      ))}
      <li className='list-item'>
        <NewList
          onAddNewList={props.addNewList}
          onShowAddNewList={setShowAddNewList}
        />
      </li>
    </div>
  )
}

export default Lists