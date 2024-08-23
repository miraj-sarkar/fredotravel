import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Container } from "react-bootstrap";

const Destinations = () => {
  return (
    <div style={{ margin: "100px 0px" }}>
      <Container>
        <div style={{ margin: "80px 0px", textAlign: "center" }}>
          <h1 style={{ marginBottom: "30px" }}>Top Destinations</h1>
          <p style={{ color: "gray" }}>
            Planning for a trip? We will organize your trip with the best places
            and within <br /> best budget!
          </p>
        </div>
        <div>
          <Swiper
            spaceBetween={50}
            slidesPerView={5}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <img
                src="2.e083e5af6b98325ac9ed.jpg"
                alt=""
                style={{ width: "100%" }}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="3.597c87bf0632b9e644e2.jpg"
                alt=""
                style={{ width: "100%" }}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="3.86227d75d7bec8381222.jpg"
                alt=""
                style={{ width: "100%" }}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="4.738a1d5ee8bdcfd7b945.jpg"
                alt=""
                style={{ width: "100%" }}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/7.5cfd54c6101a50fd4a60.jpg"
                alt=""
                style={{ width: "100%" }}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="8.5792393c610e8d6c2236.jpg"
                alt=""
                style={{ width: "100%" }}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </Container>
    </div>
  );
};

export default Destinations;
