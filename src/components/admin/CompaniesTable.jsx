import React, { useEffect, useState } from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableRow } from '../ui/table'
import { Avatar, AvatarImage } from '@radix-ui/react-avatar'
import { Popover, PopoverContent, PopoverTrigger } from '@radix-ui/react-popover'
import { Edit2, MoreHorizontal } from 'lucide-react'
import { useSelector } from 'react-redux'

const CompaniesTable = () => {
    const { companies, searchCompanyByText } = useSelector((store) => store.company)
    const [filterCompany, setFilterCompany] = useState(companies)

    useEffect(() => {
        const filteredCompany = companies?.length >= 0 && companies?.filter((company) => {
            if (!searchCompanyByText) {
                return true
            }
            return company?.name?.toLowerCase()?.includes(searchCompanyByText?.toLowerCase())
        })
        setFilterCompany(filteredCompany)
    }, [companies, searchCompanyByText])
    return (
        <div>
            <Table>
                <TableCaption>
                    A List of your registered companies
                </TableCaption>
                <TableRow>
                    <TableHead>
                        Logo
                    </TableHead>
                    <TableHead>
                        Name
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
                        companies?.length <= 0 ? <span>No companies available</span> :
                            (
                                <>
                                    {
                                        filterCompany?.map((company) => {
                                            return (
                                                <div key={company._id}>
                                                    <TableCell>
                                                        <Avatar>
                                                            <Avatar>
                                                                <AvatarImage className='rounded-full w-8' src={company.logo} alt='logo' />
                                                            </Avatar>
                                                        </Avatar>
                                                    </TableCell>
                                                    <TableCell>{company.name}</TableCell>
                                                    <TableCell>{company.createdAt.split("T")[0]}</TableCell>
                                                    <TableCell className='text-right  cursor-pointer'>
                                                        <Popover>
                                                            <PopoverTrigger><MoreHorizontal></MoreHorizontal></PopoverTrigger>
                                                            <PopoverContent className='w-32'>
                                                                <div className='flex items-center gap-2 w-fit cursor-pointer'>
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

export default CompaniesTable