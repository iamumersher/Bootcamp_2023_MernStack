import {Button, TextField } from "@mui/material";
import { Stack } from "@mui/system";
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectLabels() {
  const [gender, setGender] = React.useState('');
  const [city, setCity] = React.useState('');
  const [name, setName] = React.useState('');

  const [items,setItems]=React.useState([]);

  const handleChange = (event) => {
    setGender(event.target.value);
  };
  const handleChangeCity =(event)=>{
    setCity(event.target.value);

  };
  const handleChangename=(event)=>{
    setName(event.target.value);

  };
  return (
    <div>
     <Stack direction={"column"} spacing={'10px'} marginLeft={'40%'} marginRight={'40%'} marginTop={'20px'} >
      <TextField   helperText="Please enter your name" value={name} id="name"   label="Name" onChange={handleChangename} />
      <FormControl sx={{ m: 1, minWidth: 120 }} >
        <InputLabel id="Gender-label">Gender</InputLabel>
        <Select
          labelId="Gender-label"
          id="Gender"
          value={gender}
          label="Gender"
          onChange={handleChange}
          
        >
          
          <MenuItem value={"m"}>Male</MenuItem>
          <MenuItem value={"f"}>Female</MenuItem>
        </Select>
        </FormControl>

        <FormControl sx={{ m: 1, minWidth: 120 }}>

        <InputLabel id="City-label">City</InputLabel>
        <Select
          labelId="City-label"
          id="City"
          value={city}
          label="City"
          onChange={handleChangeCity}
        >
          
          <MenuItem value={"wah cantt"}>wah cantt</MenuItem>
          <MenuItem value={"islamabad"}>islamabad</MenuItem>
        </Select>
      </FormControl>
      <Button variant="contained" color="success" onClick={()=>{
        setItems([...items,{
           id:items.length+1, Name:name ,Gender: gender, City: city
          }]);
        
        setCity('');
        setGender('');
        setName('');
        localStorage.setItem('users',JSON.stringify(items));
        console.log(items);
      }} >ADD</Button>

     </Stack>
    </div>
  );
}