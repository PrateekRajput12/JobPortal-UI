import React, { useEffect } from 'react'
import NavBar from '../shared/NavBar'
import ApplicantsTable from './ApplicantsTable'
import axios from 'axios'
import { APPLICATION_API_END_POINT } from '../utils/constant'
import { useNavigate, useParams } from 'react-router'
import { toast } from 'sonner'
import { useDispatch, useSelector } from 'react-redux'
import { setAllApplicants } from '../../redux/applicationSlice'

const Applicants = () => {
    const params = useParams()

    const dispatch = useDispatch()

    const { applicants } = useSelector(store => store.application)
    useEffect(() => {
        const fetchAllApplicants = async () => {

            try {
                console.log("yah");
                const res = await axios.get(`${APPLICATION_API_END_POINT}/${params?.id}/applicants`, { withCredentials: true })

                console.log("applicants", res.data);
                if (res.data.success) {
                    toast.success(res.data.message)
                    dispatch(setAllApplicants(res?.data?.job))

                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchAllApplicants()

    }, [params.id, dispatch])
    return (
        <div>
            <NavBar />
            <div className='max-w-7xl mx-auto'>
                <h1 className='text-xl font-bold my-5'>Applicants({applicants.applications.length})</h1>
                <ApplicantsTable />
            </div>
        </div>
    )
}

export default Applicants