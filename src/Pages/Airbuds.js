import React from "react";
import { Card, CardContent,Container,  Button, Typography, CardMedia,Grid } from "@mui/material";
import { Routes, Route, Link } from "react-router-dom";
import Cart from "../component/Cart";



const  airbuds = [
  { id: 16, name: "Apple buds gen3", price: 19999, image: "/img/applebuds.jfif", category: 'Airbuds' },
  { id: 17, name: "Samsung buds pro", price: 15999, image: "/img/samsungbuds.jfif", category: 'Airbuds' },
  { id: 18, name: "Oppo enco buds 2", price: 1599, image: "/img/oppo enco buds.jfif", category: 'Airbuds' },
  { id: 19, name: "Boat nirvana buds", price: 999, image: "/img/boat buds.jfif", category: 'Airbuds' },
  { id: 20, name: "Nothing buds", price: 1299, image: "/img/nothing buds.jfif", category: 'Airbuds' },
 { id: 21, name: "JBL wave buds", price: 899, image: "/img/jbl buds.jfif", category: 'Airbuds' }
  ];
 
  function Airbuds({cartItems,onAddToCart}){
    return(
    
    <div>
             <Typography variant="h4" gutterBottom>
               Welcome to our E-Commerce AIRBUDS Store!
             </Typography>
             <Grid container spacing={2}>
               {airbuds.map((airbuds) => (
                 <Grid item xs={12} sm={4} key={airbuds.id}>
                <Card key={airbuds.id}>

         <CardMedia component="img"  height="194" image={airbuds.image} alt='p2' sx={{width:'100%',objectFit:'cover'}} />
         <CardContent>
          <Typography variant="h6">{airbuds.name}</Typography>
           <Typography>₹{airbuds.price}</Typography>   
           {cartItems.some(item=>item.id===airbuds.id) ?
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
             onClick={() => onAddToCart(airbuds)}
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
  export default Airbuds;