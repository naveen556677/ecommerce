import React, { useState,useEffect} from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Container, Button, Grid, TextField, Stack, CardMedia } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
//import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import HomeIcon from '@mui/icons-material/Home';
//import MenuIcon from '@mui/icons-material/Menu';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonAddRoundedIcon from '@mui/icons-material/PersonAddRounded';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MoreIcon from '@mui/icons-material/MoreVert';
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import ProductCard from "./component/ProductCard";
import Cart from "./component/Cart";
import Login from "./Pages/Login";
import Mobile from './Pages/Mobile';
import Laptop from './Pages/Laptop';
import Airbuds from './Pages/Airbuds';
import Watch from './Pages/Watch';
import SignUp from './Pages/SignUp';
import Autocomplete from '@mui/material/Autocomplete';
const top100Films = [
  { title: 'Mobile' },
  { title: 'Laptop' },
  { title: 'Airbuds' },
  { title: 'Watch' }]
 
 

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

function Main() {
  const [cart, setCart] = useState([]);
  const [email, setEmail] = useState('');
  
  
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  console.log(isAuthenticated) // For managing login status
  const [searchValue, setSearchValue] = useState('');
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
const [password, setPassword] = useState('');
const [out,setOut]=useState(true)
  const navigate = useNavigate();
  useEffect(() => {
    // Retrieve the email from localStorage on page load
    const savedEmail = localStorage.getItem('userEmail');
    const storedCart =JSON.parse(localStorage.getItem(`cart_${savedEmail}`)) || [];
    setCart(storedCart);
    if (savedEmail) {
      setEmail(savedEmail); 
      setOut(false)// Auto-fill email field or login status
    }
  }, []);
  const products = [
    { id: 3, name: "Samsung s24 ultra", price: 129999, image: "/img/Samsung-Galaxy-S24-Ultra-8K-Feature.jpg", category: 'Mobile' },
    { id: 1, name: "Apple iphone16 pro max", price: 179999, image: "/img/iphone16promax.jfif", category: 'Mobile' },
    { id: 12, name: "Apple macbook m3 pro", price: 189999, image: "/img/mackbookpro.jfif", category: 'Laptop' },
    { id:11, name: "Samsung galaxybook4 pro", price: 89999, image: "/img/samsungbook.jfif", category: 'Laptop' },
    { id: 16, name: "Apple buds gen3", price: 19999, image: "/img/applebuds.jfif", category: 'Airbuds' },
    { id: 17, name: "Samsung buds pro", price: 15999, image: "/img/samsungbuds.jfif", category: 'Airbuds' },
  ]
  const handleLogin = (email, password) => {
    if (email && password){
      // Check if the user already has a cart in localStorage
      const storedCart =JSON.parse(localStorage.getItem(`cart_${email}`)) || [];
      localStorage.setItem('userEmail', email);
      setEmail(email);
      setOut(false)
      setCart(storedCart);
      setIsAuthenticated(true);
      alert("Logged in successfully!");

    } else {
      alert("Please enter email and password.");
    }
  };
  const handleLogout = () => {
    localStorage.removeItem('userEmail'); // Remove from localStorage
    setEmail(''); // Reset state to null
    setCart({});
    setOut(true)
    navigate('*')
    
  };
  // Add to Cart functionality
  const addToCart = (product) => {
    if (!email) {
      alert("Please log in first.");
      return;
    }

    const updatedCart = [...cart, product];
    setCart(updatedCart);
    localStorage.setItem(`cart_${email}`, JSON.stringify(updatedCart)); // Store cart data with the user's email as key
  };

  // Remove from Cart functionality
  const removeFromCart = (product) => {
    const updatedCart = cart.filter((item) => item.id !== product.id);
    setCart(updatedCart);
    localStorage.setItem(`cart_${email}`, JSON.stringify(updatedCart));
  };



  const handleSelect = (event, value) => {
    if (value) {
      setSearchValue('');
      navigate(`/${value}`);
    }
  };



  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {out===true ?
      (<MenuItem component={Link} to="/login">
  
          <IconButton size="large" color="inherit">
            <Button color="inherit" >
          <PersonAddRoundedIcon sx={{border:1,borderRadius:'50%',padding:1.6,backgroundColor:'lightblue',fontSize:27,borderColor:'black'}}/>
          <Typography variant='p' sx={{marginLeft:1}}>LOGIN</Typography>  </Button>
          </IconButton>
      
    
      </MenuItem>):
       (<MenuItem onClick={handleLogout}>
  
        <IconButton size="large" color="inherit">
          <Button color="inherit" >
        <PersonAddRoundedIcon sx={{border:1,borderRadius:'50%',padding:1.6,backgroundColor:'lightyellow',fontSize:27,borderColor:'black'}}/>
        <Typography variant='p' sx={{marginLeft:1}}>LOGOUT</Typography>  </Button>
        </IconButton>
    
  
    </MenuItem>)}
       
      <MenuItem component={Link} to="/cart">
        
          <IconButton
            size="large"
            aria-label="show 17 new notifications"
            color="inherit"
          >
            <Button color="inherit">
              <Badge badgeContent={cart.length} color="error">
           <ShoppingCartOutlinedIcon sx={{border:1,borderRadius:'50%',padding:1.6,backgroundColor:'lightblue',fontSize:27,borderColor:'black'}} />
              </Badge>
            </Button>

          </IconButton>
          
        
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <Box sx={{ border: 1, borderColor: 'black', borderRadius: "50%", backgroundColor: 'lightpink',marginLeft:3}}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
        </Box>
      </MenuItem>
    </Menu>
  );

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
              component={Link} to="/"
            >

              < HomeIcon />

            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: 'none', sm: 'block' } }}
            >
              <Button color="inherit" component={Link} to="/">
                Home
              </Button>
            </Typography>
            <Search>

              <Box sx={{ display: 'flex', backgroundColor: 'lightgray', borderColor: 'white', borderRadius: 1 }}>
                <Stack spacing={2} sx={{ width: { xs: '100%', sm: 300, md: 400, lg: 500 }, height: { xs: '7px', sm: '15px', md: '40px', lg: '50px' }, borderRadius: 1, borderColor: 'white', color: 'inherit' }}>
                  <Autocomplete
                    id="free-solo-demo"
                    options={top100Films.map((option) => option.title)}
                    value={searchValue} // Set the value of the search input
                    onInputChange={(event, newValue) => setSearchValue(newValue)}
                    onChange={handleSelect}
                    renderInput={(params) => < TextField {...params} label="Search our poducts..."
                      sx={{
                        backgroundColor: 'lightgrey',
                        height: { xs: '7px', sm: '15px', md: '40px', lg: '50px' },
                        borderRadius: 1,
                        '& .MuiOutlinedInput-root': {
                          '& fieldset': {
                            border: 'none',
                          },
                          '&:hover fieldset': {
                            border: 'none',
                            borderRadius: 5,
                          },
                          '&.Mui-focused fieldset': {
                            border: 'none',
                            borderRadius: 5,
                          },

                        },
                      }} />}

                  />

                </Stack>
                <SearchRoundedIcon sx={{ fontSize: 30, marginTop: 1.5 }} />
              </Box>
            </Search>
           
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <IconButton size="large" color="inherit">
              {out===true ?
                (<Button color="inherit" component={Link} to="/login">
                  <PersonAddRoundedIcon />
                  <Typography variant='p'>LOGIN</Typography>
                </Button>):
                (<Button color="inherit"onClick={handleLogout} >
                  <PersonAddRoundedIcon />
                  <Typography variant='p'>LOGOUT</Typography>
                </Button>)}
              </IconButton>
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >

                <Button color="inherit" component={Link} to="/cart">
                  <Badge badgeContent={cart.length} color="secondary">
                    <ShoppingCartOutlinedIcon />
                  </Badge>
                </Button>
              </IconButton>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
      </Box>

      <Container style={{ marginTop: "20px" }}>
      
        <Routes>
          <Route
            path="*"
            element={
              <div>
                <Typography variant="h4" gutterBottom>
                  Welcome to our E-Commerce Store!
                </Typography>
                <Box>
                <CardMedia component='img'  image='/img/wallpaper.jpg' height='300'  sx={{width:'100%',objectFit:'cover',marginBottom:2}}/>
                </Box>
                <Grid container spacing={2}>
                  {products.map((product) => (
                    <Grid item xs={12} sm={4} key={product.id}>
                      <ProductCard product={product} onAddToCart={addToCart} cartItems={cart} />
                    </Grid>
                  ))}
                </Grid>
              </div>
            }
          />
          <Route path="/Login" element={<Login password={password} setPassword={setPassword}  setEmail={setEmail} handleLogin={handleLogin} email={email}/>} />
          <Route path="/Mobile" element={<Mobile onAddToCart={addToCart} cartItems={cart} />} />
          <Route path="/Laptop" element={<Laptop onAddToCart={addToCart} cartItems={cart} />} />
          <Route path="/Airbuds" element={<Airbuds onAddToCart={addToCart} cartItems={cart} />} />
          <Route path="/Watch" element={<Watch onAddToCart={addToCart} cartItems={cart} />} />
          <Route
            path="/cart"
            element={<Cart cartItems={cart} onRemoveItem={removeFromCart} />}
          />
          <Route path="/SignUp" element={<SignUp password={password} setPassword={setPassword} setEmail={setEmail} handleLogin={handleLogin} email={email}/>}></Route>
        </Routes>
    
      </Container>
    </div>
  );
}
export default Main;