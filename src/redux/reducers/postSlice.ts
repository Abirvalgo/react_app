import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CardType, CardListType } from "src/utils/@globalTypes";
import { RootState } from "../store";
//
export enum LikeStatus {
	Like = "like",
	Dislike = "dislike",
}

type initialStateType = {
	selectedPost: CardType | null;
	isVisibleSelectedModal: boolean;
	likedPosts: CardListType;
	dislikedPosts: CardListType;
	savedPosts: CardListType;
	postsList: CardListType;
	singlePost: CardType | undefined;
	myPosts: CardListType;
};
//
const initialState: initialStateType = {
	selectedPost: null,
	isVisibleSelectedModal: false,
	likedPosts: [],
	dislikedPosts: [],
	savedPosts: [],
	postsList: [],
	singlePost: undefined,
	myPosts: [],
};

const postSlice = createSlice({
	name: "post",
	initialState,
	reducers: {
		getSinglePost: (_, __: PayloadAction<string>) => {},
		setSinglePost: (state, action: PayloadAction<CardType>) => {
			state.singlePost = action.payload;
		},
		getAllPosts: (_, __: PayloadAction<undefined>) => {},
		setAllPosts: (state, action: PayloadAction<CardListType>) => {
			state.postsList = action.payload;
		},
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
		setSavedPosts: (state, action: PayloadAction<{ card: CardType }>) => {
			const { card } = action.payload;
			const savedPostsIndex = state.savedPosts.findIndex(
				(post) => post.id === card.id
			);
			if (savedPostsIndex === -1) {
				state.savedPosts.push(card);
			} else {
				state.savedPosts.splice(savedPostsIndex, 1);
			}
		},
		getMyPosts: (_, __: PayloadAction<undefined>) => {},
		setMyPosts: (state, action: PayloadAction<CardListType>) => {
			state.myPosts = action.payload;
		},
	},
});

export const {
	setSelectedPost,
	setPostVisibility,
	setStatus,
	setSavedPosts,
	getAllPosts,
	setAllPosts,
	getSinglePost,
	setSinglePost,
	getMyPosts,
	setMyPosts,
} = postSlice.actions;
export default postSlice.reducer;

export const PostSelectors = {
	getSelectedPost: (state: RootState) => state.post.selectedPost,
	getPostVisibility: (state: RootState) => state.post.isVisibleSelectedModal,
	getLikedPosts: (state: RootState) => state.post.likedPosts,
	getDislikedPosts: (state: RootState) => state.post.dislikedPosts,
	getSavedPosts: (state: RootState) => state.post.savedPosts,
	getAllPosts: (state: RootState) => state.post.postsList,
	getSinglePost: (state: RootState) => state.post.singlePost,
	getMyPosts: (state: RootState) => state.post.myPosts,
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
