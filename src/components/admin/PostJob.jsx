import React, { useState } from 'react'
import NavBar from '../shared/NavBar'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { useDispatch, useSelector } from 'react-redux'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "../ui/select"
import axios from 'axios'
import { JOB_API_END_POINIT } from '../utils/constant'
import { toast } from 'sonner'
import { useNavigate } from 'react-router'
const PostJob = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [input, setInput] = useState({
        title: "",
        description: "",
        requirements: "",
        salary: "",
        location: "",
        jobType: "",
        experience: "",
        position: 0,
        companyId: ""
    })
    const { companies } = useSelector(store => store.company)
    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }

    const selectChangeHandler = (value) => {
        const selectedCompany = companies.find((company) => company.name.toLowerCase() === value)
        setInput({ ...input, companyId: selectedCompany._id })
    }
    const [loading, setLoading] = useState(false)
    const submitHandler = async (e) => {
        e.preventDefault()
        try {
            setLoading(true)
            const res = await axios.post(`${JOB_API_END_POINIT}/post`, input, {
                headers: { 'Content-Type': 'application/json' }, withCredentials: true
            })

            if (res.data.success) {
                toast.success(res.data.message)
                navigate('/admin/jobs')
            }

        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message)
        } finally {
            setLoading(false)
        }

    }
    return (
        <div>
            <NavBar />
            <div className='flex items-center justify-center w-screen my-5'>
                <form onSubmit={submitHandler} className='p-8 max-w-4xl border border-gray-200 shadow-lg'>
                    <div className='grid grid-cols-2'>

                        <div>
                            <Label>Title</Label>
                            <Input type='text'
                                name='title'
                                className='focus-visible:ring-offset-0 focus-visible:ring-0 my-1'
                                value={input?.title}
                                onChange={changeEventHandler}
                            />
                        </div>

                        <div>
                            <Label>Description</Label>
                            <Input type='text'
                                name='description'
                                className='focus-visible:ring-offset-0 focus-visible:ring-0 my-1'
                                value={input?.description}
                                onChange={changeEventHandler}
                            />
                        </div>

                        <div>
                            <Label>Requirments</Label>
                            <Input type='text'
                                name='requirements'
                                className='focus-visible:ring-offset-0 focus-visible:ring-0 my-1'
                                value={input?.requirements}
                                onChange={changeEventHandler}
                            />
                        </div>

                        <div>
                            <Label>Salary</Label>
                            <Input type='text'
                                name='salary'
                                className='focus-visible:ring-offset-0 focus-visible:ring-0 my-1'
                                value={input?.salary}
                                onChange={changeEventHandler}
                            />
                        </div>

                        <div>
                            <Label>Location</Label>
                            <Input type='text'
                                name='location'
                                className='focus-visible:ring-offset-0 focus-visible:ring-0 my-1'
                                value={input?.location}
                                onChange={changeEventHandler}
                            />
                        </div>

                        <div>
                            <Label>Job Type</Label>
                            <Input type='text'
                                name='jobType'
                                className='focus-visible:ring-offset-0 focus-visible:ring-0 my-1'
                                value={input?.jobType}
                                onChange={changeEventHandler}
                            />
                        </div>

                        <div>
                            <Label>Experience</Label>
                            <Input type='text'
                                name='experience'
                                className='focus-visible:ring-offset-0 focus-visible:ring-0 my-1'
                                value={input?.experience}
                                onChange={changeEventHandler}
                            />
                        </div>

                        <div>
                            <Label>No. of positions</Label>
                            <Input type='number'
                                name='position'
                                className='focus-visible:ring-offset-0 focus-visible:ring-0 my-1'
                                value={input?.position}
                                onChange={changeEventHandler}
                            />
                        </div>


                        <div>
                            {
                                companies?.length > 0 && (
                                    <Select onValueChange={selectChangeHandler}>
                                        <SelectTrigger>
                                            <SelectValue placeholder={"Select a company"} />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                {
                                                    companies?.map((company) => {
                                                        return (


                                                            <SelectItem key={company._id} value={company?.name?.toLowerCase()}>{company.name}</SelectItem>

                                                        )
                                                    })
                                                }
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                )
                            }
                        </div>
                    </div>

                    {
                        loading ? <Button className='w-full my-4'>Loading...</Button> : <Button type='submit' className='w-full my-4'>Post Job</Button>

                    }                    {
                        companies.length === 0 && <p className='text-red-600 font-bold text-center my-3'>Please register a company before posting a job</p>
                    }
                </form>


            </div>
        </div>
    )
}

export default PostJob