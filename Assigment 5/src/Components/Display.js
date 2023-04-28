import  React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Stack } from '@mui/system';
import { Button } from '@mui/material';
import { TextField } from '@mui/material';
import SelectLabels from './Dataentry';


const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'Name', headerName: 'Name', width: 130 },
  {
    field: 'Gender',
    headerName: 'Gender',
    type: 'string',
    width: 90,
  }, {
    field: 'City',
    headerName: 'City',
    type: 'string',
    width: 90,
  },{
    field: "action",
    headerName: "Action",
    sortable: false,
    renderCell: ({ row }) =>
      <Button variant='contained' color='primary' onClick={() => {
        console.log(row);
      }}>
        Edit 
      </Button>,
  },{
    field: "delete",
    headerName: "Delete",
    sortable: false,
    renderCell: ({ row }) =>
      <Button variant='contained' color='error' onClick={() => {
        console.log(row);
      }}>
        Delete 
      </Button>,
  },
];


const rows = [
  { id : "Empty "
  } ,
];
const ls= localStorage.getItem('users');
const ro = JSON.parse(ls);

export default function DataTable() {
  return (
<>
<SelectLabels/>
    <Stack direction={"column"} spacing={'10px'} marginLeft={'30%'} marginRight={'30%'} marginTop={'20px'}>
     <Stack direction={'row'} spacing={'8px'} justifyContent={'center'}>
      <TextField id="outlined-basic" label="Search by ID" variant="outlined" />
         <Button variant='contained' color='success' >Search</Button>
         </Stack>


      <DataGrid
        rows={rows}
        columns={columns}
        
        pagination={false}
        hideFooterPagination={true}
        rowSelection={false}
      /></Stack></>
  );
}