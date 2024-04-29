import React from "react";
import '../styles/Contact.css';
import Header from './components/Header';
import Footer from './components/Footer';
export default function Contact() {
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