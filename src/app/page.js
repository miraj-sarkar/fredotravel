"use client";
import Banner from "@/Components/Web-layout/Banner";
import Blogs from "@/Components/Web-layout/Blogs";
import Destinations from "@/Components/Web-layout/Destinations";
import FAQ from "@/Components/Web-layout/FAQ";
import Footer from "@/Components/Web-layout/Footer";
import Header from "@/Components/Web-layout/Header";
import Reviews from "@/Components/Web-layout/Reviews";
import TourPackages from "@/Components/Web-layout/TourPackages";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Destinations />
      <TourPackages />
      <Reviews />
      <FAQ />
      <Blogs />
      <Footer />
    </>
  );
}
