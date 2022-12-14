import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import AdminNav from "../AdminNav/AdminNav";
import "./AdminHome.css";

const AdminHome = (props) => {
  const [orederItems, setOrderItem] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/order")
      .then((res) => res.json())
      .then((data) => setOrderItem(data));
  }, []);


  // Order confirm button
    const handleConfirmOrder=(props)=>{
      const id=props
      console.log(id)
      const orderId={'orderId':id}
      console.log(orderId)

      fetch("http://localhost:8080/confirmorder",{
      method: 'POST',
      headers:{
        'content-type':'application/json'
      },
      body: JSON.stringify(orderId)
    }).then(res=>{
      window.location.reload()
    })
    }

    const handleDeleteOrder=()=>{
      // const id=props
    }
console.log(orederItems)
  return (
    <div>
      <AdminNav></AdminNav>

      {orederItems.map((orederItem) => (
        
        <div className="order-sec">
          <div className="order-owner">
            <p>
              <b>Name:</b>{orederItem.orderOwner.name}
            </p>
            <p>
              <b>Email:</b>{orederItem.orderOwner.email}
            </p>
            <p>
              <b>Phone:</b>{orederItem.orderOwner.name}
            </p>
          </div>
          {orederItem.order.map((item) => (
            <div className="order-items">
              <div className="admin-review-item">
                <div>
                  <img style={{"borderRadius":"50px"}} src={item.img} alt="img" />
                </div>
                <div className="review-item-details-container">
                  <div className="review-item-details">
                    <p className="product-name" title={item.name}>
                      {item.name.length > 20
                        ? item.name.slice(0, 20) + "..."
                        : item.name}
                    </p>
                    <p>
                      Price:{" "}
                      <span className="orange-color">{item.price} BDT</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <button type="button" onClick={()=>handleConfirmOrder(orederItem._id)} class="btn btn-success">Confirm Order</button>
          <button type="button" onClick={()=>handleDeleteOrder(orederItem._id)} class="btn btn-danger">Delete Order</button>
        </div>
      ))}
    </div>
  );
};

export default AdminHome;
