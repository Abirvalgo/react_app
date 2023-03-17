import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Title from "../../components/Title";
import Tabs from "../../components/Tabs";
import CardsList from "../../components/CardsList";
import styles from "./Home.module.scss";
import classNames from "classnames";
import { Theme, useThemeContext } from "../../context/Theme/Context";
import SelectedPostModal from "./SelectedPostModal";
import { getAllPosts, PostSelectors } from "../../redux/reducers/postSlice";

const Home = () => {
	const dispatch = useDispatch();

	//TODO remove on next lesson
	const params = useParams();
	console.log("Id from url", params?.id);

	const postsList = useSelector(PostSelectors.getAllPosts);

	const { theme } = useThemeContext();

	useEffect(() => {
		dispatch(getAllPosts());
	}, []);

	return (
		<div
			className={classNames(styles.container, {
				[styles.darkContainer]: theme === Theme.Dark,
			})}
		>
			<Title title={"Blog"} />
			<Tabs />
			<CardsList cardsList={postsList} />
			<SelectedPostModal />
		</div>
	);
};

export default Home;
