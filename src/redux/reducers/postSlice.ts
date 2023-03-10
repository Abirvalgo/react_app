import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CardType } from "../../components/Card";
import { RootState } from "../store";
//
type PostState = {
	selectedPost: CardType | null;
	isVisibleSelectedModal: boolean;
};
//
const initialState: PostState = {
	selectedPost: null,
	isVisibleSelectedModal: false,
};

const modalSlice = createSlice({
	name: "modal",
	initialState,
	reducers: {
		changeModal: (state, action: PayloadAction<CardType | null>) => {
			state.selectedPost = action.payload;
		},
		visibleModal: (state, action: PayloadAction<boolean>) => {
			state.isVisibleSelectedModal = action.payload;
		},
	},
});

export const { changeModal, visibleModal } = modalSlice.actions;
export default modalSlice.reducer;

export const ModalSelectors = {
	getModalValue: (state: RootState) => state.modal.selectedPost,
	getModalVisible: (state: RootState) => state.modal.isVisibleSelectedModal,
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
