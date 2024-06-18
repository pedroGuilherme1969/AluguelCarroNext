"use client";

import Image from "next/image";
import CustomButton from "./CustomButton";

const Hero = () => {
  const handleScroll = () => {

  }

  return (
    <div className = "hero">
        <div className = "flex-1 pt-36 padding-x">
            <h1 className="hero__title">
              Procure, reserve e alugue um carro — Rápido e fácil!
            </h1>

            <p className="hero__subtitle">
                Simplifique sua experiência de aluguel de carro com nosso processo de reserva.
            </p>

            <CustomButton 
              title="Explore cars"  
              containerStyles="bg-primary-blue text-white rounded-full mt-10"
              handleClick={handleScroll}  
            />

        </div>
        <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
        </div>

        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero