import React, { Component } from 'react'
import './search.css'
import ButtomStatus from '../button-status/ButtonStatus'

export default class SearchBlock extends Component{

    state={
        term: ''
    }

    onSearchChange=(event)=>{
        const term = event.target.value
        this.setState({ term })
        this.props.onSearchChange(term)
    }

    render(){
        const {onFilterChange, filter} = this.props
        return (
            <div className='search'>
    
                <input type='text' 
                    placeholder='search' 
                    className='form-control search-panel'
                    value={this.state.term}
                    onChange={this.onSearchChange} />
                <ButtomStatus
                    filter={filter}
                    onFilterChange={onFilterChange} />
            </div>
        )
    
    }
    
}
