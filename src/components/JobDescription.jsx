import React from 'react'
import { Badge } from './ui/badge'
import { Button } from './ui/button'

const JobDescription = () => {
    const isApplied = true
    return (
        <div className='max-w-7xl mx-auto my-10'>
            <div className='flex items-center justify-between'>
                <div>
                    <h1 className='font-bold text-xl'>Title</h1>
                    <div className='flex items-center gap-2 mt-4'>
                        <Badge variant="ghost" className='text-blue-700 font-bold' >Positions</Badge>
                        <Badge variant="ghost" className='text-[#f83002] font-bold' >Part Time</Badge>
                        <Badge variant="ghost" className='text-[#7209b7] font-bold' >24LPA</Badge>

                    </div>
                </div>
                <Button
                    disabled={isApplied}
                    className={`rounded-lg ${isApplied ? 'bg-gray-600 cursor-not-allowed' : "bg-[#7209b7] hover:bg-[#5f32ad]"}`} >{isApplied ? "Already Applied" : 'Apply Now'}
                </Button>
            </div>
            <div>
                <h1 className='border-b-2 border-gray-300 font-medium py-4'>Job Description</h1>
                <div className='my-4'>
                    <h1 className='font-bold my-1'>Role: <span className='pl-4 font-normal text-gray-800'>Frontend Devloper</span></h1>
                    <h1 className='font-bold my-1'>Location: <span className='pl-4 font-normal text-gray-800'>Hyderabad</span></h1>
                    <h1 className='font-bold my-1'>Description: <span className='pl-4 font-normal text-gray-800'>Lorem ispusum</span></h1>
                    <h1 className='font-bold my-1'>Experience: <span className='pl-4 font-normal text-gray-800'>2 Year</span></h1>
                    <h1 className='font-bold my-1'>Salary: <span className='pl-4 font-normal text-gray-800'>12 LPA</span></h1>
                    <h1 className='font-bold my-1'>Total Applicant: <span className='pl-4 font-normal  text-gray-800'>4</span></h1>
                    <h1 className='font-bold my-1'>Posted Date: <span className='pl-4 text-gray-800'>20-4-2025</span></h1>


                </div>
            </div>
        </div >
    )
}

export default JobDescription