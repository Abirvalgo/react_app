import React, { FC, ReactNode } from "react";

import styles from "./Title.module.scss";

type TitleProps = {
	text: string;
};

const Title: FC<TitleProps> = ({ text }) => {
	return (
		<div className={styles.titletext}>
			<h1>{text}</h1>
		</div>
	);
};

export default Title;
