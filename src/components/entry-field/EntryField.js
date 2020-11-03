import React, { Component } from 'react'
import './entryField.css'


export default class EntryFieled extends Component {

    state = {
        label: ''
    }

    onlabelChange = (event) => {
        this.setState({
            label: event.target.value
        })
    }

    onSubmit = (event) => {
        const { onitemAdded } = this.props
        const { label } = this.state
        event.preventDefault()
        onitemAdded(label)
        this.setState({
            label: ''
        })
    }

    emptyField = (event) => {
        event.preventDefault()
    }

    render() {

        return (
            <form className='entryField d-flex'
                onSubmit={this.state.label ? this.onSubmit : this.emptyField}>

                <input type='text'
                    placeholder='Введите задачу'
                    className='form-control'
                    onChange={this.onlabelChange}
                    value={this.state.label} />

                <button className='btn btn-info'>Add item</button>
            </form>
        )
    }
}


