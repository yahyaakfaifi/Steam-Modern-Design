"use client"
import React, { useRef, useState } from "react";
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../css/style.css";



type Game = {
    id: number,
    background_image: string,
    rating: number,
    name: string,
    price: "59.99$",
    
}


const getGames = async (): Promise<Game[]> => {
    const res = await fetch(
      "https://api.rawg.io/api/games?key=76f242a57aca4e81a9339b3c663b05ee&dates=2023-01-01,2023-07-01&page_size=6"
    );
    if (!res.ok) {
        throw new Error(" stfu")
    }
    const data = await res.json()
    return data.results
}




import { Navigation } from "swiper";
import Link from "next/link";
import { FaCartPlus, FaChevronDown } from "react-icons/fa6";

export default async function SwiperTrending() {
    const games = await getGames()
    return (
      <div className="trending-box">
        <span className="trending-tite-container">
          <span className="trending-tite">TRENDING</span>
          <span className="trending-view-all-container">
            <span className="trending-view">View All</span>
            <span className="arrow-view-all">
              <FaChevronDown />
            </span>
          </span>
        </span>

        <Swiper
          pagination={{
            type: "progressbar",
          }}
          slidesPerView={3}
          spaceBetween={30}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper swiper-slides-continer-trending"
        >
          {games.map((game) => (
            <SwiperSlide className="swiper-slide-mine-trending" key={game.id}>
              <Link href={"/"} className="swiper-trending-info-hover">
                <div className="img-box-trending">
                  <span className="img-box-trending-hover"></span>
                  <Image
                    src={game.background_image}
                    fill
                    className="img-in-trending loading-mine"
                    alt={game.name}
                  />
                </div>
                <span className="game-name-trending">{game.name}</span>
                <span className="game-price-trending-box">
                  <span className="game-price-trending">59.99$</span>
                  <span className="cart-icon-trending">
                    <FaCartPlus />
                  </span>
                </span>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
}
