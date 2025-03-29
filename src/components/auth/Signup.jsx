import React, { useState } from 'react'
import NavBar from '../shared/NavBar'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { RadioGroup, RadioGroupItem } from '../ui/radio-group'
import { Button } from '../ui/button'
import axios from 'axios'
import { Link, useNavigate } from 'react-router'
import { toast } from 'sonner'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { USER_API_END_POINT } from '../utils/constant'
import { setLoading } from '../../redux/authSlice'
const Signup = () => {
    const dispatch = useDispatch()
    const naviagate = useNavigate()
    const { loading } = useSelector((store) => store.auth)
    const [input, setInput] = useState({
        fullName: "",
        email: "",
        phoneNumber: "",
        password: "",
        role: "",
        file: ""
    })

    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }

    const changeFileHandler = (e) => {
        setInput({ ...input, file: e.target.file?.[0] })
    }

    const submitHandler = async (e) => {
        e.preventDefault()
        console.log('clicked');
        const formData = new FormData()
        formData.append("fullName", input.fullName)
        formData.append("email", input.email)
        formData.append("phoneNumber", input.phoneNumber)
        formData.append("password", input.password)
        formData.append("role", input.role)
        if (input.file) {
            formData.append("file", input.file)
        }

        try {
            dispatch(setLoading(true))
            const response = await axios.post(`${USER_API_END_POINT}/register`, formData, {
                headers: { "Content-Type": "multipart/form-data" }, withCredentials: true
            })
            console.log(response);

            console.log('here');
            if (response.data.success) {
                naviagate('/login')
                toast.success(response.data.message)
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message)
        } finally {
            dispatch(setLoading(false))
        }
    }

    return (
        <div>
            <NavBar />
            <div className='flex items-center justify-center max-w-7xl mx-auto'>
                <form onSubmit={submitHandler} className='w-1/2 border border-gray-200 rounded-md p-4 my-10'>
                    <h1 className='font-bold text-xl mb-5'>Sign Up</h1>
                    <div className='my-2'>
                        <Label>Full Name</Label>
                        <Input
                            type='text'
                            placeholder='Enter Your Full Name'
                            value={input.fullName}
                            name="fullName"
                            onChange={changeEventHandler}
                        />

                    </div>

                    <div className='my-2'>
                        <Label>Email</Label>
                        <Input
                            type='text'
                            placeholder='prateek@gmail.com'
                            value={input.email}
                            name="email"
                            onChange={changeEventHandler}
                        />
                    </div>

                    <div className='my-2'>
                        <Label>Phone Number</Label>
                        <Input
                            type='text'
                            placeholder='Enter Your Number'
                            value={input.phoneNumber}
                            name="phoneNumber"
                            onChange={changeEventHandler}
                        />
                    </div>

                    <div className='my-2'>
                        <Label>Password</Label>
                        <Input
                            type='password'
                            placeholder='Enter Your Password'
                            value={input.password}
                            name="password"
                            onChange={changeEventHandler}
                        />
                    </div>

                    <div className='flex items-center justify-between'>
                        <RadioGroup className='flex items-center gap-4 my-5'>
                            <div className="flex items-center space-x-2">
                                <Input
                                    type='radio' name="role" value="student" className='cursor-pointer'
                                    checked={input.role === "student"}
                                    onChange={changeEventHandler}
                                />
                                <Label htmlFor="r1">Student</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Input
                                    type='radio' name="role" value="recruiter" className='cursor-pointer'
                                    checked={input.role === "recruiter"}
                                    onChange={changeEventHandler}
                                />
                                <Label htmlFor="r2">Recruiter</Label>
                            </div>

                        </RadioGroup>

                        <div className='flex items-center gap-2'>
                            <Label>Profile</Label>
                            <Input accept="image/*"
                                type='file'
                                className='cursor-pointer'
                                onChange={changeFileHandler}
                            />
                        </div>
                    </div>

                    {
                        loading ? <Button className='w-full my-4'>Loading...</Button> : <Button type='submit' className='w-ful l my-4'>Signup</Button>

                    }                    <span>Already have an account ?<Link to="/login" className='text-blue-600 '> Login</Link> </span>
                </form>

            </div>
        </div>
    )
}

export default Signup