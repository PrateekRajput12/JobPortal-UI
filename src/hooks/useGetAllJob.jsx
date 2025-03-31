import axios from 'axios'
import React, { useEffect } from 'react'
import { JOB_API_END_POINIT, USER_API_END_POINT } from '../components/utils/constant'
import { useDispatch } from 'react-redux'
import { setAllJobs } from '../redux/jobSlice'

const useGetAllJob = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        const fetchAllJobs = async () => {
            try {
                const res = await axios.get(`${JOB_API_END_POINIT}/get`, { withCredentials: true })
                console.log(res.data);
                if (res.data.success) {
                    dispatch(setAllJobs(res.data.jobs))
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchAllJobs()
    })
}

export default useGetAllJob