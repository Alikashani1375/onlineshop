import React from "react";
import nikeimg from "../../images/nike.png";
import nikeimg1 from "../../images/nike1.png";
import nikeimg2 from "../../images/nike2.png";
import tshirt from "../../images/tshirt.png";
import tshirt1 from "../../images/tshirt1.png";
import tshirt2 from "../../images/tshirt2.png";
import tshirt3 from "../../images/tshirt3.png";

import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const SwiperTshirts = () => {
  const tshirts = [
    { name: "Blue Tshirt", price: "299.999 $", image: tshirt },
    { name: "Black Tshirt ", price: "399.999 $", image: tshirt1 },
    { name: "Gray Tshirt", price: "599.999 $", image: tshirt2 },
    { name: "Orange Tshirt", price: "799.999 $", image: tshirt3 },
    { name: "Blue Tshirt", price: "199.999 $", image: tshirt },
    { name: "Black Tshirt", price: "399.999 $", image: tshirt1 },
    { name: "Gray Yshirt", price: "599.999 $", image: tshirt3 },
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
          {tshirts.map((tshirt) => (
            <SwiperSlide>
              <div className="swiper-shoes-slides bg2-swiper-shoes h-5/6 w-full px-4">
                <img
                  src={tshirt.image}
                  className="mx-auto mt-3 rounded"
                  style={{ width: "100%", height: 200 }}
                />
                <div className="mb-auto mt-3 flex w-full flex-row text-start text-lg text-gray-700 ">
                  <div>{tshirt.name}</div>
                  <div className="ml-auto">{tshirt.price}</div>
                </div>
                <button className="btn-shadow-tshirts mx-auto mb-4 mt-auto w-full rounded bg-amber-300 py-2 text-slate-50">
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

export default SwiperTshirts;
