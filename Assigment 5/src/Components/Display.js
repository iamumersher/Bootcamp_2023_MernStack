import  React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Stack } from '@mui/system';
import { Button } from '@mui/material';
import { TextField } from '@mui/material';




export default function DataTable(props) {
  const [searchdata,setSearchdata] = useState("");
  const [searchdisply,setSearchdisply] = useState([]);

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
          props.userid(row.id);
          props.Bb(false);
        props.city(row.City);
        props.gender(row.Gender);
        props.name(row.Name);
          
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
         
            const deletels=localStorage.getItem("users");
            const localobj=JSON.parse(deletels);
            const newarry=localobj.filter(x=>x.id!=row.id);
            const updatearry=JSON.stringify(newarry);
            localStorage.setItem("users",updatearry);

        
}}>
          Delete 
        </Button>,
    },
  ];

function searchuser(){
  const searchuserdata=localStorage.getItem("users");
            const localobj=JSON.parse(searchuserdata);
            const newarry=localobj.filter(x=>x.Name==searchdata);
            setSearchdisply(newarry);
         } 


  return (
<>
    <Stack direction={"column"} spacing={'10px'} marginLeft={'30%'} marginRight={'30%'} marginTop={'20px'}>
     <Stack direction={'row'} spacing={'8px'} justifyContent={'center'}>
      <TextField id="outlined-basic" label="Search by ID" variant="outlined" value={searchdata} onChange={(e)=>setSearchdata(e.target.value)}/>
         <Button variant='contained' color='success' onClick={searchuser} >Search</Button>
         </Stack>


      <DataGrid
        rows={searchdata?searchdisply:props.Rows}
        columns={columns}
        
        pagination={false}
        hideFooterPagination={true}
        rowSelection={false}
      /></Stack></>
  );
}