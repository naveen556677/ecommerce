// src/components/ProductCard.js
import React from "react";
import { Card, CardContent,Container,  Button, Typography, CardMedia } from "@mui/material";
import { Routes, Route, Link } from "react-router-dom";
import Cart from "./Cart";
function ProductCard({ product, onAddToCart,cartItems }) {
  const isItemInCart = Array.isArray(cartItems) && cartItems.some(item => item.id === product.id && item.image === product.image);
  return (
    

    <>
    <Card key={product.id}>
         
      <CardMedia component="img"  height="194" image={product.image} alt='p2' sx={{width:'100%',objectFit:'cover'}} />
      <CardContent>
       <Typography variant="h6">{product.name}</Typography>
        <Typography>₹{product.price}</Typography>   
        {isItemInCart ?
       ( <Button
        variant="contained"
        color="secondary"
        component={Link} to="/cart"
      >
        Go to Cart
      </Button> ):
        
  (<Button
          variant="contained"
          color="primary"
          onClick={() => onAddToCart(product)}
        >
          Add to Cart
        </Button>)}
  
  
      </CardContent>
    </Card>
    <Container>
    <Routes>
     <Route
          path="/cart"
          element={<Cart />}
        />
      </Routes>
      </Container>
      </>
  );
}

export default ProductCard;
