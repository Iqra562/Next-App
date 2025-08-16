"use client"
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {axios} from "axios";

export default function SignupPage(){
    const [user,setUser] = useState({
        email:"",
        password:"",
        username :""
    })
    return(
        <div className="flex flex-col justify-center items-center">
        <h1>Sign up</h1>
        <input type="text" value={user.username} onChange={(e)=>setUser({...user,username:e.target.value})}  placeholder="user name"/>
        <input type="text" value={user.email} onChange={(e)=>setUser({...user,email:e.target.value})}  placeholder="user email"/>
        <input type="password" value={user.password} onChange={(e)=>setUser({...user,password:e.target.value})}  placeholder="user password"/>
          <button className="bg-green-900 px-4 py-1">sign up</button>
          <Link href="/login">visit login</Link>
        </div>
    )
}