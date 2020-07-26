import React from 'react'
import Input from '../input/Input';
import Label from '../label/Label';

const InputGroup = ({attribute, handleChange}) => {
    return (
        <div className='form-group row'>
            <Label text = {attribute.name}/>
            <Input 
                attribute = {attribute}
                handleChange = {handleChange}
                className = {'form-control'} 
            />
        </div>
    )
};

export default InputGroup;