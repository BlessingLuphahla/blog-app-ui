import "./header.css";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import image1 from "../../images/hero-main-pic.jpg";
import image2 from "../../images/IMG_1951-scaled.jpeg";
import image3 from "../../images/IMG_5495-scaled.jpeg";

export default function Header() {
  return (
    <div className="header">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: true }}
        loop={true}
        className="headerSwiper"
      >
        <SwiperSlide>
          <img className="headerImage" src={image1} alt="Main hero image of the blog" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="headerImage" src={image2} alt="Scenic travel destination 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="headerImage" src={image3} alt="Scenic travel destination 2" />
        </SwiperSlide>
      </Swiper>

      <div className="headerTitle">
        <h1>Welcome To</h1>
        <h2>It's Travels Blog</h2>
        <Link to="/blog">
          <button className="blogButton" aria-label="Navigate to the blog page">My Blog</button>
        </Link>
      </div>
    </div>
  );
}