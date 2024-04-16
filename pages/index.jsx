import React from 'react';
// import Slider from './components/Silder'; // Slider bileşenini import et
import MyCarousel from './components/MyCarousel';
import BestOf from './components/BestOf';
import X from './components/X';
import Body1 from './components/Body1';
import CardContainer from './components/Card-Container';
import Header from './components/Header';
import '../styles/App.css'


export default function App() {

    return (
        <div className='project'>
            <header>
                <Header/>
            </header>

            <div className='card-container'>
                <CardContainer/>
            </div>
            
            <div className='body-1'>
                <Body1/>
            </div>

            <div className='cardX'>
               <X/>
            </div>

            <div className='bestOf'>
                <BestOf/>
            </div>

            <div className='body-2-Slider'>
                <MyCarousel/>
            </div>
        </div>
    );
}
