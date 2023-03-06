import React, { FC, ReactNode } from "react";
import classNames from "classnames";

import styles from "./Title.module.scss";
import { Theme, useThemeContext } from "../../context/Theme/Context";

type TitleProps = {
	title: string;
};

const Title: FC<TitleProps> = ({ title }) => {
	const { theme } = useThemeContext();

	return (
		<h1
			className={classNames(styles.title, {
				[styles.darkTitle]: theme === Theme.Dark,
			})}
		>
			{title}
		</h1>
	);
};

export default Title;
