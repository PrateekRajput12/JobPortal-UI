import React, { useEffect, useState } from 'react'
import NavBar from '../shared/NavBar'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { useNavigate } from 'react-router'
import { useDispatch } from 'react-redux'
import AdminJobsTable from './AdminJobsTable'
import useGetAllAdminJobs from '../../hooks/useGetAllAdminJobs'
import { setSearchJobByText } from '../../redux/jobSlice'
const AdminJobs = () => {
    useGetAllAdminJobs()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [input, setInput] = useState("")



    useEffect(() => {
        dispatch(setSearchJobByText(input))
    }, [input])
    return (
        <div>
            <NavBar />
            <div className=' max-w-6xl mx-auto my-10'>
                <div className='flex justify-between items-center my-5'>
                    <Input
                        className='w-fit'
                        placeholder="Filter By Name & Role"
                        // value={input}
                        onChange={(e) => setInput(e?.target?.value)}
                    />
                    <Button onClick={() => navigate('/admin/jobs/create')} >New Jobs</Button>
                </div>
                <AdminJobsTable />

            </div>
        </div>
    )
}

export default AdminJobs