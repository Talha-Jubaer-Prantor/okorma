import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import AnotherMenu from '../AnotherMenu/AnotherMenu';
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
    

    
    // const ConfirmationMsg=()=>{
        // if(goods.)
    // }
    

    return (
        <div className='menu'>

            <AnotherMenu></AnotherMenu>
            <div className='order-status'>
        
            <h4 style={{'textAlign':'center'}}>My Orders</h4>
        {/* Menu List */}
               {
                goods?.map(good=> 
                <div className='order-container'>

                {good.order.map(orderItem=>
                    <li className='order-item'>
                        <img src={orderItem.img} alt="" />
                        {orderItem.name}
                    </li>)}

                   {good.status?( 
                   <span style={{'float':'right','color':'#21da02','paddingRight':'1%'}}> <b>Order Confirmed</b> </span>
                   ):(
                    <span style={{'float':'right','color':'red','paddingRight':'1%'}}> <b>Waiting for confirmation</b> </span>
                   )
                   }
                </div>
                )
               }
        {/* Menu List */}
               

            </div>


        </div>
    );
};

export default Menu;