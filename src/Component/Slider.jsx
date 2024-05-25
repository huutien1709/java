import React from "react";
import Slider_1 from "../assets/images/slider_1.webp";

const Slider = () => {
  return (
    <div className="slider">
      <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={Slider_1} class="d-block w-100" alt="slider_1" />
          </div>
          <div class="carousel-item active">
            <img src={Slider_1} class="d-block w-100" alt="slider_1" />
          </div>
          <div class="carousel-item active">
            <img src={Slider_1} class="d-block w-100" alt="slider_1" />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Slider;
