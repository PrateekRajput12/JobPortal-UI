import React, { useEffect, useState } from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableRow } from '../ui/table'
import { Avatar, AvatarImage } from '@radix-ui/react-avatar'
import { Popover, PopoverContent, PopoverTrigger } from '@radix-ui/react-popover'
import { Edit2, MoreHorizontal } from 'lucide-react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'

const AdminJobsTable = () => {
    // const { companies, searchCompanyByText } = useSelector((store) => store.company)
    const { allAdminJobs, searchJobByText } = useSelector(store => store.job)
    const [filterJobs, setFilterJobs] = useState(allAdminJobs)
    const navigate = useNavigate()
    useEffect(() => {
        const filteredJob = allAdminJobs?.length >= 0 && allAdminJobs?.filter((job) => {
            if (!searchJobByText) {
                return true
            }
            return job?.title?.toLowerCase()?.includes(searchJobByText?.toLowerCase()) || job?.company?.name?.toLowerCase()?.includes(searchJobByText?.toLowerCase())
        })
        setFilterJobs(filteredJob)
    }, [allAdminJobs, searchJobByText])
    return (
        <div>
            <Table>
                <TableCaption>
                    A List of your posted jobs
                </TableCaption>
                <TableRow>
                    <TableHead>
                        Company Name
                    </TableHead>
                    <TableHead>
                        Role
                    </TableHead>
                    <TableHead>
                        Date
                    </TableHead>
                    <TableHead className='text-right'>
                        Action
                    </TableHead>
                </TableRow>
                <TableBody>

                    {
                        allAdminJobs?.length <= 0 ? <span>No companies available</span> :
                            (
                                <>
                                    {
                                        filterJobs?.map((job) => {
                                            return (
                                                <div key={job._id}>


                                                    <TableCell>{job?.company?.name}</TableCell>
                                                    <TableCell>{job?.title}</TableCell>

                                                    <TableCell>{job.createdAt.split("T")[0]}</TableCell>

                                                    <TableCell className='text-right  cursor-pointer'>
                                                        <Popover>
                                                            <PopoverTrigger><MoreHorizontal></MoreHorizontal></PopoverTrigger>
                                                            <PopoverContent className='w-32'>
                                                                <div onClick={() => navigate(`/admin/companies/${job._id}`)} className='flex items-center gap-2 w-fit cursor-pointer'>
                                                                    <Edit2 className='w-4'>

                                                                    </Edit2>
                                                                    <span>Edit</span>
                                                                </div>
                                                            </PopoverContent>
                                                        </Popover>
                                                    </TableCell>
                                                </div>
                                            )
                                        })
                                    }


                                </>
                            )
                    }

                </TableBody>
            </Table>

        </div>
    )
}

export default AdminJobsTable