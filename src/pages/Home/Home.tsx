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
import { TabsNames } from "src/utils/@globalTypes";

const Home = () => {
	const [activeTab, setActiveTab] = useState(TabsNames.All);

	const onTabClick = (key: TabsNames) => () => setActiveTab(key);
	const dispatch = useDispatch();

	const postsList = useSelector(PostSelectors.getAllPosts);
	const favouriteList = useSelector(PostSelectors.getLikedPosts);
	const myPostsList = useSelector(PostSelectors.getMyPosts);
	const favouritesList = useSelector(PostSelectors.getSavedPosts);
	const { theme } = useThemeContext();

	const getCurrentList = () => {
		switch (activeTab) {
			case TabsNames.Popular:
				return favouriteList;
			case TabsNames.MyPosts:
				return myPostsList;
			case TabsNames.Favourites:
				return favouritesList;
			case TabsNames.All:
			default:
				return postsList;
		}
	};

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
			<Tabs activeTab={activeTab} onTabClick={onTabClick} />
			<CardsList cardsList={getCurrentList()} />
			<SelectedPostModal />
		</div>
	);
};

export default Home;
