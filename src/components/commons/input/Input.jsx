import React from 'react';

const Input = ({attribute, handleChange,className,handleKeyUp}) => {
    return (
            <input 
                type={attribute.type}
                id={attribute.id}
                name={attribute.name}
                placeholder = {attribute.placeholder}
                onChange={(e) => handleChange(e.target.name,e.target.value)}
                className={className}
                onKeyUp = {handleKeyUp}
            />
    )
};
 
export default Input;