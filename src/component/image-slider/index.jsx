import React, { useState, useEffect } from 'react';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';
import { BsDot } from 'react-icons/bs';
import './styles.css';

const ImageSlider = ({ url }) => {
    const [images, setImages] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const limit = 5; // Fixed limit of 5 images
    const page = 1;

    const fetchImages = async () => {
        try {
            const fetchUrl = `${url}?_limit=${limit}&_page=${page}`;
            const response = await fetch(fetchUrl);
            const data = await response.json();
            setImages(data.slice(0, limit)); // Ensure only 5 images
        } catch (error) {
            console.error("Error fetching images:", error);
        }
    };

    useEffect(() => {
        fetchImages();
    }, []);

    const handlePrevious = () => {
        setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
    };

    const handleNext = () => {
        setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
    };

    return (
        <div className="slider-container">
            <div className="slider">
                {images.map((image, index) => (
                    <img
                        key={image.id}
                        src={image.download_url}
                        alt={`Slide ${index + 1}`}
                        className={index === currentSlide ? 'slide active' : 'slide'}
                    />
                ))}
            </div>
            
            <BsArrowLeftCircleFill 
                className="arrow arrow-left" 
                onClick={handlePrevious}
            />
            <BsArrowRightCircleFill 
                className="arrow arrow-right" 
                onClick={handleNext}
            />
            
            <div className="dots-container">
                {images.map((_, index) => (
                    <BsDot 
                        key={index}
                        className={`dot ${index === currentSlide ? 'active' : ''}`}
                        onClick={() => setCurrentSlide(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default ImageSlider;