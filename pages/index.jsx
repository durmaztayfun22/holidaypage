import React from 'react';
import Slider from './components/Silder'; // Slider bileşenini import et
import MyCarousel from './components/MyCarousel';
import '../styles/App.css'
export default function App() {

    const slides = [
        "https://i.imgur.com/CYFR9Hl.jpeg",
        "https://i.imgur.com/rOjATUY.jpeg",
        "https://i.imgur.com/sWvJph3.jpeg",
        "https://i.imgur.com/NNs5jrN.jpeg"
    ];


    return (
        <div className='project'>
            <header>
                <div className='holiTitle'>
                    <h1>HOLİDAY</h1>
                    <h4>You are in the best time to spare time for yourself and your loved ones.</h4>
                </div>
                <div className='sliderbody'><Slider slides={slides}/></div>
            </header>

            <div className='card-container'>
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
            </div>

            <h4></h4>
            <div className='body-1'>
                <div className='body-1-img'>
                    <img src="https://i.imgur.com/I0iEC5o.png" alt="womansunbathing" />
                </div>

                <div className='body-1-Subject'>
                    <ul>
                        <li><p>One of the best solutions to get away from the busy pace of life and leave stress behind is to take a holiday. Holiday allows the body and soul to rest, provides renewal and freshness. There are many holiday destinations around the world with uniquely beautiful beaches, historical riches and natural wonders. There is a holiday route suitable for everyone's taste and preference. You can choose from a variety of options such as beach holidays, quiet mountain villages, exciting city adventures or camping holidays in touch with nature.</p></li>
                        <li><p>Holidays offer the opportunity to discover new cultures and enrich life experiences. Tasting local delicacies and discovering traditional handicrafts are among the privileges of a holiday. Holidays offer the opportunity to get together with family and friends, strengthen relationships and give the chance to accumulate unforgettable memories. Travelling broadens one's perspective and allows one to learn more about the world. Holidays have positive effects on mental and emotional health as well as physical health, reduce stress and increase happiness.</p></li>
                        <li><p>Travelling also increases self-confidence and contributes to personal development. Holidays are an excellent opportunity to relax and re-motivate. Travelling gives you the chance to do various activities and take up new hobbies. A holiday can be spent in a quiet village surrounded by natural beauty or in a bustling metropolis. A holiday is an ideal opportunity to escape from the monotony of life and to seek adventure.</p></li>
                        <li><p>Holidays nourish the soul, increase creativity and provide inner serenity. Travelling improves people's ability to see things from different perspectives and strengthens their sense of empathy. Holidays are an excellent opportunity to see new places, get to know different cultures and meet new people. Travelling offers the chance to discover historical and cultural heritage, to connect with the past and to learn.</p></li>
                        <li><p> A holiday is a break from the stress of work life and a time to rejuvenate spiritually. Travelling offers the opportunity to discover the beauties of nature and to be in harmony with nature. Holidays give you the chance to enjoy life and appreciate the value of memories. Every holiday experience offers a unique and special story, so every trip is an adventure.</p></li>
                    </ul>
                </div>
            </div>

            <div className='cardX'>
                <ul>
                    <li>
                        <blockquote className="twitter-tweet"><p lang="en" dir="ltr">Experience the Himalaya of Nepal <a href="https://t.co/zhRm7tN0tG">https://t.co/zhRm7tN0tG</a></p>&mdash; Adventure Land Nepal (@adventurelandnp) <a href="https://twitter.com/adventurelandnp/status/1730579947411169482?ref_src=twsrc%5Etfw">December 1, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
                    </li>
                    <li>
                        <blockquote className="twitter-tweet"><p lang="en" dir="ltr">Blue water, Maldives <a href="https://t.co/DUZn2NwS8K">pic.twitter.com/DUZn2NwS8K</a></p>&mdash; Jake Ryder (@JakeRyder7) <a href="https://twitter.com/JakeRyder7/status/1771418413430395291?ref_src=twsrc%5Etfw">March 23, 2024</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
                    </li>
                    <li>
                        <blockquote className="twitter-tweet"><p lang="en" dir="ltr">Unplugging for 5 days… no service. Wife and I on a cruise to the Bahamas <a href="https://twitter.com/hashtag/RoyalCaribbean?src=hash&amp;ref_src=twsrc%5Etfw">#RoyalCaribbean</a> <a href="https://twitter.com/hashtag/Unplugged?src=hash&amp;ref_src=twsrc%5Etfw">#Unplugged</a> <a href="https://twitter.com/hashtag/Cruising?src=hash&amp;ref_src=twsrc%5Etfw">#Cruising</a> <a href="https://twitter.com/hashtag/Bahamas?src=hash&amp;ref_src=twsrc%5Etfw">#Bahamas</a> 🏖️🏝️😎🛳️ <a href="https://t.co/cNf96QeEYz">pic.twitter.com/cNf96QeEYz</a></p>&mdash; Ryan Vandervort (@Ryan_Vandervort) <a href="https://twitter.com/Ryan_Vandervort/status/1770911816488509572?ref_src=twsrc%5Etfw">March 21, 2024</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
                    </li>
                </ul>
            </div>

            <div className='body-2-Slider'>
                <MyCarousel/>
            </div>
        </div>
    );
}
