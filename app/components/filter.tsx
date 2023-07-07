
import React, { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "../css/style.css";
import { FaMagnifyingGlass } from "react-icons/fa6";

export default function Filter() {
    return (

        <div className="filter-box">

            <div className="buttons-in-filter">
                <button className="radio-mine radio-mine-custom" type="button">All Games</button>
                <button className="radio-mine" type="button">New</button>
                <button className="radio-mine" type="button">Action</button>
                <button className="radio-mine" type="button">JRPG</button>
                <button className="radio-mine" type="button">Arcade</button>

                
            </div>
            <div className="search-in-filter">
                <div className="search-filter">
                    <FaMagnifyingGlass className="search-icon-in-filter" />
                    <input className="search-field-in-filter" type="search" placeholder="Game, Category, Developer" name="" id="" />
                </div>
            </div>

        </div>

    );
}
