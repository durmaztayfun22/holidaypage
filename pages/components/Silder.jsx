import React, { useState, useEffect } from 'react';
import '../../styles/Slider.css'

export default function Slider({ slides }) {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 3000); // Her 3 saniyede bir resim değiştir

        return () => clearInterval(interval);
    }, [slides]);

    return (
        <div className="slider">
            {slides.map((slide, index) => (
                <img
                    key={index}
                    src={slide}
                    alt={`slide${index + 1}`}
                    className={`slide ${index === activeIndex ? 'active' : ''}`}
                />
            ))}
        </div>
    );
}