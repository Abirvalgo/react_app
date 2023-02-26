import React, { FC } from "react";
import styles from "./Post.module.scss";
import { BookmarkIcon, DislikeIcon, LikeIcon } from "../../assets/icons";
import { PostProps } from "./types";

const Post: FC<PostProps> = ({ post }) => {
	const { image, text, title } = post;
	return (
		<div>
			<div className={styles.container}>
				<div className={styles.breadCrumbs}>
					<div className={styles.home}>Home</div>
					<div className={styles.postNum}>Post 14278</div>
				</div>
				<div className={styles.postContainer}>
					<div className={styles.pageContent}>
						<div className={styles.title}>{title}</div>
						<img src={image} className={styles.image}></img>
						<div className={styles.text}>{text}</div>
					</div>
					<div className={styles.icons}>
						<div className={styles.iconThumbs}>
							<div className={styles.iconLike}>
								<LikeIcon />
							</div>
							<div className={styles.iconDislike}>
								<DislikeIcon />
							</div>
						</div>
						<div>
							<div className={styles.iconBookMark}>
								<BookmarkIcon /> Add to favorites
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Post;
