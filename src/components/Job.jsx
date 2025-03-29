import { Bookmark } from 'lucide-react'
import React from 'react'
import { Button } from './ui/button'
import { Avatar, AvatarImage } from '@radix-ui/react-avatar'
import { Badge } from './ui/badge'
import { useNavigate } from 'react-router'
const Job = () => {
    const navigate = useNavigate()
    const jobId = "kjsnkns939939"
    return (
        <div className='p-5 rounded-md shadow-xl  bg-white border max-w-[350px] border-gray-100'>
            <div className='flex items-center justify-between'>
                <p className='text-sm text-gray-500'>2 days ago</p>
                <Button variant="outline" className='rounded-full' size='icon'><Bookmark></Bookmark></Button>

            </div>
            <div className='flex items-center gap-2 my-2'>
                <Button variant='outline ' className='' size='icon'>
                    <Avatar>
                        <AvatarImage className='rounded-full' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmaPiU5rEd9zpNUMgWe8X8qm34BzbjW92-wg&s' alt='logo' />
                    </Avatar>
                </Button>
                <div>
                    <h1 className='font-medium text-lg'>Company Name</h1>
                    <p className='text-sm text-gray-500'>India</p>
                </div>
            </div>
            <div className='w-fit  '>
                <h1 className='font-bold text-lg my-2'>Title</h1>
                <p className='text-sm text-gray-600 overflow-hidden'>Descriptiof,d,f,d,f,d,,fdddddddddfn</p>
            </div>
            <div className='flex items-center gap-2 mt-4'>
                <Badge variant="ghost" className='text-blue-700 font-bold' >Positions</Badge>
                <Badge variant="ghost" className='text-[#f83002] font-bold' >Part Time</Badge>
                <Badge variant="ghost" className='text-[#7209b7] font-bold' >24LPA</Badge>

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