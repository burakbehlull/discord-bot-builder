import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface AuthSliceTypes {
    isAuth: boolean
}

const initialState = {
    isAuth: false
} as AuthSliceTypes

export const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        // reducers
        setIsAuth: (state, action: PayloadAction<boolean>) => {
            state.isAuth = action.payload
        }
    }
})

export const { setIsAuth } = authSlice.actions
export default authSlice.reducer

