import React, { FC, ReactNode } from "react";
import { Form, NavLink, Outlet } from "react-router-dom";
import classNames from "classnames";

import styles from "./FormContainer.module.scss";
import { Theme, useThemeContext } from "../../context/Theme/Context";
import { RoutesList } from "../Router";
import Title from "../../components/Title";

type FormContainerProps = {
	title: string;
};

const FormContainer: FC<FormContainerProps> = ({ title }) => {
	const { theme } = useThemeContext();
	const isDark = theme === Theme.Dark;

	return (
		<div
			className={classNames(styles.container, {
				[styles.containerDark]: isDark,
			})}
		>
			<NavLink
				to={RoutesList.Home}
				className={classNames(styles.backHome, {
					[styles.backHomeDark]: isDark,
				})}
			>
				Back to home
			</NavLink>
			<div className={classNames(styles.title)}>
				<Title title={"Sign Up"} />
			</div>
			<div className={styles.wrapper}>
				<div
					className={classNames(styles.inputContainer, {
						[styles.inputContainerDark]: isDark,
					})}
				>
					<Outlet />
				</div>
			</div>
		</div>
	);
};

export default FormContainer;
