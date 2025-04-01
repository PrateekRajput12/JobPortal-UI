import React, { useEffect } from 'react'
import NavBar from './shared/NavBar'
import HeroSection from './HeroSection'
import CategoryCarousel from './CategoryCarousel'
import LatestJob from './LatestJob'
import Footer from './Footer'
import useGetAllJob from '../hooks/useGetAllJob'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'

const Home = () => {
    useGetAllJob()

    const { user } = useSelector(store => store.auth)
    const navigate = useNavigate()
    useEffect(() => {
        if (user.role === "recruiter") {
            navigate("/admin/companies")
        }

    }, [])

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