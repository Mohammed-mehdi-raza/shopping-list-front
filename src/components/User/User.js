import React,{useState,useEffect} from "react";
import Navbar from "../Navbar/Navbar.js";
import {getAll,filter} from '../../api/api.js';
import {Card,Button,Input} from '@mui/material';
import './User.css';

function User(){

    const [items,setItems]=useState([]);
    const [temp,setTemp]=useState(false);
    const [formData,setFormData]=useState({maxPrice:"",minPrice:"",category:""});

    const clicked=()=>{
        setTemp(!temp);
    }

    const handleChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value});
    }

    const handleSubmit=()=>{
        async function getFilterItem(){
            console.log(formData);
            const {data}=await filter(formData);
            setItems(data.result);
        }
        getFilterItem();
    }

    useEffect(()=>{
        async function getData(){
            const {data}=await getAll();
            setItems(data.result);
        }
        getData();
    },[])

    return(
        <>
            <Navbar/><br/>
            <Button variant="outlined" onClick={clicked} style={{backgroundColor:"purple",color:"black",position:"relative",left:"50%"}}>filter</Button>
            {
                temp?
                <div className="form">
                    <br/>
                    <Input type="Number" name="maxPrice" placeholder="maxPrice" value={formData.maxPrice} onChange={handleChange}/>
                    <br/><br/>
                    <Input type="Number" name="minPrice" placeholder="minPrice" value={formData.minPrice} onChange={handleChange}/>
                    <br/><br/>
                    <Input type="text" name="category" placeholder="category" value={formData.category} onChange={handleChange}/>
                    <br/><br/>
                    <Button onClick={handleSubmit} variant="outlined" style={{position:"relative",left:"4%"}}>submit</Button>
                    <br/><br/>
                </div>
                :
                <><br/></>
            }
            {
                items.map((item,i)=>{
                   return(
                    <>
                    <br/>
                    <Card variant="outlined" className="box1">
                        <h5>{item.name}</h5>
                        <p>{item.description}</p>
                        <strong>price:</strong>{item.price}<br/><br/>
                        <strong>category:</strong>{item.category}<br/>
                    </Card>
                    </>
                   )
                })
            }
        </>
    );
}

export default User;