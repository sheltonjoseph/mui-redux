import { createSlice } from '@reduxjs/toolkit'

export const list = createSlice({
    name: 'list',
    initialState: {
        listOpen:false,
    },
    reducers: {
  update: (state, action) => {
    console.log(`action.payload = ${action.payload}`);
    state.listOpen = !action.payload

  }

    }
})

export const { update } = list.actions;
export default list.reducer;