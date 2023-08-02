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



let getGames = async (): Promise<Game[]> => {
    const res = await fetch('https://api.rawg.io/api/games?key=6e1cfdbe48d049fb8d90e19129cb9912&dates=2022-01-01,2023-07-01&page_size=6',
    { mode:'no-cors' }
    )
    if (!res.ok) {
        throw new Error("Error fetching")
    }
    const data = await res.json()
    return data.results
}


import { Navigation } from "swiper";
import Link from "next/link";
import { FaCartPlus, FaStar, FaChevronDown } from "react-icons/fa6";

export default async function SwiperPopular() {
    const games = await getGames()
    return (
      <div className="populer-box">
        <span className="populer-tite-container">
          <span className="populer-tite">POPULER</span>
          <span className="populer-view-all-container">
            <span className="populer-view">View All</span>
            <span className="arrow-view-all">
              <FaChevronDown />
            </span>
          </span>
        </span>

        <Swiper
          pagination={{
            type: "progressbar",
          }}
          slidesPerView={4}
          spaceBetween={30}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper swiper-slides-continer-populer"
        >
          {games.map((game) => (
            <SwiperSlide className="swiper-slide-mine-populer" key={game.id}>
              <Image
                src={game.background_image}
                fill
                className="img-in-populer loading-mine"
                alt={game.name}
              />
              <Link href={"/"} className="swiper-populer-info-hover">
                <span className="buy-tag">Pre Order</span>
                <span className="game-name-populer">{game.name}</span>
                <span className="game-rate-populer">
                  <FaStar />
                  {game.rating}
                </span>
                <span className="game-price-populer-box">
                  <span className="game-price-populer">59.99$</span>
                  <span className="cart-icon-populer">
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
