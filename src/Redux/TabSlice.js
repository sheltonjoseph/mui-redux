import { createSlice } from '@reduxjs/toolkit'

export const tab = createSlice({
    name: 'tab',
    initialState: {
        value:'1',
    },
    reducers: {
  update: (state, action) => {
    console.log(state)
    console.log(action)
    state.value = action.payload.value
  }

    }
})

export const { update } = tab.actions;
export default tab.reducer;