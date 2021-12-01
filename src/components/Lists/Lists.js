import React from 'react'
import ListItem from './ListItem'
import './Lists.css'

const Lists = (props) => {

  return (
    <div className='lists'>
      {props.lists.map((list) => (
        <ListItem onClickSelectedList={props.onClickSelectedList} key={list.id} listName={list.name} />
      ))}
    </div>
  )
}

export default Lists
