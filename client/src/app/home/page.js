import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import VideoSection from '@/components/home/VideoSection';
import ProductsSection from '@/components/home/ProductsSection';
import ClientsSection from '@/components/home/ClientsSection';
import AboutSection from '@/components/home/AboutSection';
import CTASection from '@/components/home/CTASection';

const HomePage = () => {
    return (
        <div className="min-h-screen overflow-x-hidden">
            <HeroSection />
           
            <ProductsSection />
             <ClientsSection />
            <VideoSection />
            
            <AboutSection />
            {/* <CTASection /> */}
        </div>
    );
};

export default HomePage;
