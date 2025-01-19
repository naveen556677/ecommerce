import React from "react";
import { Card, CardContent,Container,  Button, Typography, CardMedia,Grid } from "@mui/material";
import { Routes, Route, Link } from "react-router-dom";
import Cart from "../component/Cart";



const  laptop = [
  { id: 10, name: "Asus Zenbook S13", price: 59999, image: "/img/Asus zenbook S 13.jfif", category: 'Laptop' },
  { id: 11, name: "Samsung galaxybook4 pro", price: 89999, image: "/img/samsungbook.jfif", category: 'Laptop' },
  { id: 12, name: "Apple macbook m3 pro", price: 189999, image: "/img/mackbookpro.jfif", category: 'Laptop' },
  { id: 13, name: "Lenova LOQ", price: 67999, image: "/img/Lenova loq.jfif", category: 'Laptop' },
  { id: 14, name: "hp Spectre X360", price: 98999, image: "/img/hp spectre x360.jfif", category: 'Laptop' },
  { id: 15, name: "DEL i7", price: 129999, image: "/img/del.jfif", category: 'Laptop' },
  
  ];
 
  function Laptop({cartItems,onAddToCart}){
    return(
    
    <div>
             <Typography variant="h4" gutterBottom>
               Welcome to our E-Commerce LAPTOP Store!
             </Typography>
             <Grid container spacing={2}>
               {laptop.map((laptop) => (
                 <Grid item xs={12} sm={4} key={laptop.id}>
                <Card key={laptop.id}>

         <CardMedia component="img"  height="194" image={laptop.image} alt='p2' sx={{width:'100%',objectFit:'cover'}} />
         <CardContent>
          <Typography variant="h6">{laptop.name}</Typography>
           <Typography>₹{laptop.price}</Typography>   
           {cartItems.some(item=>item.id===laptop.id ) ?
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
             onClick={() => onAddToCart(laptop)}
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
  export default Laptop;