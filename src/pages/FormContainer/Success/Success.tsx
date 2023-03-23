import React, { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import styles from "./Success.module.scss";
import Title from "../../../components/Title";
import classNames from "classnames";
import Button from "../../../components/Button";
import { ButtonType } from "../../../utils/@globalTypes";
import { Theme, useThemeContext } from "../../../context/Theme/Context";
import { RoutesList } from "../../Router";

const Success = () => {
	const { theme } = useThemeContext();
	const isDark = theme === Theme.Dark;
	const navigate = useNavigate();

	const onHomeClick = () => {
		navigate(RoutesList.Home);
	};

	return (
		<div
			className={classNames(styles.container, {
				[styles.containerDark]: isDark,
			})}
		>
			<div
				className={classNames(styles.backHome, {
					[styles.backHomeDark]: isDark,
				})}
				onClick={onHomeClick}
			>
				Back to home
			</div>
			<div className={classNames(styles.title)}>
				<Title title={"Success"} />
			</div>
			<div className={styles.wrapper}>
				<div
					className={classNames(styles.email, {
						[styles.emailDark]: isDark,
					})}
				>
					<div>Email confirmed.</div>
					Your registration is now completed
					<div className={styles.button}>
						<Button
							title={"Go to Home"}
							onClick={onHomeClick}
							type={ButtonType.Primary}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Success;
