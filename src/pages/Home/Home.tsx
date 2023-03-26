import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Title from "src/components/Title";
import Tabs from "src/components/Tabs";
import CardsList from "src/components/CardsList";
import styles from "./Home.module.scss";
import classNames from "classnames";
import { Theme, useThemeContext } from "src/context/Theme/Context";
import SelectedPostModal from "./SelectedPostModal";
import { getAllPosts, PostSelectors } from "src/redux/reducers/postSlice";

const Home = () => {
	const dispatch = useDispatch();

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
