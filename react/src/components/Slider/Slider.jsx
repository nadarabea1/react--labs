import React, { useEffect, useState } from 'react';

export default function Slider() {
    const [currImg, setCurrImg] = useState(0);
    const [isSliding, setIsSliding] = useState(false);

    const img = [
        "/images/1.jpg",
        "/images/2.jpg",
        "/images/3.jpg",
    ];

    const startSlide = () => {
        setIsSliding(true);
    };

    const stopSlide = () => {
        setIsSliding(false);
    };

    useEffect(() => {
        if (isSliding) {
            if(currImg === img.length) {
                setCurrImg(0);
            }
            const timer = setTimeout(() => {
                setCurrImg(currImg + 1);
            }, 1000);

            return () => clearTimeout(timer);
        }
    },[img.length, isSliding, currImg]);

    return (
        <div>
            <div>
                <img src={img[currImg]} alt="slider" />
            </div>
            <div>
                <button onClick={() => startSlide()}>Slider</button>
                <button onClick={() => setCurrImg(currImg - 1)} disabled={currImg === 0}>Prev</button>
                <button onClick={() => setCurrImg(currImg + 1)} disabled={currImg === img.length - 1}>Next</button>
                <button onClick={() => stopSlide()}>Stop</button>
            </div>
        </div>
    );
}
