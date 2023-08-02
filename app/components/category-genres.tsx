"use client"
import React, { useRef, useState } from "react";
import Image from "next/image"
import images from "./images";

import "../css/style.css";

type Game = {
    
    id: number,
    background_image: string,
    rating: number,
    name: string,
    price: "59.99$",

}


let getGames = async (): Promise<Game[]> => {
    const res = await fetch('https://api.rawg.io/api/genres?key=748130b286da4a95b63680dc5a71df67&page_size=9',
    { mode:'no-cors' }
    )
    if (!res.ok) {
        throw new Error("Error fetching")
    }
    const data = await res.json()
    data.results.forEach((genre: { name: string; background_image: string; }) => {
        if (genre.name == "Action") {
            genre.background_image = images[0].src;
        }
        else if (genre.name == "Indie") {
            genre.background_image = images[1].src;
        }
        else if (genre.name == "Adventure") {
            genre.background_image = images[2].src;
        }
        else if (genre.name == "RPG") {
            genre.background_image = images[3].src;
        }
        else if (genre.name == "Strategy") {
            genre.background_image = images[4].src;
        }
        else if (genre.name == "Shooter") {
            genre.background_image = images[5].src;
        }
        else if (genre.name == "Casual") {
            genre.background_image = images[6].src;
        }
        else if (genre.name == "Simulation") {
            genre.background_image = images[7].src;
        }
        else if (genre.name == "Puzzle") {
            genre.background_image = images[8].src;
        }

    });
    return data.results
}





import Link from "next/link";

export default async function SwiperGenres() {
    const games = await getGames()
    return (
      <div className="genres-box">
        <span className="genres-tite-container">
          <span className="genres-tite">Genres</span>
        </span>

        <div className="mySwiper swiper-slides-continer-genres">
          {games.map((game) => (
            <div className="swiper-slide-mine-genres" key={game.id}>
              <Image
                src={game.background_image}
                fill
                className="img-in-genres loading-mine"
                key={game.id}
                alt={""}
              />
              <Link href={"/"} className="swiper-genres-info-hover">
                <span className="game-name-genres">{game.name}</span>
              </Link>
            </div>
          ))}

          <div className="swiper-slide-mine-genres">
            <Link href={"/"} className="swiper-genres-info-hover">
              <span className="game-name-genres">View All</span>
            </Link>
          </div>
        </div>
      </div>
    );
}
