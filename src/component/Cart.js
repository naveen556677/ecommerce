// src/components/Cart.js
import React,{useEffect, useState} from "react";
import { Card, CardContent, Typography, Button, Avatar,Box } from "@mui/material";

function Cart({ cartItems, onRemoveItem }) {
  
  const [total,settotal]=useState(0);
  useEffect(()=>{
    settotal(cartItems.reduce((acc,curr)=>acc+parseInt(curr.price),0))
  },[cartItems])
  return (
  <>
    <div>
      <Typography variant="h4" gutterBottom>Your Cart</Typography>
      {cartItems.length === 0 ? (
        <Typography>No items in your cart.</Typography>
      ) : (
        
        cartItems.map((item,index) => (
          
          <Card key={index} style={{ marginBottom: "10px" }}>
            <CardContent>
              <Avatar src={item.image} sx={{width:60,height:60}}></Avatar>
              <Typography variant="h6">{item.name}</Typography>
              <Typography>${item.price}</Typography>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => onRemoveItem(item)}
              >
                Remove
              </Button>
            </CardContent>
          </Card>
        
        ))
        
      )}
      
    </div>
    <Box sx={{border:2,borderColor:'black',borderRadius:1,padding:2,backgroundColor:'lightpink'}}>
      <Typography>Total:{total}</Typography>
    </Box>
    </>  );
}

export default Cart;
