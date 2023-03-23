import React, { useState } from "react";
import classNames from "classnames";
import styles from "./ResetPassword.module.scss";

import { Theme, useThemeContext } from "../../../context/Theme/Context";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { ButtonType } from "../../../utils/@globalTypes";
import { useNavigate } from "react-router-dom";
import { RoutesList } from "../../Router";

const ResetPassword = () => {
	const navigate = useNavigate();
	const { theme } = useThemeContext();
	const isDark = theme === Theme.Dark;

	const [email, setEmail] = useState("");

	const onChangeEmail = (value: string) => {
		setEmail(value);
	};
	const onResetPasswordClick = () => {
		navigate(RoutesList.NewPassword);
	};

	return (
		<div
			className={classNames(styles.info, {
				[styles.infoDark]: isDark,
			})}
		>
			You will receive an email with a link to reset your password!
			<div className={styles.inputContainer}>
				<Input
					value={email}
					onChange={onChangeEmail}
					type={"text"}
					title="Email"
					placeholder="Your email"
				/>
			</div>
			<div className={styles.button}>
				<Button
					title={"Reset password"}
					onClick={onResetPasswordClick}
					type={ButtonType.Primary}
				/>
			</div>
		</div>
	);
};

export default ResetPassword;
