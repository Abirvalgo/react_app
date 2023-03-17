import React, { useEffect } from "react";
import Post from "../Post";
import { useDispatch, useSelector } from "react-redux";
import {
	getSinglePost,
	PostSelectors,
} from "../../../redux/reducers/postSlice";
import { useParams } from "react-router-dom";

const SelectedPost = () => {
	const dispatch = useDispatch();
	const params = useParams();
	const { id } = params;
	const singlePost = useSelector(PostSelectors.getSinglePost);

	useEffect(() => {
		if (id) {
			dispatch(getSinglePost(id));
		}
	}, []);

	return singlePost ? (
		<Post singlePost={singlePost} />
	) : (
		<div> 404 not found </div>
	);
};
export default SelectedPost;
