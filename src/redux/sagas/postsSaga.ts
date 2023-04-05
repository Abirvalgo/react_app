import { takeLatest, all, call, put } from "redux-saga/effects";
import { ApiResponse } from "apisauce";

import {
	addNewPost,
	getAllPosts,
	getSearchedPosts,
	getSinglePost,
	setAllPosts,
	setAllPostsLoading,
	setSearchedPosts,
	setSinglePost,
} from "../reducers/postSlice";
import API from "../api";
import { AllPostsResponse } from "./@types";
import { CardType } from "../../utils/@globalTypes";
import { PayloadAction } from "@reduxjs/toolkit";
import { AddPostPayload, GetAllPostsPayload } from "../reducers/@types";
import callCheckingAuth from "./callCheckingAuth";

// function* getAllPostsWorker() {
function* getAllPostsWorker(action: PayloadAction<GetAllPostsPayload>) {
	yield put(setAllPostsLoading(true));
	const { offset, search, ordering } = action.payload;
	const { ok, data, problem }: ApiResponse<AllPostsResponse> = yield call(
		API.getPosts,
		offset,
		search,
		ordering
	);
	if (ok && data) {
		yield put(setAllPosts({ cardList: data.results, postsCount: data.count }));
		// yield put(setAllPosts(data.results));
	} else {
		console.warn("Error getting all posts", problem);
	}
	yield put(setAllPostsLoading(false));
}

function* getSinglePostWorker(action: PayloadAction<string>) {
	const { ok, data, problem }: ApiResponse<CardType> = yield call(
		API.getSinglePost,
		action.payload
	);
	if (ok && data) {
		yield put(setSinglePost(data));
	} else {
		console.warn("Error getting post", problem);
	}
}

function* getSearchedPostsWorker(action: PayloadAction<string>) {
	const { ok, data, problem }: ApiResponse<AllPostsResponse> = yield call(
		API.getPosts,
		0,
		action.payload
	);
	if (ok && data) {
		yield put(setSearchedPosts(data.results));
	} else {
		console.warn("Error getting all posts", problem);
	}
}

function* addNewPostWorker(action: PayloadAction<AddPostPayload>) {
	const { data, callback } = action.payload;
	const { ok, problem }: ApiResponse<undefined> = yield callCheckingAuth(
		API.addPost,
		data
	);
	if (ok) {
		callback();
	} else {
		console.warn("Error adding post", problem);
	}
}

export default function* postsSaga() {
	yield all([
		takeLatest(getAllPosts, getAllPostsWorker),
		takeLatest(getSinglePost, getSinglePostWorker),
		takeLatest(getSearchedPosts, getSearchedPostsWorker),
		takeLatest(addNewPost, addNewPostWorker),
	]);
}
