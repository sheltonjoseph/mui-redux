import { createSlice } from '@reduxjs/toolkit'

export const slider = createSlice({
    name: 'slider',
    initialState: {
        volume:'30',
    },
    reducers: {
  update: (state, action) => {
    state.volume = action.payload.value
  }

    }
})

export const { update } = slider.actions;
export default slider.reducer;