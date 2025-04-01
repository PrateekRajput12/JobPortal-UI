import React from 'react'
import NavBar from '../shared/NavBar'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import CompaniesTable from './CompaniesTable'
import { useNavigate } from 'react-router'
const Companies = () => {
    const navigate = useNavigate()
    return (
        <div>
            <NavBar />
            <div className=' max-w-6xl mx-auto my-10'>
                <div className='flex justify-between items-center my-5'>
                    <Input
                        className='w-fit'
                        placeholder="Filter By Name"
                    />
                    <Button onClick={() => navigate('/admin/companies/create')} >New Company</Button>
                </div>
                <CompaniesTable />

            </div>
        </div>
    )
}

export default Companies