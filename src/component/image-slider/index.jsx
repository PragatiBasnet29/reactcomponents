import React, { useState, useEffect } from 'react';
import './styles.css';

const ImageSlider = ({ url, limit = 5, page = 1 }) => {
    const [images, setImages] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);

    const fetchImages = async () => {
        try {
            const fetchUrl = `${url}?_limit=${limit}&_page=${page}`;
            const response = await fetch(fetchUrl);
            const data = await response.json();
            setImages(data);
        } catch (error) {
            console.error("Error fetching images:", error);
        }
    };

    useEffect(() => {
        fetchImages();
    }, [url, limit, page]);

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
            <div className="slider-buttons">
                <button onClick={handlePrevious}>Previous</button>
                <button onClick={handleNext}>Next</button>
            </div>
        </div>
    );
};

export default ImageSlider;