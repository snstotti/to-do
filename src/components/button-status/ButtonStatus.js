import React, { Component } from 'react'

export default class ButtomStatus extends Component {

    button =[
        {name: 'all', label: 'All'},
        {name: 'active', label: 'Active'},
        {name: 'completed', label: 'Completed'}
    ]

    render() {

        const {onFilterChange, filter} = this.props

        const buttonElem = this.button.map(({name, label})=>{
            
            const clazz = filter === name ? 'btn-info' : 'btn-outline-info'
            return( 
            <button 
                type='button' 
                className={`btn ${clazz}`}
                key={name}
                onClick={()=> onFilterChange(name)}>
                    {label}
             </button>)
        })
        return (
            <div className='btn-group ButtomStatus'>
                {buttonElem}
            </div>
        )
    }

}

