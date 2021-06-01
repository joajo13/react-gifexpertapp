import React, { useState } from 'react'
import PropTypes from 'prop-types';


export const AddCategory = ({setCategories}) => {
    
    const [inputValue, setInputValue] = useState('')

    const handleInputChange= (texto) => {

        setInputValue (texto.target.value)

    }

    const handleSubmit = (e) => {
        e.preventDefault()
      if (inputValue.trim().length>2){
        setCategories(cat => [inputValue,...cat]);
        setInputValue('');
      }
    }
    
    return (
        <form onSubmit = {handleSubmit}>
            <input 
            className= 'animate__animated animate__fadeInDown'
            placeholder= 'Search gifs...'
            type='text'
            value= {inputValue}
            onChange= {handleInputChange}
            />
        </form>
    )
}

AddCategory.propTypes={
    setCategories: PropTypes.func.isRequired
}