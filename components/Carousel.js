import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

function Carousel() {
  let images = {
    1: "/images/Live meetings.jpg",
    2: "/images/Ai assisted.webp",
    3: "/images/Interactive.png",
    4: "/images/Remote proctoring.png",
  };

  const settings = {
    easing: "linear",
    infinite: true,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
  };

  const imageElements = Object.keys(images).map((key) => (
    <div key={key}>
      <Image
        width={700}
        height={700}
        src={images[key]}
        className="p-3 h-[500px] w-[80vw] object-cover rounded-3xl"
        alt={`Award ${key}`}
      />
    </div>
  ));

  return (
    <div className="cursor-grab active:cursor-grabbing select-none">
      <p className="font-bold text-2xl lg:text-5xl flex justify-center items-center text-black/[0.8]">
        GALLERY
      </p>

      <Slider {...settings} className="overflow-hidden sm:overflow-hidden">
        {imageElements}
      </Slider>
    </div>
  );
}

export default Carousel;
