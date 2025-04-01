import React, { useState } from 'react'
import NavBar from '../shared/NavBar'
import { Label } from '@radix-ui/react-label'
import { useNavigate } from 'react-router'
import axios from 'axios'
import { COMPANY_API_END_POINT } from '../utils/constant'
import { toast } from 'sonner'
import { useDispatch } from 'react-redux'
import { setSingleCompany } from '../../redux/companySlice'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

const CompanyCreate = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [companyName, setCompanyName] = useState('')
    const registerNewCompany = async () => {
        try {
            const res = await axios.post(`${COMPANY_API_END_POINT}/register`, { companyName }, {
                headers: { 'Content-Type': 'application/json' },
                withCredentials: true
            })
            console.log(res.data);
            if (res.data.success) {
                toast.success(res.data.message)
                dispatch(setSingleCompany(res?.data?.company))
                const companyId = res?.data?.company?._id
                navigate(`/admin/companies/${companyId}`)
            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div>
            <NavBar />
            <div className='max-w-4xl mx-auto'>
                <div className='my-10'>
                    <h1 className='font-bold text-2xl'> Your Company nName</h1>
                    <p className='text-gray-500'> whtv would you like your comany Namd? you can change this letter</p>

                </div>

                <Label>COmpany Name</Label>
                <Input type="text"
                    className="my-2"
                    placeholder="JobHunt Microsoft etc."
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                />
                <div className='flex items-center gap-2 my-10'>
                    <Button variant="outline" onClick={() => navigate('/admin/companies')}>Cancel</Button>
                    <Button onClick={registerNewCompany}>Continue</Button>
                </div>
            </div>
        </div>
    )
}

export default CompanyCreate