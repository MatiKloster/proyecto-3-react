import React , {useState} from 'react';
import { MenuItem, TextField, Select, FormControl, InputLabel} from '@material-ui/core';


const Filter = ({headers,handleText,handleSelect}) => {
  const [value, setValue] = useState("Nombre");
  
  const internalHandling = (event) => {
    setValue(event.target.value);
    handleSelect(event.target.value);
  }
    return (
      <FormControl >
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
          {/* <MenuItem value={"name"}>Nombre</MenuItem>
          <MenuItem value={"year"}>Año</MenuItem>
          <MenuItem value={"price"}>Precio</MenuItem>
          <MenuItem value={"quantity"}>Cantidad</MenuItem>
          <MenuItem value={"genre"}>Genero</MenuItem> */}
        </Select>
      </FormControl>
    );
}
 
export default Filter;