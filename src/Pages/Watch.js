import React from "react";
import { Card, CardContent,Container,  Button, Typography, CardMedia,Grid } from "@mui/material";
import { Routes, Route, Link } from "react-router-dom";
import Cart from "../component/Cart";



const  watch = [
    { id: 22, name: "Apple Watch", price:59999, image: '/img/apple watch.jfif',category: 'Watch' },
    { id: 23, name: "Samsung watch", price: 39999, image:"/img/samsung watch.jfif",category: 'Watch'},
    { id: 24, name: "Google pixel watch", price: 69999, image: "/img/google watch.jfif",category: 'Watch' },
    { id: 25, name: "Firebolt watch", price: 3999, image: "/img/firebolt watch.jfif",category: 'Watch'},
    { id: 26, name: "Casio watch", price: 14999, image: "/img/casio watch.jfif",category: 'Watch' },
    { id: 27, name: "Realme watch", price: 1599, image: "/img/realme watch.jfif",category: 'Watch'}
  ];
 
  function Watch({cartItems,onAddToCart}){
    return(
    
    <div>
             <Typography variant="h4" gutterBottom>
               Welcome to our E-Commerce WATCH Store!
             </Typography>
             <Grid container spacing={2}>
               {watch.map((watch) => (
                 <Grid item xs={12} sm={4} key={watch.id}>
                <Card key={watch.id}>

         <CardMedia component="img"  height="194" image={watch.image} alt='p2' sx={{width:'100%',objectFit:'cover'}} />
         <CardContent>
          <Typography variant="h6">{watch.name}</Typography>
           <Typography>₹{watch.price}</Typography>   
           {cartItems.some(item=>item.id===watch.id) ?
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
             onClick={() => onAddToCart(watch)}
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
  export default Watch;