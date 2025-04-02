import React, { useEffect, useState } from 'react'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'
import { Label } from './ui/label'
import { useDispatch } from 'react-redux'
import { setSearchedQuery } from '../redux/jobSlice'
import { SelectValue } from '@radix-ui/react-select'
// import { SelectValue } from '@radix-ui/react-select'

const filterData = [
    {
        filterType: "Location",
        arrya: ["Delhi NCR", "Bangalore", "Hyderabad", "Pune", "Mumbai"]
    },
    {
        filterType: "Industry",
        arrya: ["Frontend Devloper", "Backend Developer", "FullStack Developer", "Data Analyst", "Data Science"]
    },
    {
        filterType: "Salary",
        arrya: ["0-40k", "42-1lakh", "1lakh to 5 lakh"]
    }
]

const FilterCard = () => {
    const [selected, setSelectedValue] = useState("")
    const dispatch = useDispatch()
    const changeHandler = (value) => {
        setSelectedValue(value)
    }
    useEffect(() => {
        // console.log(selected);
        dispatch(setSearchedQuery(selected))

    }, [selected])
    return (
        <div className='w-full bg-white p-3 rounded-md'>
            <h1 className='font-bold'>Filter Jobs</h1>
            <hr className='mt-3' />
            <RadioGroup value={selected} onValueChange={changeHandler}>
                {
                    filterData?.map((data, index) => (
                        <div >
                            <h1 className='font-bold text-2xl'>{data.filterType}</h1>
                            {
                                data.arrya.map((item, idx) => {
                                    const itemId = `r${index}-${idx}`
                                    return (
                                        <div className='flex items-center space-x-2 my-2'>
                                            <RadioGroupItem value={item} id={itemId} />
                                            <Label htmlFor={itemId}>{item}</Label>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    ))
                }
            </RadioGroup>
        </div>
    )
}

export default FilterCard