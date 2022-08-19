import { createSlice } from '@reduxjs/toolkit'

export const select = createSlice({
    name: 'select',
    initialState: {
        age:'',
    },
    reducers: {
  update: (state, action) => {
    state.age = action.payload.value.props.value
  }

    }
})

export const { update } = select.actions;
export default select.reducer;