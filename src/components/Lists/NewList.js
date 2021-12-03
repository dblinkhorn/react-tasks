import React from 'react'
import './ListItem.css'

const NewList = (props) => {
  return (
    <div className='list-item__title'>
      <div onClick={props.onAddNewList}>+ New List</div>
    </div>
  )
}

export default NewList
