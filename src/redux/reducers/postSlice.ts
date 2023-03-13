import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CardType } from "../../components/Card";
import { RootState } from "../store";
//
export enum LikeStatus {
	Like = "like",
	Dislike = "dislike",
}

type initialStateType = {
	selectedPost: CardType | null;
	isVisibleSelectedModal: boolean;
	likedPosts: CardType[];
	dislikedPosts: CardType[];
};
//
const initialState: initialStateType = {
	selectedPost: null,
	isVisibleSelectedModal: false,
	likedPosts: [],
	dislikedPosts: [],
};

const postSlice = createSlice({
	name: "post",
	initialState,
	reducers: {
		setSelectedPost: (state, action: PayloadAction<CardType | null>) => {
			state.selectedPost = action.payload;
		},
		setPostVisibility: (state, action: PayloadAction<boolean>) => {
			state.isVisibleSelectedModal = action.payload;
		},
		setStatus: (
			state,
			action: PayloadAction<{ status: LikeStatus; card: CardType }>
		) => {
			const { status, card } = action.payload;
			const likedIndex = state.likedPosts.findIndex(
				(post) => post.id === card.id
			);
			const dislikedIndex = state.dislikedPosts.findIndex(
				(post) => post.id === card.id
			);

			const isLike = status === LikeStatus.Like;

			const mainKey = isLike ? "likedPosts" : "dislikedPosts";
			const secondaryKey = isLike ? "dislikedPosts" : "likedPosts";
			const mainIndex = isLike ? likedIndex : dislikedIndex;
			const secondaryIndex = isLike ? dislikedIndex : likedIndex;

			if (mainIndex === -1) {
				state[mainKey].push(card);
			} else {
				state[mainKey].splice(mainIndex, 1);
			}
			if (secondaryIndex > -1) {
				state[secondaryKey].splice(secondaryIndex, 1);
			}
		},
	},
});

export const { setSelectedPost, setPostVisibility, setStatus } =
	postSlice.actions;
export default postSlice.reducer;

export const PostSelectors = {
	getSelectedPost: (state: RootState) => state.post.selectedPost,
	getPostVisibility: (state: RootState) => state.post.isVisibleSelectedModal,
	getLikedPosts: (state: RootState) => state.post.likedPosts,
	getDislikedPosts: (state: RootState) => state.post.dislikedPosts,
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
