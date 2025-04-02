import { createSlice } from "@reduxjs/toolkit";

const applicationSlice = createSlice({
    name: 'application',
    initialState: {
        applicants: []
    },
    reducers: {
        setAllApplicants: (state, action) => {
            state.applicants = action.payload
        },
        // removeApplicant: (state, action) => {
        //     state.applicants = state.applicants.filter(applicant => applicant.id !== action.payload);
        // }
    }
})


export const { setAllApplicants } = applicationSlice.actions

export default applicationSlice.reducer