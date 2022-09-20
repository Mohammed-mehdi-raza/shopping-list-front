import React,{useState} from "react";
import {Card,Input,Button} from "@mui/material";
import './Home.css';
import {login,register} from "../../api/api.js";
import {useNavigate} from 'react-router-dom';

function Home(){

    const [signUp,setSignUp]=useState(true);
    const [formData,setFormData]=useState({username:"",password:"",cPassword:""});
    const navigate=useNavigate();

    const handleSubmit=()=>{
        console.log("submit");
    }

    const clicked=async()=>{
        const {data}=await login(formData);
        if(data.user){
            navigate('/user');
        }
    }

    const clicked1=async()=>{
        if(formData.password===formData.cPassword){
            const {data}=await register(formData);
            if(data.user){
                setSignUp(!signUp);
            }
        }else{
            console.log("password do not match");
        }
    }

    const changeRe=()=>{
        setSignUp(!signUp);
    }

    const changeHandeler=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value});
    }

    return(
        <div className="container">
            <div className="out">
                <Card variant="outlined" className="box">
                    <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                        <Input type="text" variant="outlined" placeholder="username" name="username" required onChange={changeHandeler}/><br/><br/>
                        <Input type="password" variant="outlined" placeholder="password" name="password" required onChange={changeHandeler}/><br/><br/>
                        {
                            signUp 
                            ?
                                <>
                                    <Button onClick={clicked} variant="outlined">Sign In</Button><br/><br/> 
                                    <Button onClick={changeRe}>Don't have an account? sign Up</Button>
                                </>
                            :
                                <>
                                    <Input type="password" variant="outlined" placeholder="confirm password" name="cPassword" required onChange={changeHandeler}/><br/><br/>
                                    <Button onClick={clicked1} variant="outlined">Sign Up</Button><br/><br/>
                                    <Button onClick={changeRe}>Already have an account? sign In</Button>
                                </>
                        }
                    </form>
                </Card>
            </div>
        </div>
    );
}

export default Home;