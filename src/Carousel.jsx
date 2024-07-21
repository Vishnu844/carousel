import React, { useState } from "react";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length); // images will loop infinitely
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // for slide show --
  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     nextSlide();
  //   }, 3000);

  //   return () => clearInterval(intervalId);
  // }, [currentIndex]);

  return (
    <>
      <section className="landing-section">
        <div className="row container">
          <div className="landing-div">
            <button className="btn btn-primary" onClick={() => prevSlide()}>
              Previous
            </button>
            <img
              src={images[currentIndex]}
              alt={`slide ${currentIndex + 1}`}
              className="landing-image"
            />
            <button className="btn btn-primary" onClick={() => nextSlide()}>
              Next
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Carousel;
