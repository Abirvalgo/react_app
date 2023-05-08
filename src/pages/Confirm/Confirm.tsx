import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import styles from "./Confirm.module.scss";
import Title from "../../components/Title";
import classNames from "classnames";
import Button from "../../components/Button";
import { ButtonType } from "../../utils/@globalTypes";
import { Theme, useThemeContext } from "../../context/Theme/Context";
import { RoutesList } from "../Router";

const Confirm = () => {
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
			<NavLink to={RoutesList.Home}
				className={classNames(styles.backHome, {
					[styles.backHomeDark]: isDark,
				})}
			>
				Back to home
			</NavLink>
			<div className={classNames(styles.title)}>
				<Title title={"Registration Confirmation"} />
			</div>
			<div className={styles.wrapper}>
				<div
					className={classNames(styles.confirm, {
						[styles.confirmDark]: isDark,
					})}
				>
					<div className={styles.formText}>
						Please activate your account with the activation link in the email
						example@gmail.com.
					</div>
					<div>Please, check your email</div>
					<div className={styles.button}>
						<Button
							title={"Go to home"}
							onClick={onHomeClick}
							type={ButtonType.Primary}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Confirm;