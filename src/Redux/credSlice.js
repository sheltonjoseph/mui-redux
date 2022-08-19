import { createSlice } from '@reduxjs/toolkit'

export const button = createSlice({
    name: 'button',
    initialState: {
        userName :'',
        password:'',
        errorMessage:'Is Not Strong Password'
    },
    reducers: {
  update: (state, action) => {
    state.userName = action.payload.userName
    state.password = action.payload.password
    state.errorMessage = action.payload.errorMessage 
  }

    }
})

export const { update } = button.actions;
export default button.reducer;