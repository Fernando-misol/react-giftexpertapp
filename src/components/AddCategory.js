import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({setCategories}) => {
    const [inputValue, setinputValue] = useState('');
    
    const handleImputChange=(e)=>{
        setinputValue(e.target.value);
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(inputValue.trim().length>2){
            setCategories(cast => [inputValue,...cast]);
            setinputValue('');
        }
        else{
            alert('El campo eta vacio');
        }

    }

    return (        
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleImputChange}
            />
        </form>
    )
}

AddCategory.propTypes={
    setCategories:PropTypes.func.isRequired
}