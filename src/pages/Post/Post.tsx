import React, { FC } from "react";
import styles from "./Post.module.scss";
import {
	BookmarkIcon,
	BookmarkIconSaved,
	DislikeIcon,
	LikeIcon,
	MoreIcon,
} from "../../assets/icons";
import { CardType } from "../../utils/@globalTypes";
import { Theme, useThemeContext } from "../../context/Theme/Context";
import {
	LikeStatus,
	PostSelectors,
	setPostVisibility,
	setSavedPosts,
	setSelectedPost,
	setStatus,
} from "../../redux/reducers/postSlice";
import { useSelector } from "react-redux";
import classNames from "classnames";

type SinglePostProps = {
	singlePost: CardType;
};
const Post: FC<SinglePostProps> = ({ singlePost }) => {
	const { theme } = useThemeContext();
	const isDark = theme === Theme.Dark;
	const { image, text, title, id, date } = singlePost;

	const likedPosts = useSelector(PostSelectors.getLikedPosts);
	const dislikedPosts = useSelector(PostSelectors.getDislikedPosts);
	const likedIndex = likedPosts.findIndex((post) => post.id === singlePost.id);
	const dislikedIndex = dislikedPosts.findIndex(
		(post) => post.id === singlePost.id
	);

	const savedPosts = useSelector(PostSelectors.getSavedPosts);
	const savedPostsIndex = savedPosts.findIndex(
		(post) => post.id === singlePost.id
	);

	return (
		<div
			className={classNames(styles.container, {
				[styles.darkContainer]: isDark,
			})}
		>
			<div className={classNames(styles.infoContainer)}>
				<div className={styles.mainInfoContainer}>
					<div className={styles.titleContainer}>
						<div className={styles.date}>{date}</div>
						<div
							className={classNames(styles.title, {
								[styles.darkTitle]: isDark,
							})}
							onClick={() => {}}
						>
							{title}
						</div>
					</div>
					<div className={styles.text}>{text}</div>
				</div>
				<img src={image} className={classNames(styles.image)} />
			</div>
			<div className={styles.footer}>
				<div
					className={classNames(styles.iconContainer, {
						[styles.darkIconContainer]: isDark,
					})}
				>
					<div onClick={() => {}} className={styles.iconWrapper}>
						<LikeIcon />
						<div>{likedIndex > -1 && 1}</div>
					</div>
					<div onClick={() => {}} className={styles.iconWrapper}>
						<DislikeIcon />
						<div>{dislikedIndex > -1 && 1}</div>
					</div>
				</div>
				<div
					className={classNames(styles.iconContainer, {
						[styles.darkIconContainer]: isDark,
					})}
				>
					<div onClick={() => {}}>
						{savedPostsIndex > -1 ? <BookmarkIconSaved /> : <BookmarkIcon />}
					</div>
					<div onClick={() => {}}>
						<MoreIcon />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Post;

// import React, { FC } from "react";
// import styles from "./Post.module.scss";
// import { BookmarkIcon, DislikeIcon, LikeIcon } from "../../assets/icons";
// import { PostProps } from "./types";

// const Post: FC<PostProps> = ({ post }) => {
// 	const { image, text, title, id } = post;

// 	return (
// 		<div>
// 			<div className={styles.container}>
// 				<div className={styles.breadCrumbs}>
// 					<div className={styles.home}>Home</div>
// 					<div className={styles.postNum}>Post {id}</div>
// 				</div>
// 				<div className={styles.postContainer}>
// 					<div className={styles.pageContent}>
// 						<div className={styles.title}>{title}</div>
// 						<img src={image} className={styles.image}></img>
// 						<div className={styles.text}>{text}</div>
// 					</div>
// 					<div className={styles.icons}>
// 						<div className={styles.iconThumbs}>
// 							<div className={styles.iconLike}>
// 								<LikeIcon />
// 							</div>
// 							<div className={styles.iconDislike}>
// 								<DislikeIcon />
// 							</div>
// 						</div>
// 						<div>
// 							<div className={styles.iconBookMark}>
// 								<BookmarkIcon /> Add to favorites
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default Post;
