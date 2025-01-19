import React from "react";
import { Card, CardContent,Container,  Button, Typography, CardMedia,Grid } from "@mui/material";
import { Routes, Route, Link } from "react-router-dom";
import Cart from "../component/Cart";



const  moblies = [
  { id: 1, name: "Apple iphone16 pro max", price: 179999, image: "/img/iphone16promax.jfif", category: 'Mobile' },
  { id: 2, name: " Apple iphone 16", price: 79999, image: "/img/iphone16.jfif", category: 'Mobile' },
  { id: 3, name: "Samsung s24 ultra", price: 129999, image: "/img/Samsung-Galaxy-S24-Ultra-8K-Feature.jpg", category: 'Mobile' },
  { id: 4, name: "Samsung S24", price: 65999, image: "/img/samsung 24.jfif", category: 'Mobile' },
   { id: 5, name: "Samsung Fold 4", price: 139999, image: "/img/samsung fold.jfif", category: 'Mobile' },
  { id: 6, name: "Vivo X200Pro", price: 89990, image: "/img/vivox200pro.jfif", category: 'Mobile' },
   { id: 7, name: "Vivo V40 Pro", price: 49990, image: "/img/vivo v40pro.webp", category: 'Mobile' },
  { id: 8, name: "Google Pixel 9 Pro", price: 139999, image:"/img/googlepixel9pro.jpg", category: 'Mobile' }, 
 { id: 9, name: "Oppo find X6 Pro", price: 89999, image: "/img/Oppo-Find-X6-Pro.webp", category: 'Mobile' },
 ];
 
  function Mobile({cartItems,onAddToCart}){
    return(
    
    <div>
             <Typography variant="h4" gutterBottom>
               Welcome to our E-Commerce Mobile Store!
             </Typography>
             <Grid container spacing={2}>
               {moblies.map((mobile) => (
                 <Grid item xs={12} sm={4} key={mobile.id}>
                <Card key={mobile.id}>

         <CardMedia component="img"  height="194" image={mobile.image} alt='p2' sx={{width:'100%',objectFit:'cover'}} />
         <CardContent>
          <Typography variant="h6">{mobile.name}</Typography>
           <Typography>₹{mobile.price}</Typography>   
           {cartItems.some(item=>item.id===mobile.id) ?
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
             onClick={() => onAddToCart(mobile)}
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
                 </Grid>
               ))}
             </Grid>
           </div>
    )
  }
  export default Mobile;