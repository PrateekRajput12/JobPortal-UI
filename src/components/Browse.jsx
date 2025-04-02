import React, { useEffect } from 'react'
import NavBar from './shared/NavBar'
import Job from './Job'
import { useDispatch, useSelector } from 'react-redux'
import { setSearchedQuery } from '../redux/jobSlice'
import useGetAllJob from '../hooks/useGetAllJob'

const Browse = () => {
    useGetAllJob()
    const { allJobs } = useSelector(store => store?.job)
    const dispatch = useDispatch()
    useEffect(() => {
        return () => {
            dispatch(setSearchedQuery(""))
        }
    }, [])
    return (
        <div>
            <NavBar />
            <div className='max-w-7xl mx-auto my-10'>
                <h1 className='font-bold text-xl my-10'>Search Results ({allJobs?.length})</h1>
                <div className='grid grid-cols-3 gap-4 '>
                    {
                        allJobs?.map((item) => {
                            return (
                                <Job job={item} key={item?._id} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Browse