import React from 'react';
import './index.css';

function Input(props){
const {onChange,type,placeholder}=props

return(
    <input className='input' type={type}onChange={onChange}placeholder={placeholder}/>
);

}

export default Input;