import React, { useEffect, useState } from 'react'
import NavBar from '../shared/NavBar'
import { Button } from '../ui/button'
import { ArrowLeft } from 'lucide-react'
import { Label } from '../ui/label'
import { Description } from '@radix-ui/react-dialog'
import { Input } from '../ui/input'
import axios from 'axios'
import { COMPANY_API_END_POINT } from '../utils/constant'
import { useNavigate, useParams } from 'react-router'
import { toast } from 'sonner'
import { useDispatch, useSelector } from 'react-redux'
import useGetCompanyById from '../../hooks/useGetCompanyById'

const CompanySetup = () => {
    const params = useParams()

    const naviagate = useNavigate()
    useGetCompanyById(params.id)
    // const dispatch = useDispatch()
    const [input, setInput] = useState({
        name: "",
        description: "",
        website: "",
        location: "",
        file: null
    })
    const { singleCompany } = useSelector(store => store.company)
    const [loading, setLoading] = useState(false)
    const changeEventHandler = (e) => {
        console.log(e.target.value);
        setInput({ ...input, [e?.target?.name]: e?.target?.value })
    }
    const changeFileHandler = (e) => {
        const file = e.target.files?.[0]
        setInput({ ...input, file })
    }



    const submitHandler = async (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append("name", input?.name)
        formData.append("location", input?.location)
        formData.append("description", input?.description)
        formData.append("website", input?.website)
        if (input?.file) {
            formData.append("file", input?.file)
        }


        try {
            setLoading(true)
            console.log(input);
            const res = await axios.put(`${COMPANY_API_END_POINT}/update/${params.id}`, formData, {
                headers: { "Content-Type": "multipart/form-data" }, withCredentials: true
            })
            console.log("res", res);

            console.log(res.data);
            if (res.data.success) {
                toast.success(res.data.message)
                // dispatch()
                naviagate('/admin/companies')


            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message)
        } finally {
            setLoading(false)
        }


    }

    useEffect(() => {
        setInput({
            name: singleCompany.name || "",
            location: singleCompany?.location || "",
            description: singleCompany?.description || "",
            website: singleCompany?.website || "",
            file: singleCompany?.file || ""
        })
    }, [singleCompany])

    return (
        <div>
            <NavBar></NavBar>

            <div className='max-w-xl mx-auto my-10'>
                <form onSubmit={submitHandler}>
                    <div className='flex items-center gap-5 p-8'>
                        <Button onClick={() => naviagate("/admin/companies")} variant='outline' className='flex items-center gap-2 text-gray-500 font-semibold'>
                            <ArrowLeft />
                            <span>Back</span>
                            <h1 className='font-bold text-xl'>Company Setup</h1>
                        </Button>
                    </div>
                    <div className='grid grid-cols-2 gap-4'>
                        <div>
                            <Label>Company Name</Label>
                            <Input
                                type='text'
                                name='name'
                                value={input?.name}
                                onChange={changeEventHandler}
                            />
                        </div>

                        <div>
                            <Label>Location</Label>
                            <Input
                                type='text'
                                name='location'
                                value={input?.location}
                                onChange={changeEventHandler}
                            />
                        </div>
                        <div>
                            <Label>Website</Label>
                            <Input
                                type='text'
                                name='website'
                                value={input?.website}
                                onChange={changeEventHandler}
                            />
                        </div>

                        <div>
                            <Label>Description</Label>
                            <Input
                                type='text'
                                name='description'
                                value={input?.description}
                                onChange={changeEventHandler}
                            />
                        </div>

                        <div>
                            <Label>Logo</Label>
                            <Input
                                type='file'
                                accept='image/*'
                                // value={input?.file}
                                onChange={changeFileHandler}
                            />
                        </div>


                    </div>
                    {
                        loading ? <Button className='w-full my-4'>Loading...</Button> : <Button type='submit' className='w-full my-4'>Update</Button>

                    }
                </form>
            </div>

        </div>
    )
}

export default CompanySetup