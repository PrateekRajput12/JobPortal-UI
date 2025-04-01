import { Bookmark } from 'lucide-react'
import React from 'react'
import { Button } from './ui/button'
import { Avatar, AvatarImage } from '@radix-ui/react-avatar'
import { Badge } from './ui/badge'
import { useNavigate } from 'react-router'
const Job = ({ job }) => {
    const { title, description, company, requirements, position, salary, jobType, experienceLevel, location, applications, createdAt } = job
    const navigate = useNavigate()
    const jobId = job._id
    console.log(jobId);

    const daysAgo = (mongodbTime) => {
        const createdAt = new Date(mongodbTime)
        const currentTime = new Date()
        const timeDifference = currentTime - createdAt
        return Math.floor(timeDifference / (1000 * 24 * 60 * 60))
    }
    return (
        <div className='p-5 rounded-md shadow-xl  bg-white border max-w-[350px] border-gray-100'>
            <div className='flex items-center justify-between'>
                <p className='text-sm text-gray-500'>{daysAgo(createdAt) === 0 ? "Today" : `${daysAgo(createdAt)} days ago`}</p>
                <Button variant="outline" className='rounded-full' size='icon'><Bookmark></Bookmark></Button>

            </div>
            <div className='flex items-center gap-2 my-2'>
                <Button variant='outline ' className='' size='icon'>
                    <Avatar>
                        <AvatarImage className='rounded-full' src={job?.company?.logo} alt='logo' />
                    </Avatar>
                </Button>
                <div>
                    <h1 className='font-medium text-lg'>{company?.name}</h1>
                    <p className='text-sm text-gray-500'>{location}</p>
                </div>
            </div>
            <div className='w-fit  '>
                <h1 className='font-bold text-lg my-2'>{title}</h1>
                <p className='text-sm text-gray-600 overflow-hidden'>{description}</p>
            </div>
            <div className='flex items-center gap-2 mt-4'>
                <Badge variant="ghost" className='text-blue-700 font-bold' >{position}</Badge>
                <Badge variant="ghost" className='text-[#f83002] font-bold' >{jobType}</Badge>
                <Badge variant="ghost" className='text-[#7209b7] font-bold' >{salary}LPA</Badge>

            </div>
            <div className='flex items-center gap-3 mt-4'>
                <Button variant='outline' onClick={() => navigate(`/description/${jobId}`)}>
                    Details
                </Button>
                <Button className='bg-[#7209b7] text-white font-bold' variant='outline'>Save For Letter</Button>
            </div>
        </div>
    )
}

export default Job