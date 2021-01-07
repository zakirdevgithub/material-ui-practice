import React,{useState, useEffect} from "react";
import {Container,Box,Paper} from "@material-ui/core";
import {TableContainer, Table,TableHead, 
    TableBody, TableRow, TableCell, 
    TablePagination} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import axios from "axios";


const useStyles=makeStyles((theme)=>({
    root:{
        width:"100vw",
        height:"100vh",
        paddingTop: theme.spacing(3),
        backgroundColor: theme.palette.grey[200]
    }
}))

const TableCom=()=>{
    const classes=useStyles();
    const [users,setUsers]=useState([]);
    const [page,setPage]=useState(0);
    const [rowsPerPage, setRowsPerPage]=useState(3);

    const loadUsersData=async()=>{
        const result=await axios.get("https://jsonplaceholder.typicode.com/users");
        setUsers(result.data)
    }

    useEffect(()=>{
        loadUsersData();
    },[])

    const onChangePageHandler=(event, index)=>{
        setPage(index);
    }

    const onChangeRowsPerPageHandler=(event)=>{
        setRowsPerPage(event.target.value)
    }

    return(
        <Container className={classes.root}>
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                <TableRow >
                <TableCell>Name</TableCell>
                <TableCell>Username</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Website</TableCell>
                </TableRow>
                </TableHead>

                <TableBody>
                {
                    users.slice(page*rowsPerPage, page*rowsPerPage+rowsPerPage).map((user)=>(
                <TableRow>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.username}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.website}</TableCell>
                </TableRow>
                    ))
                }
                

                </TableBody>
            </Table>

          <TablePagination
          page={page}
          count={users.length}
          rowsPerPage={rowsPerPage}
          rowsPerPageOptions={[3,5,7,9,12,15]}
          onChangePage={onChangePageHandler}
          onChangeRowsPerPage={onChangeRowsPerPageHandler}
          />  
        </TableContainer>
        </Container>
    )
}

export default TableCom;