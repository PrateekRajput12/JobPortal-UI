import axios from 'axios'
import { useEffect } from 'react'
import { JOB_API_END_POINIT } from '../components/utils/constant'
import { useDispatch } from 'react-redux'
import { setAllAdminJobs } from '../redux/jobSlice'

const useGetAllAdminJobs = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        const fetchAllAdminJobs = async () => {
            try {
                const res = await axios.get(`${JOB_API_END_POINIT}/getadminjobs`, { withCredentials: true })
                if (res.data.success) {
                    dispatch(setAllAdminJobs(res?.data?.jobs))
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchAllAdminJobs()
    }, [])
}

export default useGetAllAdminJobs