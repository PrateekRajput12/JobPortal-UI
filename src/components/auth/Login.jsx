import React, { useState } from 'react'
import NavBar from '../shared/NavBar'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { RadioGroup } from '../ui/radio-group'
import { Button } from '../ui/button'
import { Link, useNavigate } from 'react-router'
import { toast } from 'sonner'
import axios from 'axios'
import { USER_API_END_POINT } from '../utils/constant'
import { useDispatch, useSelector } from 'react-redux'
import { setLoading, SetUser } from '../../redux/authSlice'
const Login = () => {
    const dispatch = useDispatch()
    const naviagate = useNavigate()
    const { loading } = useSelector((store) => store.auth)
    const [input, setInput] = useState({
        email: "",
        password: "",
        role: ""

    })

    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }


    const submitHandler = async (e) => {
        e.preventDefault()



        try {
            dispatch(setLoading(true))
            const response = await axios.post(`${USER_API_END_POINT}login`, input, {
                headers: { "Content-Type": "application/json" }, withCredentials: true
            })
            console.log(response.data);

            if (response.data.success) {
                dispatch(SetUser(response?.data?.user))
                naviagate('/')
                toast.success(response.data.message)
            }
        } catch (error) {
            console.log(error);
        } finally {
            dispatch(setLoading(false))
        }
    }
    return (
        <div>
            <NavBar />
            <div className='flex items-center justify-center max-w-7xl mx-auto'>
                <form onSubmit={submitHandler} className='w-1/2 border border-gray-200 rounded-md p-4 my-10'>
                    <h1 className='font-bold text-xl mb-5'>Login</h1>


                    <div className='my-2'>
                        <Label>Email</Label>
                        <Input
                            type='text'
                            placeholder='prateek@gmail.com'
                            value={input.email}
                            name='email'
                            onChange={changeEventHandler}
                        />
                    </div>



                    <div className='my-2'>
                        <Label>Password</Label>
                        <Input
                            type='password'
                            placeholder='Enter Your Password'
                            value={input.password}
                            name='password'
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


                    </div>

                    {
                        loading ? <Button className='w-full my-4'>Loading...</Button> : <Button type='submit' className='w-full my-4'>Login</Button>

                    }
                    <span>Don't have an account ?<Link to="/signup" className='text-blue-600 '> Login</Link> </span>
                </form>

            </div>
        </div>
    )
}

export default Login