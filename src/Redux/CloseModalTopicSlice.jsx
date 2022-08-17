import { createSlice } from '@reduxjs/toolkit';

const ModalTopic = createSlice({
  name: 'show',
  initialState: { isActive: false },

  reducers: {
    setModalTopic: (state, action) => {
      state.isActive = action.payload;
    },
  },
});
const { reducer, actions } = ModalTopic;
export const { setModalTopic } = actions;
export default reducer;
