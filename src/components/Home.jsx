import React from 'react'
import NavBar from './shared/NavBar'
import HeroSection from './HeroSection'
import CategoryCarousel from './CategoryCarousel'
import LatestJob from './LatestJob'
import Footer from './Footer'

const Home = () => {
    return (
        <div>
            <NavBar />
            <HeroSection />
            <CategoryCarousel />
            <LatestJob />
            <Footer />
        </div>
    )
}

export default Home