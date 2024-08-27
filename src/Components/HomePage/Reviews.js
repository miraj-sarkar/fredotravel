import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Container } from "react-bootstrap";
import { FaQuoteLeft } from "react-icons/fa";
import { clientReviews } from "@/utils/data";
import { LiaStarSolid } from "react-icons/lia";
const Reviews = () => {
  return (
    <div style={{ margin: "200px 0px" }} data-aos="fade-left">
      <Container>
        <div style={{ margin: "80px 0px", textAlign: "center" }}>
          <h2 style={{ marginBottom: "30px" }}>What Our Clients Say</h2>
          <p style={{ color: "gray" }}>
            Planning for a trip? We will organize your trip with the best places
            and within <br /> best budget!
          </p>
        </div>
        <div>
          <Swiper
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {clientReviews.map((clientReview, idx) => (
              <SwiperSlide>
                <div style={{ textAlign: "center" }}>
                  <img
                    src={clientReview.image}
                    alt="clientImage"
                    style={{ width: "25%", height: "25%", borderRadius: "50%" }}
                  />
                  <h4>{clientReview.clientName}</h4>
                  <p style={{ color: "gray" }}>{clientReview.role}</p> <br />
                  <FaQuoteLeft style={{ color: "red" }} />
                  <p style={{ color: "gray" }}>
                    {clientReview.description}
                  </p>{" "}
                  <br />
                  <LiaStarSolid
                    style={{ color: "#FCCB4E", fontSize: "24px" }}
                  />{" "}
                  <LiaStarSolid
                    style={{ color: "#FCCB4E", fontSize: "24px" }}
                  />
                  <LiaStarSolid
                    style={{ color: "#FCCB4E", fontSize: "24px" }}
                  />
                  <LiaStarSolid
                    style={{ color: "#FCCB4E", fontSize: "24px" }}
                  />
                  <LiaStarSolid
                    style={{ color: "#FCCB4E", fontSize: "24px" }}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </div>
  );
};

export default Reviews;
