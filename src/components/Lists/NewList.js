import React from 'react'
import './ListItem.css'
import NewListForm from './NewListForm';

const NewList = (props) => {

  const submitListFormHandler = (listData) => {
    props.onAddNewList(listData);
    props.onShowAddNewList(false);
  };

  const hideListFormHandler = () => {
    props.onShowAddNewList(false);
  }

  return (
    <div className='list-item__title'>
      <div onClick={props.onAddNewList}>+ New List</div>
      {props.onShowAddNewList && (
        <NewListForm
          onSubmitListForm={submitListFormHandler}
          onCancel={hideListFormHandler}
        />
      )}
    </div>
  )
}

export default NewList
