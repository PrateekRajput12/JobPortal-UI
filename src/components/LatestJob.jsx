import React from 'react'
import LatestJobCard from './LatestJobCard'
// import useGetAllJob from '../hooks/useGetAllJob'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'

const randomJob = [1, 2, 3, 4, 5, 6, 7, 8]
const LatestJob = () => {

    const { allJobs } = useSelector((store) => store.job)
    const navigate = useNavigate()
    return (
        <div className='max-w-7xl mx-auto my-20'>
            <h1 className='text-4xl font-bold'>
                <span className='text-[#6a38c2]'>Latest & Top </span>
                Job Openings</h1>
            {/* multiple job cards display */}
            <div className='grid grid-cols-3 gap-4 my-5'>
                {
                    allJobs <= 0 ? <span>No Job Avaiable</span> : allJobs.slice(0, 6).map((job) => (
                        <LatestJobCard key={job._id} job={job} />

                    ))
                }
            </div>
        </div>
    )
}

export default LatestJob