import React from 'react'
import { useState } from 'react/cjs/react.development'
import ListItem from './ListItem'
import './Lists.css'
import NewList from './NewList'

const Lists = (props) => {

  const [showAddNewList, setShowAddNewList] = useState(false);

  const AddNewList = () => {
    setShowAddNewList(true);
    console.log('add new list clicked')
  }

  return (
    <div className='lists'>
      {props.lists.map((list) => (
        <ListItem onClickSelectedList={props.onClickSelectedList} key={list.id} listName={list.name} />
      ))}
      <li className='list-item'>
        <NewList onAddNewList={AddNewList} />
      </li>
      {showAddNewList && (
        <input
          type='text'
          placeholder='Enter list name'
        />
      )}
    </div>
  )
}

export default Lists