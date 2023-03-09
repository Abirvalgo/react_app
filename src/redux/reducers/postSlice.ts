import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Modal } from "../../context/Modal/Context";
import { RootState } from "../store";

const initialState = {
	selectedPost: Modal.Closed,
	isVisibleSelectedModal: false,
};

const modalSlice = createSlice({
	name: "modal",
	initialState,
	reducers: {
		changeModal: (state, action: PayloadAction<Modal>) => {
			state.selectedPost = action.payload;
		},
	},
});

export const { changeModal } = modalSlice.actions;
export default modalSlice.reducer;

export const ModalSelectors = {
	getModalValue: (state: RootState) => state.modal.selectedPost,
};

// const changeThemeAction = (payload) => {
//   return {
//     type: "CHANGE_THEME",
//     payload,
//   };
// };
//
//
// const modalReducer = (state, action) => {
// 	switch (action.type) {
// 		case "CHANGE_Modal":
// 			return { ...state, modalState: action.payload };
// 		default:
// 			return state;
// 	}
// };
//
// const Comp = () => {
//   const dispatch = useDispatch()
//
//   const onChangeTheme = () => {
//     dispatch(changeThemeAction('DARK'))
//   }
// }
