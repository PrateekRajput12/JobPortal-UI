import React from 'react'
import { Badge } from './ui/badge'
import { Description } from '@radix-ui/react-dialog';
const LatestJobCard = ({ job }) => {
    console.log("here", job);

    const { title, company, description, requirements, salary, experienceLevel, location, jobType, position, applications } = job
    return (
        <div className='p-5 rounded-md shadow-xl bg-white border border-gray-100 cursor-pointer'>
            <div>
                <h1 className='font-medium text-lg'>{company.name}</h1>
                <p className='text-sm text-gray-500'>{location}</p>
            </div>
            <div>
                <h3 className='text-lg my-2 font-bold'>{title}</h3>
                <p className='text-sm text-gray-600'>{description}</p>
            </div>

            <div className='flex items-center gap-2 mt-4'>
                <Badge variant="ghost" className='text-blue-700 font-bold' >{position}</Badge>
                <Badge variant="ghost" className='text-[#f83002] font-bold' >{jobType}</Badge>
                <Badge variant="ghost" className='text-[#7209b7] font-bold' >{salary}LPA</Badge>


            </div>
        </div>
    )
}

export default LatestJobCard