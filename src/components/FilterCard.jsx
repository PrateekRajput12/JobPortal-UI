import React from 'react'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'
import { Label } from './ui/label'

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
    return (
        <div className='w-full bg-white p-3 rounded-md'>
            <h1 className='font-bold'>Filter Jobs</h1>
            <hr className='mt-3' />
            <RadioGroup>
                {
                    filterData?.map((data, index) => (
                        <div >
                            <h1 className='font-bold text-2xl'>{data.filterType}</h1>
                            {
                                data.arrya.map((item, index) => {
                                    return (
                                        <div className='flex items-center space-x-2 my-2'>
                                            <RadioGroupItem value={item} />
                                            <Label>{item}</Label>
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