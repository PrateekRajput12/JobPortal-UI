import React, { useEffect, useState } from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableRow } from '../ui/table'
import { Avatar, AvatarImage } from '@radix-ui/react-avatar'
import { Popover, PopoverContent, PopoverTrigger } from '@radix-ui/react-popover'
import { Edit2, Eye, MoreHorizontal } from 'lucide-react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'

const AdminJobsTable = () => {
    // const { companies, searchCompanyByText } = useSelector((store) => store.company)
    const { allAdminJobs, searchJobByText } = useSelector((store) => store?.job)
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
    console.log(filterJobs);
    return (
        <div>
            <Table>
                <TableCaption>A List of your posted jobs</TableCaption>
                <thead>
                    <TableRow>
                        <TableHead>Company Name</TableHead>
                        <TableHead>Role</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead className="text-right">Action</TableHead>
                    </TableRow>
                </thead>
                <TableBody>
                    {filterJobs?.length === 0 ? (
                        <TableRow>
                            <TableCell colSpan="4" className="text-center">
                                No companies available
                            </TableCell>
                        </TableRow>
                    ) : (
                        filterJobs?.map((job) => (
                            <TableRow key={job._id}>
                                <TableCell>{job?.company?.name}</TableCell>
                                <TableCell>{job?.title}</TableCell>
                                <TableCell>{job?.createdAt?.split("T")[0]}</TableCell>
                                <TableCell className="text-right cursor-pointer">
                                    <Popover>
                                        <PopoverTrigger>
                                            <MoreHorizontal />
                                        </PopoverTrigger>
                                        <PopoverContent className="w-38 p-3  bg-gray-400 font-bold text-md rounded-3xl">
                                            <div
                                                onClick={() => navigate(`/admin/companies/${job?.company?._id}`)}
                                                className="flex items-center gap-2 w-fit cursor-pointer"
                                            >
                                                <Edit2 className="w-4" />
                                                <span>Edit</span>
                                            </div>
                                            <div
                                                onClick={() => navigate(`/admin/jobs/${job._id}/applicants`)}
                                                className="flex items-center w-fit gap-2 cursor-pointer mt-2"
                                            >
                                                <Eye className="w-4" />
                                                <span>Applications</span>
                                            </div>
                                        </PopoverContent>
                                    </Popover>
                                </TableCell>
                            </TableRow>
                        ))
                    )}
                </TableBody>
            </Table>
        </div>
    )
}

export default AdminJobsTable