import React from "react";
import Link from "next/link";
import '../../styles/Header.css';

export default function Header() {

    return(
        <>
            <div className='imgHoliday1'>
                <img src="https://i.imgur.com/CYFR9Hl.jpeg" alt="holiday1" />
                <div className="imgHoliday1-overlay">
                    <h1>HOLIDAY</h1>
                    <h4>You are in the best time to spare time for yourself and your loved ones.</h4>
                </div>
            </div>
            <div className="imgHoliday1-content">
                <div className="imgHoliday1-menuLEFT">
                    {/* <img src="https://i.imgur.com/77C2A6I.png" alt="sun" className="logo"/> */}
                    <h3>HOLIDAY</h3>
                    {/* <div className="horizontal-line"></div> */}
                </div>
                <div className="imgHoliday1-menuRIGHT">
                    <ul>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/About">About Us</Link></li>
                        <li><Link href="/HotelRooms">Hotel Rooms</Link></li>
                        <li><Link href="/Cities">Cities</Link></li>
                        <li><Link href="/Contact">Contact</Link></li>
                    </ul>
                    {/* <div className="horizontal-line"></div> */}
                </div>
                
            </div>
        </>
    )
}