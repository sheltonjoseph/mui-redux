import { createSlice } from '@reduxjs/toolkit'

export const dialog = createSlice({
    name: 'dialog',
    initialState: {
        dialogOpen:false,
        dialogClose:true
    },
    reducers: {
  update: (state, action) => {
    console.log(`action.payload = ${action.payload}`);
    state.dialogOpen = !action.payload
    state.dialogClose = !action.payload
  }

    }
})

export const { update } = dialog.actions;
export default dialog.reducer;