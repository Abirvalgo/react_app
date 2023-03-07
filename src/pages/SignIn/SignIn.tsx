import React, { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import styles from "./SignIn.module.scss";
import Title from "../../components/Title";
import Input from "../../components/Input";
import classNames from "classnames";
import Button from "../../components/Button";
import { ButtonType } from "../../components/Button/Button";
import { Theme, useThemeContext } from "../../context/Theme/Context";
import { RoutesList } from "../Router";

const SignIn = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	const onChangeEmail = (value: string) => {
		setEmail(value);
	};
	const onChangePassword = (value: string) => {
		setPassword(value);
	};
	const onSignInClick = () => {
		navigate(RoutesList.Success);
	};
	const onHomeClick = () => {
		navigate(RoutesList.Home);
	};
	const onSignInNavClick = () => {
		navigate(RoutesList.SignUp);
	};

	const { theme } = useThemeContext();
	const isDark = theme === Theme.Dark;

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
				<Title title={"Sign In"} />
			</div>
			<div className={styles.wrapper}>
				<div
					className={classNames(styles.inputContainer, {
						[styles.inputContainerDark]: isDark,
					})}
				>
					<div className={styles.input}>
						<Input
							value={email}
							onChange={onChangeEmail}
							type={"text"}
							title="Email"
							placeholder="Your email"
						/>
						<Input
							value={password}
							onChange={onChangePassword}
							type={"password"}
							title="Password"
							placeholder="Your password"
						/>
					</div>
					<div
						className={classNames(styles.forgotPassword, {
							[styles.forgotPasswordDark]: isDark,
						})}
					>
						Forgot password?
					</div>
					<div className={styles.button}>
						<Button
							title={"Sign In"}
							type={ButtonType.Primary}
							onClick={onSignInClick}
						/>
					</div>
					<div
						className={classNames(styles.signUp, {
							[styles.signUpDark]: isDark,
						})}
					>
						Don’t have an account?{" "}
						<div className={styles.signInbtn} onClick={onSignInNavClick}>
							Sign Up
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignIn;