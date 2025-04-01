import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableRow } from '../ui/table'
import { Avatar, AvatarImage } from '@radix-ui/react-avatar'
import { Popover, PopoverContent, PopoverTrigger } from '@radix-ui/react-popover'
import { Edit2, MoreHorizontal } from 'lucide-react'

const CompaniesTable = () => {
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
                    <TableCell>
                        <Avatar>
                            <Avatar>
                                <AvatarImage className='rounded-full w-8' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmaPiU5rEd9zpNUMgWe8X8qm34BzbjW92-wg&s' alt='logo' />
                            </Avatar>
                        </Avatar>
                    </TableCell>
                    <TableCell>Company Name</TableCell>
                    <TableCell>Date Name</TableCell>
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


                </TableBody>
            </Table>

        </div>
    )
}

export default CompaniesTable