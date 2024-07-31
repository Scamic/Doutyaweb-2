import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import NavBar from "./components/Nav";
import HomePage from "./components/HomePage";
import AboutUs from "./components/about";
import ProductSection from './components/products'; 

const App = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: false, 
        });
    }, []);

    return (
        <div className="App">
            <NavBar />
            <HomePage />
            <AboutUs />
            <ProductSection />
        </div>
    );
};

export default App;
