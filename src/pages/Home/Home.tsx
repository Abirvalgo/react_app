import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactPaginate from "react-paginate";
import Title from "src/components/Title";
import Tabs from "src/components/Tabs";
import CardsList from "src/components/CardsList";
import styles from "./Home.module.scss";
import classNames from "classnames";
import { Theme, useThemeContext } from "src/context/Theme/Context";
import SelectedPostModal from "./SelectedPostModal";
import { getAllPosts, PostSelectors } from "src/redux/reducers/postSlice";
import { TabsNames } from "src/utils/@globalTypes";
import { PER_PAGE } from "src/utils/constants";

enum Order {
	Title = "title",
	Date = "date",
}

const Home = () => {
	const [activeTab, setActiveTab] = useState(TabsNames.All);
	const [currentPage, setCurrentPage] = useState(1);

	const onTabClick = (key: TabsNames) => () => {
		setActiveTab(key);
		setCurrentPage(1);
	};
	const dispatch = useDispatch();

	const postsList = useSelector(PostSelectors.getAllPosts);
	const popularList = useSelector(PostSelectors.getLikedPosts);
	const myPostsList = useSelector(PostSelectors.getMyPosts);
	const favouritesList = useSelector(PostSelectors.getSavedPosts);
	const postsCount = useSelector(PostSelectors.getAllPostsCount);
	const pagesCount = Math.ceil(postsCount / PER_PAGE);
	const { theme } = useThemeContext();

	const getCurrentList = () => {
		switch (activeTab) {
			case TabsNames.Popular:
				return popularList;
			case TabsNames.MyPosts:
				return myPostsList;
			case TabsNames.Favourites:
				return favouritesList;
			case TabsNames.All:
			default:
				return postsList;
		}
	};

	// useEffect(() => {
	// 	dispatch(getAllPosts());
	// }, []);

	useEffect(() => {
		const offset = PER_PAGE * (currentPage - 1);
		dispatch(getAllPosts({ offset }));
	}, [currentPage]);
	const onPageChange = ({ selected }: { selected: number }) => {
		setCurrentPage(selected + 1);
	};

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
			{activeTab !== TabsNames.Popular &&
				activeTab !== TabsNames.Favourites && (
					<ReactPaginate
						pageCount={pagesCount}
						onPageChange={onPageChange}
						containerClassName={styles.pagesContainer}
						pageClassName={styles.pageNumber}
						breakClassName={styles.pageNumber}
						breakLinkClassName={styles.linkPage}
						activeLinkClassName={styles.linkPage}
						pageLinkClassName={styles.linkPage}
						activeClassName={styles.activePageNumber}
						nextClassName={classNames(styles.arrowButton, {
							[styles.blockedButton]: currentPage === pagesCount,
						})}
						previousClassName={classNames(styles.arrowButton, {
							[styles.blockedButton]: currentPage === 1,
						})}
						previousLinkClassName={styles.linkPage}
						nextLinkClassName={styles.linkPage}
					/>
				)}
		</div>
	);
};

export default Home;
