import React, { useState } from 'react'
import { Dialog, DialogFooter, DialogHeader } from './ui/dialog'
import { DialogContent, DialogTitle } from './ui/dialog'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { Loader2 } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { USER_API_END_POINT } from './utils/constant'
import { toast } from 'sonner'
import { SetUser } from '../redux/authSlice'
const UpdateProfileDialog = ({ open, setOpen }) => {
    const [loading, setLoading] = useState(false)
    const { user } = useSelector((store) => store.auth)
    const dispatch = useDispatch()

    const [input, setInput] = useState({
        fullName: user?.fullName,
        email: user?.email,
        phoneNumber: user?.phoneNumber,
        password: user?.password,
        bio: user?.profile?.bio,
        skills: user?.profile?.skills?.map(skills => skills),
        file: user?.profile?.resume
    })


    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }
    const fileChangeHandler = (e) => {
        const file = e.target.files?.[0]
        setInput({ ...input, file })
    }

    const submitHandler = async (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append("fullName", input.fullName)
        formData.append("email", input.email)
        formData.append("phoneNumber", input.phoneNumber)
        formData.append("skills", input.skills)
        formData.append("bio", input.bio)
        if (input.file) {
            formData.append("file", input.file)
        }
        try {
            const res = await axios.post(`${USER_API_END_POINT}profile/update`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                withCredentials: true
            })
            console.log(res.data?.success);
            if (res?.data?.success) {
                console.log('hrer-2');
                dispatch(SetUser(res?.data?.user))
                toast.success(res.data.message)
                console.log('here');
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message)
        }
        setOpen(false)
        console.log(input);
    }
    return (
        <div>
            <Dialog open={open}>
                <DialogContent className='sm:max-w-[425px]' onInteractOutside={() => setOpen(false)}>
                    <DialogHeader>
                        <DialogTitle>
                            Update Porfile
                        </DialogTitle>
                    </DialogHeader>
                    <form onSubmit={submitHandler}>
                        <div className='grid gap-4 py-4'>
                            <div className='grid grid-cols-4 items-center gap-4'>
                                <Label htmlFor="fullName" className='text-right'>Name</Label>
                                <Input type='text' id='fullName' name='fullName' className='col-span-3'
                                    value={input?.fullName}
                                    onChange={changeEventHandler} />
                            </div>
                            <div className='grid grid-cols-4 items-center gap-4'>
                                <Label htmlFor="email" className='text-right'>Email</Label>
                                <Input type='email' id='email' name='email' className='col-span-3'
                                    value={input?.email}
                                    onChange={changeEventHandler} />
                            </div>
                            <div className='grid grid-cols-4 items-center gap-4'>
                                <Label htmlFor="phoneNumber" className='text-right'>Number</Label>
                                <Input type='text' id='phoneNumber' name='phoneNumber' className='col-span-3'
                                    value={input?.phoneNumber}
                                    onChange={changeEventHandler} />
                            </div>
                            <div className='grid grid-cols-4 items-center gap-4'>
                                <Label htmlFor="bio" className='text-right'>Bio</Label>
                                <Input id='bio' name='bio' className='col-span-3'
                                    value={input?.bio}
                                    onChange={changeEventHandler} />
                            </div>
                            <div className='grid grid-cols-4 items-center gap-4'>
                                <Label htmlFor="skills" className='text-right'>Skills</Label>
                                <Input id='skills' name='skills' className='col-span-3'
                                    value={input?.skills}
                                    onChange={changeEventHandler} />
                            </div>
                            <div className='grid grid-cols-4 items-center gap-4'>
                                <Label htmlFor="file" className='text-right'>Resume</Label>
                                <Input type='file' id='file' name='file' className='col-span-3'
                                    accept='application/pdf'

                                    onChange={fileChangeHandler}
                                />
                            </div>
                        </div>
                        <DialogFooter>
                            {loading ? <Button className='w-full my-4'><Loader2 /></Button> : <Button type='submit' className='w-full my-4'>Update</Button>
                            }                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default UpdateProfileDialog