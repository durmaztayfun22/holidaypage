import React from "react";
import '../../styles/headerBottom.css';

export default function headerBottom() {

    return(
        <>
            <div className="HotelRoom">
                <div className="HotelRoom-left">
                    <div className="HotelRoom-left-Card">
                        <div className="HotelRoom-left-Card-img">
                            <img src="https://i.imgur.com/u9ZdNYH.jpeg" alt="room1" />
                            <span>Review</span>
                        </div>
                        <div className="HotelRoom-left-Card-Subject">
                            <span>Our spacious rooms where you will enjoy the natural light</span>
                            <span className="spann">(BAHAMAS)</span>
                            <div className="HotelRoom-left-Card-Subject-Card">
                                <ul>
                                    <li>
                                        <img src="https://i.imgur.com/G4B8HdS.png" alt="square" />
                                        <h1>150</h1>
                                        <ul className="Description">
                                            <li className="Card-Head">m² width</li>
                                            <li className="Card-Description">100 m² of bedroom | 10 m² balcony | 40 m² wardrobe etc.</li>
                                        </ul>
                                    </li>
                                    <li>
                                        <img src="https://i.imgur.com/BwDsjBe.png" alt="bedroom" />
                                        <h1>1</h1>
                                        <ul className="Description">
                                            <li className="Card-Head">Bedroom</li>
                                            <li className="Card-Description">1 double bed | 1 TV | 1 mini fridge.</li>
                                        </ul>
                                    </li>
                                    <li>
                                        <img src="https://i.imgur.com/5G936Gs.png" alt="bathtub" />
                                        <h1>2</h1>
                                        <ul className="Description">
                                            <li className="Card-Head">Bathroom</li>
                                            <li className="Card-Description">1 large bathroom + toilet | 1 small bathroom.</li>
                                        </ul>
                                    </li>
                                    <li>
                                        <img src="https://i.imgur.com/mLOfXqg.png" alt="rating" />
                                        <h1>10/7</h1>
                                        <ul className="Description">
                                            <li className="Card-Head">BER Rating</li>
                                            <li className="Card-Description">Earned June 2024</li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div className="HotelRoom-left-Card-Subject-Rate">
                                <img src="https://i.imgur.com/patRaJD.png" alt="fees" />
                                <span>Daily Rate</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="HotelRoom-right">
                    <div className="HotelRoom-right-Card">
                        <div className="HotelRoom-right-Card-img">
                            <img src="https://i.imgur.com/LP0pKrD.jpeg" alt="room2" />
                            <span>Review</span>
                        </div>
                        <div className="HotelRoom-right-Card-Subject">
                            <span>Comfortable rooms designed with aesthetic and modern furniture</span>
                            <span className="spann">(VENİCE)</span>
                            <div className="HotelRoom-right-Card-Subject-Card">
                                <ul>
                                    <li>
                                        <img src="https://i.imgur.com/G4B8HdS.png" alt="square" />
                                        <h1>185</h1>
                                        <ul className="Description">
                                            <li className="Card-Head">m² width</li>
                                            <li className="Card-Description">125 m² of bedroom | 15 m² balcony | 45 m² wardrobe etc.</li>
                                        </ul>
                                    </li>
                                    <li>
                                        <img src="https://i.imgur.com/BwDsjBe.png" alt="bedroom" />
                                        <h1>1</h1>
                                        <ul className="Description">
                                            <li className="Card-Head">Bedroom</li>
                                            <li className="Card-Description">1 double bed | 2 TV | 1 large fridge | 1 Massage chair.</li>
                                        </ul>
                                    </li>
                                    <li>
                                        <img src="https://i.imgur.com/5G936Gs.png" alt="bathtub" />
                                        <h1>1</h1>
                                        <ul className="Description">
                                            <li className="Card-Head">Bathroom</li>
                                            <li className="Card-Description">1 extra large bathroom + toilet + 1 mini TV</li>
                                        </ul>
                                    </li>
                                    <li>
                                        <img src="https://i.imgur.com/mLOfXqg.png" alt="rating" />
                                        <h1>10/8</h1>
                                        <ul className="Description">
                                            <li className="Card-Head">BER Rating</li>
                                            <li className="Card-Description">Earned June 2024</li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div className="HotelRoom-right-Card-Subject-Rate">
                                <img src="https://i.imgur.com/patRaJD.png" alt="fees" />
                                <span>Daily Rate</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}