import React from 'react'
import Input from '../input/Input';
import Label from '../label/Label';

const InputGroup = ({attribute, handleChange, handleKeyUp}) => {
    return (
        <div className='form-group row'>
            <Label text = {attribute.name}/>
            <Input 
                attribute = {attribute}
                handleChange = {handleChange}
                className = {'form-control'}
                handleKeyUp = {handleKeyUp}
            />
        </div>
    )
};

export default InputGroup;