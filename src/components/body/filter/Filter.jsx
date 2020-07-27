import React from 'react'
import InputGroup from 'react-bootstrap/InputGroup';
import DropdownButton from 'react-bootstrap/DropdownButton';
import FormControl from 'react-bootstrap/FormControl';


const Filter = () => {
    return (  
        <InputGroup className="mb-3">
        <DropdownButton
          as={InputGroup.Prepend}
          variant="outline-secondary"
          title="Dropdown"
          id="input-group-dropdown-1"
        >
          <Dropdown.Item href="#">Action</Dropdown.Item>
          <Dropdown.Item href="#">Another action</Dropdown.Item>
          <Dropdown.Item href="#">Something else here</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#">Separated link</Dropdown.Item>
        </DropdownButton>
        <FormControl aria-describedby="basic-addon1" />
      </InputGroup>
    );
}
 
export default Filter;