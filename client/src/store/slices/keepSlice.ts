import { createSlice } from "@reduxjs/toolkit"

interface KeepSliceTypes {
    contents: any[],
}

const initialState = {
    contents: [],
} as KeepSliceTypes

export const keepSlice = createSlice({
    name: 'keep',
    initialState: initialState,
    reducers: {
        // reducers
    }
})

export const { } = keepSlice.actions
export default keepSlice.reducer

