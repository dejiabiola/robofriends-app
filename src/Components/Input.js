import React from 'react'


const Input = ({searchChange}) => {
    return (
        <input type="search" 
        placeholder="robot friend" 
        className='bg-lightest-blue pa3 ba b--green'
        onChange = {searchChange}>
        </input>
    )
}


export default Input