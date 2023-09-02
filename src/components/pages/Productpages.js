import React from "react";
import nikeimg from "../images/nike.png";
import nikeimg1 from "../images/nike1.png";
import nikeimg2 from "../images/nike2.png";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import SlideshowProducts from "./productpage/SlideshowProducts";
import SwiperShoes from "./productpage/SwiperShoes";
import SwiperTshirts from "./productpage/SwiperTshirts";
import SwiperLaptop from "./productpage/SwiperLaptop";
import Footer from "../Footer";
import Copyright from "../Copyright";
const Productpages = () => {
  return (
    <div
      id="products-container"
      style={{ overflow: "hidden" }}
      className="mt-3 flex w-full flex-col items-center justify-center"
    >
      <SlideshowProducts />

      <div className="py-5 font-serif text-4xl font-semibold text-teal-500">
        Shoes
      </div>
      <SwiperShoes />
      <div className="py-5 font-serif text-4xl font-semibold text-teal-500">
        LapTops
      </div>
      <SwiperLaptop />
      <div className="py-5 font-serif text-4xl font-semibold text-teal-500">
        T-Shirts
      </div>
      <SwiperTshirts />
    </div>
  );
};

export default Productpages;
