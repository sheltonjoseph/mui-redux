import { createSlice } from '@reduxjs/toolkit'

export const slider = createSlice({
    name: 'slider',
    initialState: {
        age:'',
    },
    reducers: {
  update: (state, action) => {
    console.log(state)
    console.log(action.name)
    state.age = action.payload
  }

    }
})

export const { update } = slider.actions;
export default slider.reducer;