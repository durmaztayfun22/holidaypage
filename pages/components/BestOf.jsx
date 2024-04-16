import React from "react";
import '../../styles/BestOf.css'

export default function BestOf() {

    return(
        <>
            <div className='bestOfTitle'>
                <h3>Preferred Tourist Destinations</h3>
            </div>
            <ul className='bestOf-ul'>
                <li className='bestOfCardContainer'>
                    <div  className='bestOfCard' style={{ backgroundImage: `url("https://i.imgur.com/R5G2F0s.jpeg")` }}>
                        <span>Barcelona is a colorful and vibrant city with Gaudí's unique architecture, the Gothic Quarter reflecting the city's history and the warm Mediterranean atmosphere.</span>
                    </div>
                </li>
                <li className='bestOfCardContainer' >
                    <div className='bestOfCard' style={{ backgroundImage: `url("https://i.imgur.com/cXdCFUe.jpeg")` }}>
                        <span>Rome is one of the most fascinating and romantic cities in the world with its rich history dating back to antiquity, impressive architecture and delicious cuisine.</span>
                    </div>
                </li>
                <li className='bestOfCardContainer' >
                    <div className='bestOfCard' style={{ backgroundImage: `url("https://i.imgur.com/opqXQKX.jpeg")` }}>
                        <span>Singapore is a vibrant and modern city-state known for its stunning skyline, diverse cultural heritage, and impeccable cleanliness, making it a dynamic destination for travelers from around the world.</span>
                    </div>
                </li>
                <li className='bestOfCardContainer' >
                    <div className='bestOfCard' style={{ backgroundImage: `url("https://i.imgur.com/qRbU8xX.jpeg")` }}>
                        <span>Paris is a unique city known as the capital of romance, famous for its historical buildings, art museums and world cuisine.</span>
                    </div>
                </li>
                <li className='bestOfCardContainer' >
                    <div className='bestOfCard' style={{ backgroundImage: `url("https://i.imgur.com/fu2ibGx.jpeg")` }}>
                        <span>Dubai is a cosmopolitan oasis in the desert, renowned for its futuristic skyscrapers, luxury shopping destinations, and extravagant lifestyle, making it a captivating blend of tradition and modernity.</span>
                    </div>
                </li>
                <li className='bestOfCardContainer' >
                    <div className='bestOfCard' style={{ backgroundImage: `url("https://i.imgur.com/kBzfyvg.jpeg")` }}>
                        <span>Delhi, known as the heart of India, is a fascinating city with a rich historical heritage, colorful markets and diversity.</span>
                    </div>
                </li>
                <li className='bestOfCardContainer' >
                    <div className='bestOfCard' style={{ backgroundImage: `url("https://i.imgur.com/6CgsuYn.jpeg")` }}>
                        <span>Istanbul is the meeting point of history and culture with its unique location connecting Asia to Europe with its bridge, and a fascinating metropolis with its magnificent Bosphorus view.</span>
                    </div>
                </li>
                <li className='bestOfCardContainer' >
                    <div className='bestOfCard' style={{ backgroundImage: `url("https://i.imgur.com/AwQAxmT.jpeg")` }}>
                        <span>Prague is one of Europe's most romantic and enchanting cities with its historic old town, gothic architecture and stunning views.</span>
                    </div>
                </li>
                <li className='bestOfCardContainer' >
                    <div className='bestOfCard' style={{ backgroundImage: `url("https://i.imgur.com/mhJZ8bE.jpeg")` }}>
                        <span>Seoul is a dynamic metropolis that offers a wonderful synthesis of traditional Korean culture and modern life.</span>   
                    </div>
                </li>
            </ul>
        </>
    )
}

