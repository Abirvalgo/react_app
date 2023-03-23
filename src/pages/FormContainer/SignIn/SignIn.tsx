import React, { useEffect, useMemo, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styles from "./SignIn.module.scss";
import Title from "../../../components/Title";
import Input from "../../../components/Input";
import classNames from "classnames";
import Button from "../../../components/Button";
import { ButtonType } from "../../../utils/@globalTypes";
import { Theme, useThemeContext } from "../../../context/Theme/Context";
import { RoutesList } from "../../Router";
import FormContainer from "../FormContainer";

const SignIn = () => {
	const { theme } = useThemeContext();
	const isDark = theme === Theme.Dark;

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const [emailError, setEmailError] = useState("");
	const [passwordError, setPasswordError] = useState("");

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
	const onResetPassword = () => {
		navigate(RoutesList.ResetPassword);
	};
	useEffect(() => {
		if (email.length === 0) {
			setEmailError("Email is a required field");
		} else {
			setEmailError("");
		}
	}, [email]);

	useEffect(() => {
		if (password.length === 0) {
			setPasswordError("Password is a required field");
		} else {
			setPasswordError("");
		}
	}, [password]);

	const isValid = useMemo(() => {
		return emailError.length === 0 && passwordError.length === 0;
	}, [emailError, passwordError]);

	return (
		// <FormContainer title="Sign In">
		<>
			<div className={styles.input}>
				<Input
					value={email}
					onChange={onChangeEmail}
					type={"text"}
					title="Email"
					placeholder="Your email"
					errorText={emailError}
				/>
				<Input
					value={password}
					onChange={onChangePassword}
					type={"password"}
					title="Password"
					placeholder="Your password"
					errorText={passwordError}
				/>
			</div>
			<div
				className={classNames(styles.forgotPassword, {
					[styles.forgotPasswordDark]: isDark,
				})}
				onClick={onResetPassword}
			>
				Forgot password?
			</div>
			<div className={styles.button}>
				<Button
					title={"Sign In"}
					type={ButtonType.Primary}
					onClick={onSignInClick}
					disabled={!isValid}
				/>
			</div>
			<div
				className={classNames(styles.signUp, {
					[styles.signUpDark]: isDark,
				})}
			>
				Don’t have an account?
				<NavLink to={RoutesList.SignUp} className={styles.signInbtn}>
					Sign Up
				</NavLink>
			</div>
		</>
		// </FormContainer>
	);
};

export default SignIn;