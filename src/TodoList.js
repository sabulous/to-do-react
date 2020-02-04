import React from 'react';

class TodoList extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        id: null,
        name: null,
        todoItems: [],
        deadline: null,
        createdBy: null,
        creationDate: null,
        completionDate: null,
        status: null,
        completed : false
      };
    }

    onClickDone = (id, compl) => {
        this.props.updateCompleted(id, compl)
    }

    onClickDel = (id, ev) => {
        this.props.deleteTodoList(id)
    }

    render() {
      let details = this.props.details;
      let todoClass = details.completed ? "done" : "undone";
      let buttonId = "deleteListBtn" + details.id;
      return (
        <li className="list-group-item">
                <div className={todoClass}>
                    <span className="glyphicon glyphicon-ok icon" aria-hidden="true"
                      onClick={() => this.onClickDone(details.id, details.completed)}>
                    </span>

                    {details.name}
                    (Deadline: {details.deadline})
                    (Created on: {details.creationDate})

                    <button id={buttonId} type="button" className="close"
                        onClick={(event) => this.onClickDel(details.id, event)}>
                            &times;
                    </button>
                </div>
        </li>     
      );
    }
  }
  
  export default TodoList;