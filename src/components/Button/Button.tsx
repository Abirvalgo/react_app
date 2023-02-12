import React, { FC, ReactNode } from "react";
import classNames from "classnames";

import styles from "./Button.module.scss";

export enum ButtonType {
	Primary = "Primary",
	Secondary = "Secondary",
	Error = "Error",
}
type ButtonProps = {
	title: string | ReactNode;
	onClick: () => void;
	type: ButtonType;
	disabled?: boolean;
};

const btnStyles = {
	[ButtonType.Primary]: styles.primaryButton,
	[ButtonType.Secondary]: styles.secondaryButton,
	[ButtonType.Error]: styles.errorButton,
};
const Button: FC<ButtonProps> = ({ title, onClick, type, disabled }) => {
	const buttonClassName = btnStyles[type];
	return (
		<div
			onClick={disabled ? undefined : onClick}
			className={classNames(buttonClassName, {
				[styles.disabledButton]: disabled,
			})}
		>
			{title}
		</div>
	);
};

export default Button;
