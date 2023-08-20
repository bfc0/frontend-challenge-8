import { useState } from 'react';
import './Carousel.css'

export function Carousel() {
    const fotos = [
        "/images/image-product-1.jpg",
        "/images/image-product-2.jpg",
        "/images/image-product-3.jpg",
        "/images/image-product-4.jpg",
    ]

    const [currIdx, setCurrIdx] = useState(0);

    return (
        <div className='carousel'>
            <img src={fotos[currIdx]} />
            <button><img src="/images/icon-previous.svg" alt="previous"
                onClick={() => {
                    setCurrIdx(curr => curr <= 0 ? fotos.length - 1 : curr - 1)
                }}
            /></button>
            <button><img src="/images/icon-next.svg" alt="next"
                onClick={() => {
                    setCurrIdx(curr => (curr >= fotos.length - 1 ? 0 : curr + 1))
                }}
            /></button>
        </div>
    )
}