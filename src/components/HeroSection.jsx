import React from 'react'
import { Button } from './ui/button'
import { Search } from 'lucide-react'

const HeroSection = () => {
    return (
        <div className='text-center'>
            <div className='flex flex-col gap-5'>
                <h2 className='mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#f83002] font-medium'>No.1 Job Hunt Website</h2>
                <h1 className='text-5xl font-bold'>Search, Apply & <br /> Get Your <span className='text-[#6a38c2]'>Dream Jobs</span></h1>
                <p>orem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            <div className='flex w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto'>
                <input
                    type='text'
                    placeholder='Find Your Dream Job'
                    className='outline-none border-none w-full'
                />
                <Button className='rounded-r-full bg-[#6a38c2]'>
                    <Search className='h-5 w-5'></Search>
                </Button>
            </div>
        </div>
    )
}

export default HeroSection