import React from "react";
import nikeimg from "../../images/nike.png";
import nikeimg1 from "../../images/nike1.png";
import nikeimg2 from "../../images/nike2.png";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
const SlideshowProducts = () => {
  return (
    <div className="h-full w-full">
      <div className="w-full" style={{ height: 600 }}>
        <Swiper
          pagination={{
            type: "progressbar",
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide className="w-full">
            <div
              className="w-full"
              style={{
                height: 600,
                backgroundImage: `url(${nikeimg})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="title-swiper1">
                Best Products With Best Price Is Here!
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="w-full">
            <div
              className="w-full"
              style={{
                height: 600,
                backgroundImage: `url(${nikeimg1})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="title-swiper2">
                Nike
                <br />
                Best Quality
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="w-full">
            <div
              className="w-full"
              style={{
                height: 600,
                backgroundImage: `url(${nikeimg2})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="title-swiper3">
                Amazing Shoes
                <br />
                BEST FOR YOUR STYLE
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default SlideshowProducts;
