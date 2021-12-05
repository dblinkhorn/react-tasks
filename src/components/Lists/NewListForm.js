import React from 'react'
import { useState } from 'react';

const NewListForm = (props) => {

  const [enteredListName, setEnteredListName] = useState('');

  const listNameChangeHandler = (event) => {
    setEnteredListName(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    // set captured data from form and store in object
    const newListFormData = {
      id: Math.random().toString(),
      name: enteredListName,
      tasks: []
    }

    // uses function prop passed down from NewExpense and
    // executes it, which gets all submitted form data (expenseFormData)
    props.onSubmitListForm(newListFormData);

    // reset all form values after submit
    setEnteredListName('');
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type='text'
          placeholder='Enter list name'
          value={enteredListName}
          onChange={listNameChangeHandler}
        />
        <div className='new-expense__actions'>
          <button type='button' onClick={props.onCancel}>Cancel</button>
          <button type='submit'>Add List</button>
        </div>
      </form>
    </div>
  )
}

export default NewListForm
