import React from 'react'
import { Badge } from './ui/badge'
const LatestJobCard = () => {
    return (
        <div className='p-5 rounded-md shadow-xl bg-white border border-gray-100 cursor-pointer'>
            <div>
                <h1 className='font-medium text-lg'>Company Name</h1>
                <p className='text-sm text-gray-500'>India</p>
            </div>
            <div>
                <h3 className='text-lg my-2 font-bold'>Job Title</h3>
                <p className='text-sm text-gray-600'>lorem sorem korem morem horem</p>
            </div>

            <div className='flex items-center gap-2 mt-4'>
                <Badge variant="ghost" className='text-blue-700 font-bold' >Positions</Badge>
                <Badge variant="ghost" className='text-[#f83002] font-bold' >Part Time</Badge>
                <Badge variant="ghost" className='text-[#7209b7] font-bold' >24LPA</Badge>


            </div>
        </div>
    )
}

export default LatestJobCard