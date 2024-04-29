import React from "react";
import '../styles/Cities.css';
import Header from './components/Header';
import Footer from './components/Footer';
import MyCarousel from './components/MyCarousel';
import BestOf from './components/BestOf';

export default function Cities() {
    return(
        <>
            <header>
                <Header/>
            </header>
            
            <div className='bestOf'>
                <BestOf/>
            </div>

            <div className='body-2-Slider'>
                <MyCarousel/>
            </div>

            <div className='Footer-index'>
                <Footer/>
            </div>
        </>
    )
}