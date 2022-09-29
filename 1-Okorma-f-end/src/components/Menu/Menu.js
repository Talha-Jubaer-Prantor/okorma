import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './Menu.css'

const Menu = (product) => {
    const [goods,setGoods]=useState()
    const [item,setItem]=useState()
    const user= JSON.parse(localStorage.getItem('loggedData'))
    const userId=user.userId
    useEffect(()=>{
        fetch(`http://localhost:8080/myorder/${userId}`)
        .then(res=>res.json())
        .then(data=>setGoods(data))
    },[])
    

    
    // useEffect(()=>{
        // goods.map(goodItem=>console.log(goodItem))
    // },5000)
    // console.log(item)
    return (
        <div className='menu'>

            <nav className="navbar navbar-light bg-light justify-content-between container">
                <a className="navbar-brand" href='/'><b>Trimart</b></a>
                <div>
                <button className="btn my-2 my-sm-0" ><b><a style={{'textDecoration':'none','color':'black'}} href='/'>Home</a></b></button>
                </div>
            </nav>

            <div className='order-status'>
        
               {
                goods?.map(good=> 
                <div>
                    <li className='order-item' key={good._id}>
                    li {good.length}
                </li>
                
                {good.order.map(orderItem=> <li>{orderItem.name}</li>)}
                </div>
                
                )
               }
               

            </div>


        </div>
    );
};

export default Menu;