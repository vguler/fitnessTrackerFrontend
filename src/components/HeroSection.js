import React from 'react';
import './HeroSection.css';
import fitnessHeroImage from './ryan-de-hamer-WIPIAJW2-P8-unsplash.jpg';

function HeroSection() {
    return(
        <section className="hero">
            <div className="hero-content">
                <div className="hero-text">
                    <h1>Your own Fitness Tracker</h1>
                    <p>Track your workouts with this easy to use app!</p>
                    <a href="#workout-form" className="cta-button">Try it now</a>
                </div>
                <div className='hero-image'>
                    <img src={fitnessHeroImage} alt="Fitness"/>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;