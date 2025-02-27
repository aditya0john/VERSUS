import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

function Carousel() {
  let images = {
    1: "/images/award1.jpg",
    2: "/images/award2.jpg",
    3: "/images/award3.jpg",
  };

  const settings = {
    infinite: true,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  const imageElements = Object.keys(images).map((key) => (
    <div key={key}>
      <Image
        width={500}
        height={500}
        src={images[key]}
        className="p-3 image-resize-sm image-resize-lg rounded-3xl"
        alt={`Award ${key}`}
      />
    </div>
  ));

  return (
    <div className="">
      <div>
        <span>
          <p className="font-bold text-2xl lg:text-5xl flex justify-center items-center text-black/[0.8]">
            GALLERY
          </p>
        </span>
      </div>
      <Slider {...settings} className="overflow-hidden sm:overflow-hidden">
        {imageElements}
      </Slider>
    </div>
  );
}

export default Carousel;
