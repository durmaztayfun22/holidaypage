import React from "react";
import '../../styles/Card-container.css';

export default function CardContainer() {

    return(
        <>
            {/* <h1>Always the best for you...</h1> */}
            <ul className='card-container-body'>
                <li className='card'>
                    <img src="https://i.imgur.com/qIdNr9K.gif" alt="plane" />
                    <h3>Travelling</h3>
                    <span>Planning your vacation? We're here to ensure an unforgettable journey for you. Offering competitive prices and diverse options, we make it easy for you to reach your desired destination with comfort and safety as our top priorities.</span>
                </li>
                <li className='card'>
                    <img src="https://i.imgur.com/jiRooBf.gif" alt="sun-lounger" />
                    <h3>Accommodation</h3>
                    <span>Throughout your holiday, we provide a comfortable and serene accommodation experience. From luxurious hotels to local guesthouses, we offer a wide range of options. Just relax and leave the rest to us.</span>
                </li>
                <li className='card'>
                    <img src="https://i.imgur.com/rKkIOAW.gif" alt="cocktail" />
                    <h3>Services</h3>
                    <span>We strive to make your vacation truly memorable by offering comprehensive services. From transfers to guided tours, activities, and more, we meticulously plan every detail to ensure the best for you. Providing excellence is our commitment.</span>
                </li>
            </ul>
        </>
    )
}