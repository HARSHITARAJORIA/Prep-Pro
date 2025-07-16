
import axios from 'axios'
import React, { createContext, useContext, useState } from "react";
export const AuthContext=createContext({});
import { useNavigate } from 'react-router-dom';
import { StatusCodes } from 'http-status-codes';
const client=axios.create({
    baseURL:"http://localhost:8000/api/v1/users"
})

export const AuthProvider=({children})=>{
    
    const [userData,setUserData]=useState();
    const router=useNavigate();
    const handleRegister=async(name,username,password)=>{
        try{
            let request=await client.post("/register",{
                name:name,
                username:username,
                password:password

            })
            if(request.status===StatusCodes.CREATED){
                return request.data.message;
            }

        }
        catch(err){
        throw err;

        }
    }

    const handleLogin=async(username,password)=>{
        try{
            let request=await client.post("/login",{
                username:username,
                password:password
            });
            if(request.status===StatusCodes.OK){
                localStorage.setItem("token",request.data.token);
            }

        }
        catch(err){
            throw err;
        }
    }

    const data={
        userData, setUserData,handleRegister,handleLogin
    }

    return(
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    )

}