import { createSlice } from '@reduxjs/toolkit'

export const checkList = createSlice({
    name: 'checking',
    initialState: {
   checked:[0]
    },
    reducers: {
  check: (state) => {
    state.checked +=1 ;
  }

    }
})


export const { check } = checkList.actions;

export default checkList.reducer;

