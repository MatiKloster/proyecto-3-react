import React , {useState} from 'react';
import { MenuItem, TextField, Select} from '@material-ui/core';


const Filter = ({headers,handleText,handleSelect}) => {
  const [value, setValue] = useState('name');
  
  const internalHandling = (event) => {
    let value = event.target.value;
    if(value !== ''){
      setValue(event.target.value);
      handleSelect(event.target.value);
    }
  }
    return (
      <div style={{ display: "flex" }} className = "pb-4">
      <div style={{ display: "flex", margin: "auto" }}>
      <TextField onChange = {(e) => handleText(e.target.value)} placeholder= {"Filtrar por ..."}/>
        <Select
          labelId="label"
          id="select"
          value={headers.length !== 0 ?value : ""}
          onChange={internalHandling}
        >
          {headers.map((h) =>
            <MenuItem value={h.id} key={h.id}>{h.label}</MenuItem>
          )}
        </Select>
      </div>
    </div>
    );
}
 
export default Filter;