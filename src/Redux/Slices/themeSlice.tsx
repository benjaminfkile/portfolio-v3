import { createSlice } from '@reduxjs/toolkit'
import { Charcoal } from '../../Pallettes/Charcoal'

export const themeSlice = createSlice({
  name: 'themeSlice',
  initialState: {
    theme: Charcoal
  },
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload
    }
  }
})

export const { setTheme } = themeSlice.actions

export default themeSlice.reducer