import React, { FC } from "react";
import classNames from "classnames";
import { CardProps } from "./types";
import { CardSize } from "../../utils/@globalTypes";
import styles from "./Card.module.scss";
import {
	BookmarkIcon,
	DislikeIcon,
	LikeIcon,
	MoreIcon,
	BookmarkIconSaved,
} from "../../assets/icons";
import { Theme, useThemeContext } from "../../context/Theme/Context";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
	setSelectedPost,
	PostSelectors,
	setPostVisibility,
	LikeStatus,
	setStatus,
	setSavedPosts,
} from "../../redux/reducers/postSlice";

const Card: FC<CardProps> = ({ card, size }) => {
	const { title, text, date, image, id } = card;
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const { theme } = useThemeContext();

	const isVisible = useSelector(PostSelectors.getPostVisibility);
	const isMedium = size === CardSize.Medium;
	const isSmall = size === CardSize.Small;
	const isDark = theme === Theme.Dark;

	const onTitleClick = () => {
		navigate(`/blog/${id}`);
	};

	const onClickMore = () => {
		dispatch(setSelectedPost(card));
		dispatch(setPostVisibility(true));
	};

	const onStatusClick = (status: LikeStatus) => () => {
		dispatch(setStatus({ status, card }));
	};

	const onClickBookmark = () => {
		dispatch(setSavedPosts({ card }));
	};

	const likedPosts = useSelector(PostSelectors.getLikedPosts);
	const dislikedPosts = useSelector(PostSelectors.getDislikedPosts);
	const likedIndex = likedPosts.findIndex((post) => post.id === card.id);
	const dislikedIndex = dislikedPosts.findIndex((post) => post.id === card.id);

	const savedPosts = useSelector(PostSelectors.getSavedPosts);
	const savedPostsIndex = savedPosts.findIndex((post) => post.id === card.id);

	return (
		<div
			className={classNames(styles.container, {
				[styles.darkContainer]: isDark,
			})}
		>
			<div
				className={classNames(styles.infoContainer)}
			>
				<div className={styles.mainInfoContainer}>
					<div className={styles.titleContainer}>
						<div className={styles.date}>{date}</div>
						<div
							className={classNames(styles.title, {
								[styles.mediumTitle]: isMedium || isSmall,
								[styles.darkTitle]: isDark,
							})}
							onClick={onTitleClick}
						>
							{title}
						</div>
					</div>
					<div className={styles.text}>{text}</div>
				</div>
				<img
					src={image}
					className={classNames(styles.image)}
				/>
			</div>
			<div className={styles.footer}>
				<div
					className={classNames(styles.iconContainer, {
						[styles.darkIconContainer]: isDark,
					})}
				>
					<div
						onClick={onStatusClick(LikeStatus.Like)}
						className={styles.iconWrapper}
					>
						<LikeIcon />
						<div>{likedIndex > -1 && 1}</div>
					</div>
					<div
						onClick={onStatusClick(LikeStatus.Dislike)}
						className={styles.iconWrapper}
					>
						<DislikeIcon />
						<div>{dislikedIndex > -1 && 1}</div>
					</div>
				</div>
				<div
					className={classNames(styles.iconContainer, {
						[styles.darkIconContainer]: isDark,
					})}
				>
					<div onClick={onClickBookmark}>
						{savedPostsIndex > -1 ? <BookmarkIconSaved /> : <BookmarkIcon />}
					</div>
					{!isVisible && (
						<div onClick={onClickMore}>
							<MoreIcon />
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Card;
