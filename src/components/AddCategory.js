import React, {useState} from 'react';
import Proptypes from 'prop-types';

export const AddCategory = ({ setCategories}) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e)=>{
        setInputValue(e.target.value);
      
    }

    const handleSubmit = (e)=> {
        e.preventDefault();
        console.log('Handlesubmit')

        if(inputValue.trim().length > 0) {
            setCategories( c => [ inputValue, ...c]);
            setInputValue('');
        }
        
    }

    return (
        <form onSubmit={handleSubmit}>
            <p> {inputValue} </p>
            <input
                type="text"
                value = { inputValue }
                onChange={handleInputChange}
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: Proptypes.func.isRequired
}
