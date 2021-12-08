import React from 'react'
import './ListItem.css'
import NewListForm from './NewListForm';

const NewList = (props) => {

  const submitListFormHandler = (listData) => {
    props.onAddNewList(listData);
    hideListFormHandler();
  };

  const hideListFormHandler = () => {
    props.onShowAddNewList(false);
  }

  return (
    <div className='list-item__title'>
      <div onClick={props.onShowAddNewList}>+ New List</div>
      {props.showNewListInput && (
        <NewListForm
          onSubmitListForm={submitListFormHandler}
          onCancel={hideListFormHandler}
        />
      )}
    </div>
  )
}

export default NewList
