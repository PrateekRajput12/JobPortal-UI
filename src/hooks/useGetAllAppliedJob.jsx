import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { APPLICATION_API_END_POINT } from '../components/utils/constant'
import { toast } from 'sonner'
import { setAllAppliedJobs } from '../redux/jobSlice'

const useGetAllAppliedJob = () => {
    const dispatch = useDispatch()
    useEffect(() => {

        const fetchAppliedjobs = async () => {
            try {
                const res = await axios.get(`${APPLICATION_API_END_POINT}/get`, { withCredentials: true })
                console.log("applied", res.data);
                if (res.data.success) {
                    toast.success(res.data.message)
                    dispatch(setAllAppliedJobs(res?.data?.application))
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchAppliedjobs()

    }, [])
}

export default useGetAllAppliedJob