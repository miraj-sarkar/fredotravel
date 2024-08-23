import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Container } from "react-bootstrap";
import { FaQuoteLeft } from "react-icons/fa";
const Reviews = () => {
  return (
    <Container>
      <div style={{ margin: "80px 0px", textAlign: "center" }}>
        <h1 style={{ marginBottom: "30px" }}>What Our Clients Say</h1>
        <p style={{ color: "gray" }}>
          Planning for a trip? We will organize your trip with the best places
          and within <br /> best budget!
        </p>
      </div>
      <div>
        <Swiper
          spaceBetween={50}
          slidesPerView={4}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <div style={{ textAlign: "center" }}>
              <img
                src="2.e083e5af6b98325ac9ed.jpg"
                alt=""
                style={{ width: "30%", height: "30%", borderRadius: "50%" }}
              />
              <h4>Miraj Sarkar</h4>
              <p style={{ color: "gray" }}>CEO</p> <br />
              <FaQuoteLeft />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Possimus at ad quas fugit debitis pariatur aspernatur explicabo,
                odit molestiae dignissimos?
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div style={{ textAlign: "center" }}>
              <img
                src="2.e083e5af6b98325ac9ed.jpg"
                alt=""
                style={{ width: "100%" }}
              />
              <h4>Miraj Sarkar</h4>
              <p style={{ color: "gray" }}>CEO</p> <br />
              <FaQuoteLeft />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Possimus at ad quas fugit debitis pariatur aspernatur explicabo,
                odit molestiae dignissimos?
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div style={{ textAlign: "center" }}>
              <img
                src="2.e083e5af6b98325ac9ed.jpg"
                alt=""
                style={{ width: "100%" }}
              />
              <h4>Miraj Sarkar</h4>
              <p style={{ color: "gray" }}>CEO</p> <br />
              <FaQuoteLeft />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Possimus at ad quas fugit debitis pariatur aspernatur explicabo,
                odit molestiae dignissimos?
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div style={{ textAlign: "center" }}>
              <img
                src="2.e083e5af6b98325ac9ed.jpg"
                alt=""
                style={{ width: "100%" }}
              />
              <h4>Miraj Sarkar</h4>
              <p style={{ color: "gray" }}>CEO</p> <br />
              <FaQuoteLeft />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Possimus at ad quas fugit debitis pariatur aspernatur explicabo,
                odit molestiae dignissimos?
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div style={{ textAlign: "center" }}>
              <img
                src="2.e083e5af6b98325ac9ed.jpg"
                alt=""
                style={{ width: "100%" }}
              />
              <h4>Miraj Sarkar</h4>
              <p style={{ color: "gray" }}>CEO</p> <br />
              <FaQuoteLeft />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Possimus at ad quas fugit debitis pariatur aspernatur explicabo,
                odit molestiae dignissimos?
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </Container>
  );
};

export default Reviews;
