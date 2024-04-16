import React from "react";
import Link from "next/link";
import '../../styles/Header.css';

export default function Header() {

    return(
        <>
            <div className='imgHoliday1'>
                <div className="imgHoliday1-content">
                    <div className="imgHoliday1-menuLEFT">
                        {/* <img src="https://i.imgur.com/77C2A6I.png" alt="sun" className="logo"/> */}
                        <h3>HOLIDAY</h3>
                    </div>
                    <div className="imgHoliday1-menuRIGHT">
                        <ul>
                            <li><Link href="/">Cities</Link></li>
                            <li><Link href="/">Contact</Link></li>
                        </ul>
                    </div>
                </div>
                <img src="https://i.imgur.com/CYFR9Hl.jpeg" alt="holiday1" />
                <div className="imgHoliday1-overlay">
                    <h1>HOLIDAY</h1>
                    <h4>You are in the best time to spare time for yourself and your loved ones.</h4>
                </div>
            </div>
        </>
    )
}