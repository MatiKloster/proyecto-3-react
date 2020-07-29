import React , {useState} from 'react';
import { MenuItem, TextField, Select} from '@material-ui/core';


const Filter = ({headers,handleText,handleSelect}) => {
  const [value, setValue] = useState("name");
  
  const internalHandling = (event) => {
    setValue(event.target.value);
    handleSelect(event.target.value);
  }
    return (
      <div style={{ display: "flex" }} className = "pb-4">
      <div style={{ display: "flex", margin: "auto" }}>
      <TextField onChange = {(e) => handleText(e.target.value)}/>
        <Select
          labelId=""
          id="select"
          value={value}
          onChange={internalHandling}
        >
          {headers.map((h) =>
            <MenuItem value={h.id}>{h.label}</MenuItem>
          )}
        </Select>
      </div>
    </div>
    );
}
 
export default Filter;