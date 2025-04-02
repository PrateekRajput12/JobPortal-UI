import React, { use, useState } from 'react'
import NavBar from './shared/NavBar'
import { Avatar, AvatarImage } from './ui/avatar'
import { Button } from './ui/button'
import { Contact, Pen, Mail } from 'lucide-react'
import { Badge } from './ui/badge'
import { Label } from './ui/label'
import AppliedJobTable from './AppliedJobTable'
import UpdateProfileDialog from './UpdateProfileDialog'
import { useSelector } from 'react-redux'
import useGetAllAppliedJob from '../hooks/useGetAllAppliedJob'

// const skills = ["HTML", "CSS", "JS", "React"]

const Profile = () => {

    useGetAllAppliedJob()

    const isResume = true
    const { user } = useSelector((store) => store.auth)
    const { fullName, phoneNumber, profile, email } = user
    const [open, setOpen] = useState(false)
    return (

        <div>
            <NavBar />

            <div className='max-w-7xl mx-auto border bg-white border-gray-200 my-5 p-8'>
                <div className='flex justify-between'>


                    <div className='flex items-center gap-4'>

                        <Avatar className='h-24 w-24' >
                            <AvatarImage className='rounded-full' src={profile.profilePhoto} alt='profile' />
                        </Avatar>

                        <div>  <h1 className='font-medium text-xl'>{fullName}</h1>
                            <p>{profile?.bio}</p>
                        </div>
                    </div>
                    <Button onClick={() => setOpen(true)} variant='outline' className='text-right'><Pen /></Button>

                </div>

                <div className='my-5 '>
                    <div className='flex items-center gap-3 my-2'>    <Mail />
                        <span>{email}</span></div>
                    <div className='flex items-center gap-3 my-2'>
                        <Contact />
                        <span>{phoneNumber}</span>
                    </div>
                </div>

                <div className='my-5'>

                    <h1>Skills</h1>
                    <div className='flex items-center gap-1'>
                        {
                            profile?.skills.length !== 0 ? profile?.skills.map((item, index) => <Badge key={index}>{item}</Badge>) : <span>Not applicable</span>
                        }
                    </div>

                    <div className='grid w-full max-w-sm items-center gap-1.5'>
                        <Label className='text-md font-bold'>Resume</Label>
                        {
                            profile.resume ? <a target='_blank' href={profile.resume} className='text-blue-500 w-full hover:underline cursor-pointer'>{profile.resumeOriginalName}</a> : <span>Not applicable</span>
                        }
                    </div>

                </div>

            </div>
            <div className='max-w-4xl mx-auto bg-white rounded-2xl'>
                <h1 className='font-bold text-lg my-5'>Applied Job</h1>

                {/* Application Table */}
                <AppliedJobTable />
            </div>
            <UpdateProfileDialog open={open} setOpen={setOpen} />

        </div>
    )
}

export default Profile