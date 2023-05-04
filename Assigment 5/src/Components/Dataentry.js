import { Button, TextField } from "@mui/material";
import { Stack } from "@mui/system";
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import DataTable from "./Display";

export default function SelectLabels() {
  const [Rows, setRows] = React.useState(JSON.parse(localStorage.getItem('users')) ? JSON.parse(localStorage.getItem('users')) : []);
  const [gender, setGender] = React.useState('');
  const [city, setCity] = React.useState('');
  const [name, setName] = React.useState('');
  const [bb, setBb] = React.useState(true);
  const [userid, setid] = React.useState('');
  const [addbutton, setAddbutton] = React.useState(false);
  const [updatebutton, setUpdatebutton] = React.useState('');




  const [items, setItems] = React.useState(JSON.parse(localStorage.getItem('users')) ? JSON.parse(localStorage.getItem('users')) : []);

  const handleChange = (event) => {
    setGender(event.target.value);
  };
  const handleChangeCity = (event) => {
    setCity(event.target.value);

  };
  const handleChangename = (event) => {
    setName(event.target.value);

  };
  React.useEffect(() => {
  
      localStorage.setItem('users', JSON.stringify(items));
      const ls = localStorage.getItem('users');

    setRows(JSON.parse(ls));
      
  }, [items]

  );

  const handleAddClick = () => {
    setAddbutton(true);
    setItems([...items, {
      id: items.length + 1, Name: name, Gender: gender, City: city
    }]);

    setCity('');
    setGender('');
    setName('');
    console.log(items);

   

  }

  return (
    <>
      <div>
        <Stack direction={"column"} spacing={'10px'} marginLeft={'40%'} marginRight={'40%'} marginTop={'20px'} >
          <TextField helperText="Please enter your name" value={name} id="name" label="Name" onChange={handleChangename} />
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
          {bb ? <Button variant="contained" color="success" onClick={handleAddClick} >ADD</Button> : <Button variant="contained" color="success" onClick={() => {
            const updatedata = {
              id: userid, Name: name, Gender: gender, City: city
            };
            const updatels = localStorage.getItem('users');
            const newarry = JSON.parse(updatels);
            console.log(newarry);
            if (newarry.find((user) => user.id == updatedata.id)) {
              newarry[updatedata.id - 1] = {
                id: updatedata.id, Name: name, Gender: gender, City: city

              }
              const localStorageupdate = JSON.stringify(newarry);
              localStorage.setItem("users", localStorageupdate);

            }
            console.log(newarry[updatedata.id - 1]);
            const ls = localStorage.getItem('users');

            setRows(JSON.parse(ls));


            setCity('');
            setGender('');
            setName('');
            setid('');
            setBb(true);
          }} >update</Button>}
        </Stack>
        <DataTable Rows={Rows} setRows={setRows} city={setCity} gender={setGender} name={setName} Bb={setBb} userid={setid} />

      </div>
    </>
  );
}