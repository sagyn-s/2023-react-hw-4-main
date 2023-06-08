"use client";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Weather from './weather'
import Header from './header'
import Home from './home'

export default function Page() {
    return <main>
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path="/" element={<Home />} />
                <Route path="/weather" element={<Weather />} />
            </Routes>
        </BrowserRouter>
    </main>;
}
