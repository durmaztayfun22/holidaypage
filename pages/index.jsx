import React from 'react';
import CardContainer from './components/Card-Container';
import HeaderBottom from './components/HeaderBottom';
import Header from './components/Header';
import Footer from './components/Footer';
import '../styles/App.css'


export default function App() {

    return (
        <div className='project'>
            <header>
                <Header/>
            </header>

            <div className='headerBottomCont'>
                <HeaderBottom/>
            </div>

            <div className='card-container'>
                <CardContainer/>
            </div>

            <div className='Footer-index'>
                <Footer/>
            </div>
        </div>
    );
}
