import React from 'react'
import NavBar from './shared/NavBar'
import HeroSection from './HeroSection'
import CategoryCarousel from './CategoryCarousel'
import LatestJob from './LatestJob'
import Footer from './Footer'
import useGetAllJob from '../hooks/useGetAllJob'

const Home = () => {
    useGetAllJob()
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