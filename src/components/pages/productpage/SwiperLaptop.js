import React from "react";
import nikeimg from "../../images/nike.png";
import nikeimg1 from "../../images/nike1.png";
import nikeimg2 from "../../images/nike2.png";
import laptop from "../../images/laptop.png";
import laptop1 from "../../images/laptop1.png";
import laptop2 from "../../images/laptop2.png";
import laptop3 from "../../images/laptop3.png";

import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const SwiperLaptop = () => {
  const laptops = [
    { name: "Lenovo ipg3", price: "999.999 $", image: laptop },
    { name: "Acer z4", price: "840.999 $", image: laptop1 },
    { name: "Asus s5", price: "731.999 $", image: laptop2 },
    { name: "Lenovo dragon", price: "1509.999 $", image: laptop3 },
    { name: "Lenovo ipg3", price: "199.999 $", image: laptop },
    { name: "Acer z4", price: "399.999 $", image: laptop1 },
    { name: "Asus s5", price: "599.999 $", image: laptop2 },
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
          {laptops.map((laptop) => (
            <SwiperSlide>
              <div className="swiper-shoes-slides bg3-swiper-shoes h-5/6 w-full px-4">
                <img
                  src={laptop.image}
                  className="mx-auto mt-3 rounded"
                  style={{ width: "100%", height: 200 }}
                />
                <div className="mb-auto mt-3 flex w-full flex-row text-start text-lg text-gray-700 ">
                  <div>{laptop.name}</div>
                  <div className="ml-auto">{laptop.price}</div>
                </div>
                <button className="btn-shadow-laptops mx-auto mb-4 mt-auto w-full rounded bg-gray-400 py-2 text-slate-50">
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

export default SwiperLaptop;
