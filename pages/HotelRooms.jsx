import React from "react";
import '../styles/HotelRooms.css';
import Header from './components/Header';
import Footer from './components/Footer';
export default function HotelRooms() {
    return(
        <>
            <header>
                <Header/>
            </header>

            <div className='Footer-index'>
                <Footer/>
            </div>
        </>
    )
}