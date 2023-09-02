import React from "react";
import nikeimg from "../../images/nike.png";
import nikeimg1 from "../../images/nike1.png";
import nikeimg2 from "../../images/nike2.png";
import shoe from "../../images/shoe.png";
import shoe1 from "../../images/shoe1.png";
import shoe2 from "../../images/shoe2.png";
import shoe3 from "../../images/shoe3.png";

import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const SwiperShoes = () => {
  const shoes = [
    { name: "Nike Air Force", price: "299.999 $", image: shoe },
    { name: "White Sweter", price: "399.999 $", image: shoe1 },
    { name: "Androind Smartwatch", price: "599.999 $", image: shoe2 },
    { name: "Apple Airpods", price: "799.999 $", image: shoe3 },
    { name: "Female Shirt", price: "199.999 $", image: shoe },
    { name: "White Sweter", price: "399.999 $", image: shoe1 },
    { name: "Androind Smartwatch", price: "599.999 $", image: shoe3 },
  ];
  return (
    <div className="h-full w-full">
      <div
        className="w-full"
        style={{ height: 400, backgroundColor: "#ffffff00" }}
      >
        <Swiper
          navigation={true}
          slidesPerView={4}
          spaceBetween={50}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper "
          style={{ height: "100%", width: "90%", textAlign: "center" }}
        >
          {shoes.map((shoe) => (
            <SwiperSlide>
              <div className="swiper-shoes-slides bg1-swiper-shoes h-5/6 w-full px-4">
                <img
                  src={shoe.image}
                  className="mx-auto mt-3 rounded"
                  style={{ width: "100%", height: 200 }}
                />
                <div className="mb-auto mt-3 flex w-full flex-row text-start text-lg text-gray-700 ">
                  <div>{shoe.name}</div>
                  <div className="ml-auto">{shoe.price}</div>
                </div>
                <button className="btn-shadow-shoes mx-auto mb-4 mt-auto w-full rounded bg-cyan-400 py-2 text-slate-50">
                  Add To Basket
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SwiperShoes;
