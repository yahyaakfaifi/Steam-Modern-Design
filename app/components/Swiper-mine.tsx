"use client"
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { FaCartPlus } from "react-icons/fa6";
import { FaApple } from "react-icons/fa6";
import { FaMicrosoft } from "react-icons/fa6";
import "../css/style.css";
import img_swiper from '../assets/imgs/ER.png'




const swiper_imgs = [
    {
        BuyState: "Pre Order",
        name: "ELDEN RING",
        Dev: "FromSoftware Inc., Bandai Namco Entertainment",
        AddCart: FaCartPlus,
        Platform1: FaApple,
        Platform2: FaMicrosoft,
        
    },

    {
        BuyState: "Pre Order",
        name: "ELDEN RING",
        Dev: "FromSoftware Inc., Bandai Namco Entertainment",
        AddCart: FaCartPlus,
        Platform1: FaApple,
        Platform2: FaMicrosoft,
    },

    {
        BuyState: "Pre Order",
        name: "ELDEN RING",
        Dev: "FromSoftware Inc., Bandai Namco Entertainment",
        AddCart: FaCartPlus,
        Platform1: FaApple,
        Platform2: FaMicrosoft,
    },

    {
        BuyState: "Pre Order",
        name: "ELDEN RING",
        Dev: "FromSoftware Inc., Bandai Namco Entertainment",
        AddCart: FaCartPlus,
        Platform1: FaApple,
        Platform2: FaMicrosoft,

    },

]


import { Autoplay, Pagination, Navigation } from "swiper";
import Link from "next/link";

export default function Swiperf() {
    return (
        <>
            <Swiper
                spaceBetween={80}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper style-swiper-slides-hero"
            >

                {swiper_imgs.map(({ BuyState, name, Dev, AddCart, Platform1, Platform2 }) => (

                    <SwiperSlide className="swiper-slide-mine-hero" key={name}>
                        <span className="swiper-slide-mine-hero-bg"></span>

                        <Link href={"/"} className="swiper-content-container" >
                            
                            <span className="order-state" >{BuyState}</span>
                            <div className="swiper-name-dev">
                                <span className="name">{name}</span>
                                <span className="dev">{Dev}</span>
                            </div>

                            <div className="price-btn-and-platforms">
                                <div className="add-to-cart-btn">
                                    <span className="price">59.99$</span>
                                    <span className="cart-icon"><AddCart /></span>
                                </div>

                                <div className="platforms">
                                        <span className="platform1"><Platform1/></span>
                                        <span className="platform2"><Platform2 /></span>
                                </div>
                            </div>

                            <img className='photo' src={img_swiper.src} alt="" />


                        </Link>

                </SwiperSlide>
                ))}

            </Swiper>
        </>
    );
}
