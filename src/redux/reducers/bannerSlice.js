import { createSlice } from '@reduxjs/toolkit';

const bannerSlice = createSlice({
  name: 'banner',
  initialState: {
    visible: true,
  },
  reducers: {
    setBannerVisibility: (state, action) => {
      state.visible = action.payload;
    },
  },
});

export const { setBannerVisibility } = bannerSlice.actions;
export const selectBannerVisibility = (state) => state.banner?.visible;

export default bannerSlice.reducer;
