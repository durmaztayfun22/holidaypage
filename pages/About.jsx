import React from "react";
import '../styles/About.css';
import Header from './components/Header';
import Footer from './components/Footer';
import X from './components/X';
import Body1 from './components/Body1';

export default function About() {
    return(
        <>
            <header>
                <Header/>
            </header>

            <div className='body-1'>
                <Body1/>
            </div>

            <div className='cardX'>
               <X/>
            </div>

            <div className='Footer-index'>
                <Footer/>
            </div>
        </>
    )
}