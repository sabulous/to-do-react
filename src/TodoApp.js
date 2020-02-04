import React from 'react'
import TodoList from './TodoList'
import AddTodoListForm from './AddTodoListForm'
import Banner from './Banner'
import API from './api';
import './TodoApp.css'

class TodoApp extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        todoLists: []
      };
      
      this.getTodoLists()
    }

    getTodoLists = async () => {

        try {
            const response = await API.get('todos')
            console.log('get', response)

            this.setState({
                todoLists: response.data
            })

          } catch (error) {
            console.error(error)
          }
    }

    addTodoList = (name, deadline) => {
        let today = new Date().toISOString().split('T')[0]

        let newList = {
            id: null,
            name: name,
            todoItems: [],
            deadline: deadline,
            createdBy: null,
            creationDate: today,
            completionDate: null,
            status: null,
            completed: false
          };
          
        this.postNewTodoList(newList)     
    }

    postNewTodoList = async newTodoList => {
        try {
            const response = await API.post('todos', JSON.stringify(newTodoList))
            console.log("post", response)

            await this.getTodoLists()

          } catch (error) {
            console.error(error)
          }
    }

    deleteFromList = async id => {
        try {
            const response = await API.delete('todos/' + id)
            console.log("delete", response)

            await this.getTodoLists()
        } catch (error) {
            console.error(error)
        }
    }

    setCompleted = async (id, oldCompleted) => {
        try {
            let newCompleted = oldCompleted ? false : true // update completed field
            const response = await API.patch('todos/' + id, {"completed" : newCompleted})
            console.log("patch for completed field", response)
            
            await this.getTodoLists()
        } catch (error) {
            console.error(error)
        }
    }
  
    render() {
      return (
        <div id="main">
            <Banner />
            <ul className="list-group">

                {this.state.todoLists.map((list, idx) => {
                    return (
                        <TodoList key={idx} details={list} deleteTodoList={this.deleteFromList} updateCompleted={this.setCompleted} />
                    );
                })}
                
            </ul>
            <AddTodoListForm addList={this.addTodoList} />
        </div>
      );
    }
}

export default TodoApp;