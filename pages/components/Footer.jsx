import React from "react";
import '../../styles/Footer.css';
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitterSquare, faInstagramSquare, faFacebookSquare, faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faHouseChimney, faEnvelope, faPhone, faFax } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {

    return(
        <>
            <div className="footer">
                <div className="footer-Head">
                    <div className="footer-Head-Left"><span>Get Connected with us on social networks: </span></div>
                    <div className="footer-Head-Right">
                        <ul>
                            <li>
                                <a href="https://tr-tr.facebook.com/">
                                    <FontAwesomeIcon icon={faFacebookSquare} style={{ color: 'white', fontSize: '24px' }} />
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/ttyfmdrmz">
                                    <FontAwesomeIcon icon={faTwitterSquare} style={{ color: 'white', fontSize: '24px' }} />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/ttyfndrmz/">
                                    <FontAwesomeIcon icon={faInstagramSquare} style={{ color: 'white', fontSize: '24px' }} />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/tayfun-durmaz-405399277/">
                                    <FontAwesomeIcon icon={faLinkedin} style={{ color: 'white', fontSize: '24px' }} />
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/durmaztayfun22">
                                    <FontAwesomeIcon icon={faGithubSquare} style={{ color: 'white', fontSize: '24px' }} />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer-body">
                    <div className="footer-body-Container">
                        <div className="footer-body-Container-1">
                            <h3>HOLİDAY</h3>
                            <span>The best time for your family, loved ones, friends and yourself is HOLIDAY time. How about a holiday break?</span>
                        </div>
                        <div className="footer-body-Container-2">
                            <h3>PRODUCTS</h3>
                            <ul>
                                <li><Link href="/">Home</Link></li>
                                <li><Link href="/">About Us</Link></li>
                                <li><Link href="/">Hotel Rooms</Link></li>
                                <li><Link href="/">Cities</Link></li>
                                <li><Link href="/">Contact</Link></li>
                            </ul>
                        </div>
                        <div className="footer-body-Container-3">
                            <h3>USEFUL LINKS</h3>
                            <ul>
                                <li>Your Account</li>
                                <li>Become an Affiliate</li>
                                <li>Shipping Rates</li>
                                <li>Help</li>
                            </ul>
                        </div>
                        <div className="footer-body-Container-4">
                            <h3>CONTACT</h3>
                            <ul>
                                <li><FontAwesomeIcon icon={faHouseChimney} /> New York, NY 10012, US</li>
                                <li><FontAwesomeIcon icon={faEnvelope} /> durmaztayfun178@gmail.com</li>
                                <li><FontAwesomeIcon icon={faPhone} />+ 01 234 567 89</li>
                                <li><FontAwesomeIcon icon={faFax} />+ 01 234 567 88</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-foot">
                    <div className="footer-foot-Subject">
                        <p>© 2024 Copyright: TAYFUN DURMAZ</p>
                    </div>
                </div>
            </div>
        </>
    )
}