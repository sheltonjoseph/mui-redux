import { createSlice } from '@reduxjs/toolkit'

export const chip = createSlice({
    name: 'chip',
    initialState: {
        chipData:[
            { key: 0, label: 'Angular' },
            { key: 1, label: 'jQuery' },
            { key: 2, label: 'Polymer' },
            { key: 3, label: 'React' },
            { key: 4, label: 'Vue.js' },
        ]
    },
    reducers: {
  update: (state, action) => {
    console.log(state)
    console.log(action)
    state.chipData = action.payload.value
    console.log(state)
    console.log(action)
  }

    }
})

export const { update } = chip.actions;
export default chip.reducer;