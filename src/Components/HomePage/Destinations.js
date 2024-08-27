import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Container } from "react-bootstrap";
import { destinations } from "@/utils/data";
import "./style.css";

const Destinations = () => {
  return (
    <div style={{ margin: "200px 0px" }} data-aos="fade-right">
      <Container>
        <div style={{ margin: "80px 0px", textAlign: "center" }}>
          <h2 style={{ marginBottom: "30px" }}>Top Destinations</h2>
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
            {destinations.map((destination, idx) => (
              <SwiperSlide key={idx}>
                <img
                  className="zoom-out"
                  src={destination.image}
                  alt={destination.location}
                  style={{ width: "100%" }}
                />
                <div style={{ textAlign: "center" }}>
                  <h6 style={{ marginTop: "14px" }}>{destination.location}</h6>
                  <p style={{ color: "gray" }}>{destination.hotels} Hotels</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </div>
  );
};

export default Destinations;
