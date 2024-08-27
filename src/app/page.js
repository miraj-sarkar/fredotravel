"use client";

import Banner from "@/Components/HomePage/Banner";
import Blogs from "@/Components/HomePage/Blogs";
import Destinations from "@/Components/HomePage/Destinations";
import FAQ from "@/Components/HomePage/FAQ";
import Footer from "@/Components/Web-layout/Footer";
import Header from "@/Components/Web-layout/Header";
import Reviews from "@/Components/HomePage/Reviews";
import TourPackages from "@/Components/HomePage/TourPackages";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { ThemeProvider } from "@/context/ThemeContext";
import "../context/ThemeContext.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  return (
    <ThemeProvider>
      <Header />
      <Banner />
      <Destinations />
      <TourPackages />
      <Reviews />
      <FAQ />
      <Blogs />
      <Footer />
    </ThemeProvider>
  );
}
