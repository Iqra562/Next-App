"use client"
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

export default function SignupPage(){
    const router = useRouter()
    const [user,setUser] = useState({
        email:"",
        password:"",
        username :""
    })
    const [buttonDisabled,setButtonDisabled] = useState(false);
    const [loading,setLoading] = useState(false)
    const onSignup =async ()=>{
    try{
        setLoading(true);
        const response = await  axios.post("/api/users/signup",user)
        console.log("Signedup",response.data)
        router.push("/login")
    }catch(error :any){
  toast.error(error.message)
    }finally{
        setLoading(false)
    }
    }
    useEffect(()=>{
      if(user.username.length > 0 && user.email.length >0 && user.password.length > 0){
        setButtonDisabled(false)
      }else{
        setButtonDisabled(true)
      }
    },[user])
    return(
        <div className="flex flex-col justify-center items-center">
        <h1>{loading ? "loading" :"Signup "} </h1>
        <input type="text" value={user.username} onChange={(e)=>setUser({...user,username:e.target.value})}  placeholder="user name"/>
        <input type="text" value={user.email} onChange={(e)=>setUser({...user,email:e.target.value})}  placeholder="user email"/>
        <input type="password" value={user.password} onChange={(e)=>setUser({...user,password:e.target.value})}  placeholder="user password"/>
          <button className="bg-green-900 px-4 py-1" onClick={onSignup}>sign up</button>
          <Link href="/login">visit login</Link>
        </div>
    )
}