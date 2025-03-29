import { LogOut, User2 } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "../ui/popover"
import { Button } from '../ui/button'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "../ui/avatar"
import { useSelector } from 'react-redux'
const NavBar = () => {
    const { user } = useSelector((store) => store.auth)
    console.log(user);
    // const user = false
    return (
        <div>
            <div className='bg-white font-bold mx-auto text-black flex justify-between items-center max-w-7xl h-16'>
                <div>
                    <h1 className='text-2xl font-bold text-black'>Job<span className=' text-red-600'>Portal</span></h1>

                </div>

                <div className='flex items-center justify-between gap-12'>
                    <ul className='flex items-center gap-5'>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/jobs'>Jobs</Link></li>
                        <li><Link to='/browse'>Browse</Link></li>

                    </ul>

                    {
                        !user ? (
                            <div>
                                <Link to='/login'><Button variant='outline'>Login</Button></Link>
                                <Link to='/signup'><Button className='bg-[#6A38c2] hover:bg-[#64439d]'>SignUp</Button></Link>
                            </div>
                        ) : (
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Avatar className='cursor-pointer'>
                                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                        {/* <AvatarFallback>CN</AvatarFallback> */}
                                    </Avatar>
                                </PopoverTrigger>
                                <PopoverContent className='w-80'>
                                    <div className='flex gap-4  space-y-2'>
                                        <Avatar className='cursor-pointer'>
                                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                        </Avatar>
                                        <div>
                                            <h4> Prateek Rajput</h4>

                                            <p className='text-sm text-muted-foreground'>Lorem korem sorem dorem horem</p>

                                        </div>
                                    </div>
                                    <div className='flex my-2 flex-col gap-3  text-gray-600 '>
                                        <div className='flex w-fit items-center gap-2 cursor-pointer '>
                                            <User2 />
                                            <Button variant="link" className='self-start' ><Link to='/profile'> View Profile</Link></Button>
                                        </div>
                                        <div className='flex w-fit items-center gap-2 cursor-pointer '>
                                            <LogOut />
                                            <Button variant="link" className='self-start' > Logout</Button></div>

                                    </div>

                                </PopoverContent>
                            </Popover>
                        )
                    }

                </div>
            </div>
        </div>
    )
}

export default NavBar