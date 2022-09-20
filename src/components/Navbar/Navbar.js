import React from 'react';
import {Button} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import './Navbar.css';

function Navbar(){

    const navigate=useNavigate();
    const click=()=>{
        navigate('/');
    }

    return(
        <div className='nav'>
             <Button variant="outlined" onClick={click} style={{backgroundColor:"lightgreen",color:"orange",position:"relative",left:"85%",top:"25%"}}>logout</Button>
        </div>
    );
}

export default Navbar;