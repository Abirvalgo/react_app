import React, { FC, ReactNode } from "react";

import styles from "./Title.module.scss";

type TitleProps = {
	title: string;
};

const Title: FC<TitleProps> = ({ title }) => {
	return (
		<div className={styles.titletext}>
			<h1>{title}</h1>
		</div>
	);
};

export default Title;
