import React, { Component } from 'react';
import HeaderTodo from '../header/HeaderTodo';
import './app.css'
import SearchBlock from '../search/SearchBlock';
import EntryFieled from '../entry-field/EntryField';
import TodoList from '../TodoList/TodoList';


let newId = 100
export default class App extends Component {

    state = {
        todoDate: [],
        term: '',
        filter: 'all',

    }

    createTodoItem(label) {
        return {
            label, important: false, done: false, isEdit: false, id: newId++
        }
    }  //создаём массив объектов

    onDeleted = (id) => {
        this.setState(prevState => ({
            todoDate: prevState.todoDate.filter(el => el.id !== id)
        }))
    }  //удаляем объект из массива по id

    addItem = (text) => {
        const newItem = { label: text, important: false, done: false, id: newId++ }

        this.setState(({ todoDate }) => {
            const newArr = [
                newItem, ...todoDate
            ]
            return {
                todoDate: newArr
            }
        })
    } // добавляем объект в массив 

    onToggleProperty = (id, prevName) => {

        this.setState(prevState => {
            const newArr = prevState.todoDate.map(elem => {
                if (elem.id === id) {
                    elem[prevName] = !elem[prevName]
                }
                return elem
            })
            return {
                newArr
            }
        })
    } 

    onToggleImportant = (id) => {
        return {
            todoDate: this.onToggleProperty(id, 'important')
        }
    } // выделяем текст жирным

    onToggleDone = (id) => {
        return {
            todoDate: this.onToggleProperty(id, 'done')
        }
    } // зачеркиваем текст

    search = (arr, term) => {
        if (term === '') {
            return arr
        }
        return arr.filter((item) => {
            return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1
        })
    } // получаем массив и фильтруем по условию поиска 

    onSearchChange = (term) => {
        this.setState({ term })
    } // props для блока SearchBlock который перезаписывае стайт Арр

    filter = (arr, filter) => {
        switch (filter) {
            case 'all': return arr
            case 'active':
                return arr.filter((item) => !item.done)
            case 'completed':
                return arr.filter((item) => item.done)
            default: return arr
        }

    } 

    onFilterChange = (filter) => {
        this.setState({ filter })
    }

    render() {

        const { todoDate, term, filter } = this.state

        const visibleItems = this.filter(this.search(todoDate, term), filter)

        const doneCount = todoDate.filter(el => el.done).length

        const todoCount = todoDate.length - doneCount
        console.log(todoDate);
        return (
            <div className='app'>
                <HeaderTodo toDo={doneCount} done={todoCount} />
                <SearchBlock
                    filter={filter}
                    onFilterChange={this.onFilterChange}
                    onSearchChange={this.onSearchChange} />
                <EntryFieled onitemAdded={this.addItem} />
                <TodoList
                    onToggleImportant={this.onToggleImportant}
                    onToggleDone={this.onToggleDone}
                    onDeleted={this.onDeleted}
                    todos={visibleItems}
                />
            </div>
        )
    }
}


