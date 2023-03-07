import React, { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import styles from "./SignUp.module.scss";
import Title from "../../components/Title";
import Input from "../../components/Input";
import classNames from "classnames";
import Button from "../../components/Button";
import { ButtonType } from "../../components/Button/Button";
import { Theme, useThemeContext } from "../../context/Theme/Context";
import { RoutesList } from "../Router";

const SignUp = () => {
	const [userName, setUserName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	const onChangeUserName = (value: string) => {
		setUserName(value);
	};
	const onChangeEmail = (value: string) => {
		setEmail(value);
	};
	const onChangePassword = (value: string) => {
		setPassword(value);
	};
	const onSignUpClick = () => {
		navigate(RoutesList.Confirm);
	};
	const onHomeClick = () => {
		navigate(RoutesList.Home);
	};
	const onSignInNavClick = () => {
		navigate(RoutesList.SignIn);
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
				<Title title={"Sign Up"} />
			</div>
			<div className={styles.wrapper}>
				<div
					className={classNames(styles.inputContainer, {
						[styles.inputContainerDark]: isDark,
					})}
				>
					<div className={styles.input}>
						<Input
							value={userName}
							onChange={onChangeUserName}
							type={"text"}
							title="Name"
							placeholder="Your name"
						/>
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
						<Input
							value={password}
							onChange={onChangePassword}
							type={"password"}
							title="Confirm password"
							placeholder="Confirm password"
						/>
					</div>
					<div className={styles.button}>
						<Button
							title={"Sign Up"}
							type={ButtonType.Primary}
							onClick={onSignUpClick}
						/>
					</div>
					<div
						className={classNames(styles.signUp, {
							[styles.signUpDark]: isDark,
						})}
					>
						Already have an account?
						<div className={styles.signUpbtn} onClick={onSignInNavClick}>
							Sign Up
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignUp;
