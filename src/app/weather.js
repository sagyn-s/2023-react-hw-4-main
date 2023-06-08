"use client";

import { useState } from "react";
import Header from "./header"

const api = {
    key: "792acdf1b7614d2757a29542dc7059d3",
    base: "https://api.openweathermap.org/data/2.5/",
};

export default function Weather() {

    const [search, setSearch] = useState("");
    const [weather, setWeather] = useState({});

    const searchPressed = () => {
        fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
            console.log(result);
            setWeather(result);
        })
    }

    return <main>
        <Header />
        <div>
            <header>
                <h1 class="text-3xl font-bold flex items-center justify-center">Weather app</h1>
                <div>
                    <input 
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        type="text" 
                        placeholder="Enter city/town..."
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"onClick={searchPressed}>Search</button>
                </div>
                {typeof weather.main != "undefined" ? (
                    <div>
                        <p>{weather.name}</p>
                        <p>{weather.main.temp}°C</p>
                        <p>{weather.weather[0].main}</p>
                        <p>({weather.weather[0].description})</p>
                    </div>
                ) : (
                    ""
                )
                }
            </header>
        </div>
    </main>;
}
