import React from 'react';
import Home from './Home';
import ContactSection from './ContactSection';
import Header from './Header';
import Footer from './Footer';
import "../styles/Main.css";
import Signup from "./Signup";
import SignIn from './SignIn';
// import TripSummary from './TripSummary';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TripSummary from './TripSummary';


function Main(props) {
    return (
        <div>
           <Router>
            <div className='Header'>
                <Header/> 
            </div>
           <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/signup' element={<Signup/>}/>
                <Route path='/signin' element={<SignIn/>}></Route>
                <Route path='/mybookings' element={<div className='tripSummary'><TripSummary/></div>}/>
                <Route path='/contact' element={<ContactSection/>}/>
            </Routes>
            <div className='Footer'>
                <Footer />
            </div>
           </Router>
        </div>
    );
}

export default Main;