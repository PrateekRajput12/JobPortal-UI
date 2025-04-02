import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { Popover, PopoverContent, PopoverTrigger } from '@radix-ui/react-popover'
import { MoreHorizontal } from 'lucide-react'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { APPLICATION_API_END_POINT } from '../utils/constant'
import { toast } from 'sonner'
// import { removeApplicant } from '../../redux/applicationSlice'
const shortListingStatus = ["Accepted", "Rejected"]
const ApplicantsTable = () => {

    const { applicants } = useSelector(store => store?.application)
    // const dispatch = useDispatch()
    const statusHandler = async (status, id) => {
        try {
            axios.defaults.withCredentials = true
            const res = await axios.post(`${APPLICATION_API_END_POINT}/status/${id}/update`, { status }, { withCredentials: true })
            if (res.data.success) {
                toast.success(res.data.message)
                // dispatch(removeApplicant(id))
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message)
        }
    }


    return (
        <div>
            <Table>
                <TableCaption>
                    A List of your recent applied users
                </TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>FullName</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Contact</TableHead>
                        <TableHead>Resume</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead className='text-right'>Action</TableHead>

                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        applicants && applicants?.applications?.map((item) => {
                            return (
                                <tr key={item._id}>
                                    <TableCell>{item?.applicant?.fullName}</TableCell>
                                    <TableCell>{item?.applicant?.email}</TableCell>
                                    <TableCell>{item?.applicant.phoneNumber}</TableCell>

                                    <TableCell>
                                        {item?.applicant?.profile?.resume ? <a className='cursor-pointer text-blue-600' href={item?.applicant?.profile?.resume} target='_blank'>{item?.applicant?.profile?.resumeOriginalName}</a> : <span>NA</span>}
                                    </TableCell>
                                    <TableCell >{item?.applicant.createdAt?.split("T")[0]}</TableCell>
                                    <TableCell className='float-right cursor-pointer'>
                                        <Popover>
                                            <PopoverTrigger>
                                                <MoreHorizontal />
                                            </PopoverTrigger>
                                            <PopoverContent className='w-32'>


                                                {
                                                    shortListingStatus.map((status, index) => {
                                                        return (
                                                            <div onClick={() => statusHandler(status, item?._id)} key={index} className='flex w-fit items-center my-2 cursor-pointer'>
                                                                <span>{status}</span>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </PopoverContent>
                                        </Popover>
                                    </TableCell>
                                </tr>
                            )
                        })
                    }

                </TableBody>

            </Table>
        </div>
    )
}

export default ApplicantsTable