import React, { useState } from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'
import { Button } from './ui/button'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { setSearchedQuery } from '../redux/jobSlice'
const category = [
    "Frontend Devloper",
    "Backend Devloper",
    "Data Science",
    "Machine Learning",
    "Data Analyst",
    "Graphic Designer",
    "Full Stack Devloper"
]

const CategoryCarousel = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const searchJobHandler = async (query) => {
        dispatch(setSearchedQuery(query))
        navigate("/browse")
    }
    return (
        <div>
            <Carousel className='w-full max-w-xl mx-auto my-20'>
                <CarouselContent>
                    {
                        category?.map((cat, index) => (
                            <CarouselItem key={index} className='md:basis-1/2 lg:basis-1/3'>
                                <Button onClick={() => searchJobHandler(cat)} className='rounded-full' variant='outline'>{cat}</Button>
                            </CarouselItem>
                        ))
                    }

                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>



        </div>
    )
}

export default CategoryCarousel