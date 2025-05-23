import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from './ui/table'
import { Badge } from './ui/badge'
import { useSelector } from 'react-redux'
const AppliedJobTable = () => {

    const { allAppliedJobs } = useSelector((store) => store.job)
    return (
        <div>
            <Table>
                <TableCaption>A list of your applied jobs</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Date</TableHead>
                        <TableHead>Job Role</TableHead>
                        <TableHead>Company</TableHead>
                        <TableHead className='text-right'>Status</TableHead>

                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        allAppliedJobs <= 0 ? <span>You haven't applied Job yet</span> : allAppliedJobs?.map((item) => (
                            <TableRow key={item?._id}>
                                <TableCell>{item?.createdAt.split("T")[0]}</TableCell>
                                <TableCell>{item?.job?.title}</TableCell>
                                <TableCell>{item?.job?.company?.name}</TableCell>
                                <TableCell className='text-right'><Badge className={`${item?.status === "rejected" ? 'bg-red-400' : item?.status === "pending" ? 'bg-gray-400' : 'bg-gray-400'}`}>{item?.status ? item?.status?.toUpperCase() : "PENDING"}</Badge></TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </div>
    )
}

export default AppliedJobTable