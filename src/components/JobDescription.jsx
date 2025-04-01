import React, { useEffect, useState } from 'react'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { useParams } from 'react-router'
import { setSingleJob } from '../redux/jobSlice'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { APPLICATION_API_END_POINT, JOB_API_END_POINIT } from './utils/constant'
import { toast } from 'sonner'
const JobDescription = () => {


    const dispatch = useDispatch()
    const params = useParams()
    const jobId = params.id
    console.log("job decs", jobId);
    const { user } = useSelector((store) => store.auth)
    const { singleJob } = useSelector((store) => store.job)

    const applyJobHandler = async () => {
        try {
            const res = await axios.get(`${APPLICATION_API_END_POINT}/apply/${singleJob._id}`, { withCredentials: true })
            console.log(res.data);
            if (res.data.success) {
                setIsApplied(true)
                const updateSingleJob = { ...singleJob, applications: [singleJob.applications, { applicant: user?._id }] }
                dispatch(setSingleJob(updateSingleJob)) // help us to real time ui update
                toast.success(res.data.message)
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message)
        }
    }





    useEffect(() => {
        const fetchSingleJob = async () => {
            try {
                const res = await axios.get(`${JOB_API_END_POINIT}/get/${jobId}`, { withCredentials: true })
                console.log(res.data);
                if (res.data.success) {
                    dispatch(setSingleJob(res?.data?.job))
                    setIsApplied(res.data.applications.some(application => application.applicant === user._id))
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchSingleJob()
    }, [jobId, dispatch, user._id])

    const isInitiallyApplied = singleJob?.applications?.some(application => application.applicant === user._id) || false
    const [isApplied, setIsApplied] = useState(isInitiallyApplied)



    return (
        <div className='max-w-7xl mx-auto my-10'>
            <div className='flex items-center justify-between'>
                <div>
                    <h1 className='font-bold text-xl'>{singleJob?.title}</h1>
                    <div className='flex items-center gap-2 mt-4'>
                        <Badge variant="ghost" className='text-blue-700 font-bold' >{singleJob?.position}</Badge>
                        <Badge variant="ghost" className='text-[#f83002] font-bold' >{singleJob?.jobType}</Badge>
                        <Badge variant="ghost" className='text-[#7209b7] font-bold' >{singleJob?.salary}LPA</Badge>

                    </div>
                </div>
                <Button
                    disabled={isApplied} onClick={isApplied ? null : applyJobHandler}
                    className={`rounded-lg ${isApplied ? 'bg-gray-600 cursor-not-allowed' : "bg-[#7209b7] hover:bg-[#5f32ad]"}`} >{isApplied ? "Already Applied" : 'Apply Now'}
                </Button>
            </div>
            <div>
                <h1 className='border-b-2 border-gray-300 font-medium py-4'>{singleJob?.description}</h1>
                <div className='my-4'>
                    <h1 className='font-bold my-1'>Role: <span className='pl-4 font-normal text-gray-800'>{singleJob?.title}</span></h1>
                    <h1 className='font-bold my-1'>Location: <span className='pl-4 font-normal text-gray-800'>{singleJob?.location}</span></h1>
                    <h1 className='font-bold my-1'>Description: <span className='pl-4 font-normal text-gray-800'>{singleJob?.description}</span></h1>
                    <h1 className='font-bold my-1'>Experience: <span className='pl-4 font-normal text-gray-800'>{singleJob?.experienceLevel}</span></h1>
                    <h1 className='font-bold my-1'>Salary: <span className='pl-4 font-normal text-gray-800'>{singleJob?.salary}</span></h1>
                    <h1 className='font-bold my-1'>Total Applicant: <span className='pl-4 font-normal  text-gray-800'>{singleJob?.applications.length}</span></h1>
                    <h1 className='font-bold my-1'>Posted Date: <span className='pl-4 text-gray-800'>{singleJob?.createdAt.split("T")[0]}</span></h1>


                </div>
            </div>
        </div >
    )
}

export default JobDescription