import React from 'react'
import { useEffect} from "react";
import { useNavigate } from 'react-router-dom';
const Logout = () => {
    const navigate = useNavigate();
    useEffect(()=>{
        fetch("/logout",{
            method:"GET",
            credentials: 'include',
            headers:{
                Accept:'application/json',
                'Content-Type': 'application/json'
            },
        }).then((res)=>{
            navigate('../signin', { replace: true });
            if(res.status !== 200){
                const error = new Error(res.error)
                throw error
            }
        }).catch((err)=>{
            console.log(err)
        })
    })
  return (
    <div>
      
    </div>
  )
}

export default Logout
