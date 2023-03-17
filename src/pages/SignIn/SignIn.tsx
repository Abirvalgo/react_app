import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styles from "./SignIn.module.scss";
import Title from "../../components/Title";
import Input from "../../components/Input";
import classNames from "classnames";
import Button from "../../components/Button";
import { ButtonType } from "../../utils/@globalTypes";
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
						<NavLink to={RoutesList.SignUp} className={styles.signInbtn}>
							Sign Up
						</NavLink>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignIn;
