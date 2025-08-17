"use client"
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

export default function LoginPage(){
    const router = useRouter();
        const [loading,setLoading] = useState(false)
        const [buttonDisabled,setButtonDisabled] = useState(false);
    
    const [user,setUser] = useState({
        email:"",
        password:"",
        
    })
        const onLogin =async ()=>{
    try{
        setLoading(true);
        const response = await  axios.post("/api/users/login",user)
        console.log("Signedup",response.data)
        router.push("/profile")
    }catch(error :any){
  toast.error(error.message)
    }finally{
        setLoading(false)
    }
    }
      useEffect(()=>{
          if( user.email.length >0 && user.password.length > 0){
            setButtonDisabled(false)
          }else{
            setButtonDisabled(true)
          }
        },[user])
    return(
        <div className="flex flex-col justify-center items-center">
        <h1>Login</h1>
        <input type="text" value={user.email} onChange={(e)=>setUser({...user,email:e.target.value})}  placeholder="user email"/>
        <input type="password" value={user.password} onChange={(e)=>setUser({...user,password:e.target.value})}  placeholder="user password"/>
          <button className="bg-green-900 px-4 py-1" onClick={onLogin}>login</button>
          <Link href="/signup">visit login</Link>
        </div>
    )
}