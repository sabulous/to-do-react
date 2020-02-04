import React from 'react'
 
import "react-datepicker/dist/react-datepicker.css";

class AddTodoListForm extends React.Component {

    onSubmit = (event) => {
        event.preventDefault();
        let listName = this.refs.newTodoListName.value
        let deadline = this.refs.newTodoListDeadline.value
        if(listName) {
          this.props.addList(listName, deadline)
          this.refs.form.reset()
        }
    }

    onChange = (event) => {
        console.log("deadline changed")
    }

    render() {
        return (
            <div id='addListForm'>
                <form ref="form" onSubmit={this.onSubmit}>
                    <span>Todo list name to add : </span>
                    <input type="text" ref="newTodoListName" placeholder="todo list name" />
                    <br/>
                    <span>Deadline : </span>
                    <input type="date" ref="newTodoListDeadline" name="Deadline" onChange={this.onChange} />
                    <br/>
                    <button type="submit">Add Todo list</button>
                </form>
            </div>
        )
    }
}

export default AddTodoListForm;