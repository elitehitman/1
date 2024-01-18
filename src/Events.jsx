import React from 'react'
import { useNavigate } from 'react-router-dom'
export const Events = ()=>{
    const navigate = useNavigate()
    return (
        <div className="Events">
            <div className="Events">
                <h1>Events</h1>
                <button onClick={()=>{navigate("/")}}>Home</button>
            </div>
        </div>
    )
}