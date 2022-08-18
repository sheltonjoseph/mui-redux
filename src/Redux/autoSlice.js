import { createSlice } from '@reduxjs/toolkit'

export const autoComplete = createSlice({
    name: 'auto',
    initialState: {
        inputValue:'',
        selectedData:{}
    },
    reducers: {
  update: (state, action) => {
    console.log(state)
    console.log(action)
    state.inputValue = action.payload.value.label
    state.selectedData = action.payload.value
    console.log(state)
  }

    }
})

export const { update } = autoComplete.actions;
export default autoComplete.reducer;