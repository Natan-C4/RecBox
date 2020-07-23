import React, {useState,useEffect} from 'react'
import {Navbar , Container , Nav , Form , Button , FormControl} from 'react-bootstrap'
import logo from '../assets/logo192.png'
import {BrowserRouter as Router , Switch , Route } from 'react-router-dom'
import Favorites from './Favorites'
import Search from './Search'








const  Header = function (){
   



   
        return(
            <>
            <Navbar collapseOnSelect expand='md' bg='dark' variant='dark'>
            <Container>
                <Navbar.Brand href='/'>
                    <img 
                    src={logo}
                    height='30'
                    width='30'
                    className='d-inline-block align-top'
                    alt='Logo'
                     />RecipeBox
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id='responsive-navbar-nav'>
                    <Nav className='mr-auto'>
                        
                        
                        {/* <Nav.Link href='/favorites'>Favorites</Nav.Link>                             */}
                        
                    </Nav>
                   <Search />

                </Navbar.Collapse>
            </Container>
        </Navbar>
        
       
        
        

        {/* <Router>
                <Switch>
                
                <Route exact path='/favorites' component={Favorites}/> 
                
                
                </Switch>
        </Router> */}




        </>
        )
    
}
 
export default Header


