import React from 'react'
import { useState } from 'react'
import PropTypes from 'prop-types'
// import { GifExpertApp } from '../GifExpertApp';
// import {setCategories} from GifExpertApp;

export const CategoryAdd = ({setCategories}) => {
    const [inputValue, setInputValue] = useState('');
    const handleInputText =  (e)=>{
        setInputValue(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length >= 2)
        setCategories(cats=>
            [...cats, inputValue]
        );
        // console.log(999);
        // setCategories( cats=> ['otra serie',...catss])

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={inputValue} onChange={handleInputText} />
            </form>
        </div>
    )
}

CategoryAdd.propTypes = {
    setCategories: PropTypes.func.isRequired
}
