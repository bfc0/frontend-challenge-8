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

    return (<>
        <div className='carousel' id="carousel">
            <div className='close-container'>
                <div className='close hidden' onClick={() => toggleModal()}>
                    <img src="/images/icon-close.svg" alt="close" />
                </div>
            </div>
            <img src={fotos[currIdx]}
                onClick={() => toggleModal()}
            />
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
            <div className="previews">
                {[1, 2, 3, 4].map(i => (
                    <img src={`/images/image-product-${i}-thumbnail.jpg`}
                        onClick={() => { setCurrIdx(i - 1) }}
                        className={i === currIdx + 1 ? "selected" : ""}
                    />
                ))}
            </div>
        </div>
        <div className='overlay hidden ' onClick={() => toggleModal()}></div>
    </>
    )
    function toggleModal() {
        document.querySelector("#carousel")?.classList.toggle("modal")
        document.querySelector(".overlay")?.classList.toggle("hidden")
        document.querySelector(".close")?.classList.toggle("hidden")
    }
}