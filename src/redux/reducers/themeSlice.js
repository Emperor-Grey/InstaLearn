import {createSlice} from '@reduxjs/toolkit';

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    currentTheme: 'default',
  },
  reducers: {
    setTheme: (state, action) => {
      state.currentTheme = action.payload;
    },
  },
});

export const {setTheme} = themeSlice.actions;
export const selectCurrentTheme = state => state.theme.currentTheme;

export default themeSlice.reducer;
