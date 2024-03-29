import React, { useEffect, useMemo, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styles from "./SignUp.module.scss";
import Input from "src/components/Input";
import classNames from "classnames";
import Button from "src/components/Button";
import { ButtonType, RoutesList } from "src/utils/@globalTypes";
import { Theme, useThemeContext } from "src/context/Theme/Context";
import { useDispatch } from "react-redux";
import { signUpUser } from "src/redux/reducers/authSlice";

const SignUp = () => {
	const { theme } = useThemeContext();
	const isDark = theme === Theme.Dark;

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const [nameTouched, setNameTouched] = useState(false);
	const [passwordTouched, setPasswordTouched] = useState(false);
	const [emailTouched, setEmailTouched] = useState(false);

	const [nameError, setNameError] = useState("");
	const [emailError, setEmailError] = useState("");
	const [passwordError, setPasswordError] = useState("");

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const onChangeUserName = (value: string) => {
		setName(value);
	};
	const onChangeEmail = (value: string) => {
		setEmail(value);
	};
	const onChangePassword = (value: string) => {
		setPassword(value);
	};
	const onChangeConfirmPassword = (value: string) => {
		setConfirmPassword(value);
	};
	const onBlurEmail = () => {
		setEmailTouched(true);
	};

	const onBlurPassword = () => {
		setPasswordTouched(true);
	};

	const onBlurName = () => {
		setNameTouched(true);
	};
	// const onSignUpClick = () => {
	// 	navigate(RoutesList.Confirm);
	// };
	const onSignUpClick = () => {
		dispatch(
			signUpUser({
				data: { username: name, email, password },
				callback: () => navigate(RoutesList.SignIn),
			})
		);
	};

	useEffect(() => {
		if (name.length === 0 && nameTouched) {
			setNameError("Name is a required field");
		} else {
			setNameError("");
		}
	}, [name, nameTouched]);

	useEffect(() => {
		if (email.length === 0 && emailTouched) {
			setEmailError("Email is a required field");
		} else {
			setEmailError("");
		}
	}, [email, emailTouched]);

	useEffect(() => {
		if (passwordTouched) {
			if (password !== confirmPassword) {
				setPasswordError("Passwords must match");
			} else if (password.length === 0 || confirmPassword.length === 0) {
				setPasswordError("Password is required field");
			} else {
				setPasswordError("");
			}
		}
	}, [confirmPassword, password, passwordTouched]);

	const isValid = useMemo(() => {
		return (
			nameError.length === 0 &&
			emailError.length === 0 &&
			passwordError.length === 0 &&
			nameTouched &&
			emailTouched &&
			passwordTouched
		);
	}, [
		nameError,
		emailError,
		passwordError,
		nameTouched,
		emailTouched,
		passwordTouched,
	]);

	// Используем, если не надо показывать никаких ошибок пользователю
	// const isValid = useMemo(() => {
	//   return (
	//     name.length > 0 &&
	//     email.length > 0 &&
	//     password.length > 0 &&
	//     confirmPassword.length > 0 &&
	//     password === confirmPassword
	//   );
	// }, [name, email, password, confirmPassword]);
	return (
		<>
			<div className={styles.input}>
				<Input
					value={name}
					onChange={onChangeUserName}
					onBlur={onBlurName}
					type={"text"}
					title="Name"
					placeholder="Your name"
					errorText={nameError}
				/>
				<Input
					value={email}
					onChange={onChangeEmail}
					onBlur={onBlurEmail}
					type={"text"}
					title="Email"
					placeholder="Your email"
					errorText={emailError}
				/>
				<Input
					value={password}
					onChange={onChangePassword}
					onBlur={onBlurPassword}
					type={"password"}
					title="Password"
					placeholder="Your password"
					errorText={passwordError}
				/>
				<Input
					value={confirmPassword}
					onChange={onChangeConfirmPassword}
					onBlur={onBlurPassword}
					type={"password"}
					title="Confirm password"
					placeholder="Confirm password"
					errorText={passwordError}
				/>
			</div>
			<div className={styles.button}>
				<Button
					title={"Sign Up"}
					type={ButtonType.Primary}
					onClick={onSignUpClick}
					disabled={!isValid}
				/>
			</div>
			<div
				className={classNames(styles.signUp, {
					[styles.signUpDark]: isDark,
				})}
			>
				Already have an account?
				<NavLink to={RoutesList.SignIn} className={styles.signUpbtn}>
					Sign In
				</NavLink>
			</div>
		</>
	);
};

export default SignUp;
