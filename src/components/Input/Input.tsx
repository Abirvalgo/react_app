import React, { ChangeEvent, FC, useState } from "react";
import classNames from "classnames";
import styles from "./Input.module.scss";

type InputProps = {
	title: string;
	placeholder: string;
	value: string;
	onChange: (value: string) => void;
	disabled?: boolean;
	errorText?: string;
};

const Input: FC<InputProps> = ({
	title,
	placeholder,
	value,
	onChange,
	disabled,
	errorText,
}) => {
	const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
		onChange(e.target.value);
	};
	return (
		<div>
			<p className={styles.title}>{title}</p>
			<input
				className={classNames(styles.input, {
					[styles.disabled]: disabled,
					[styles.error]: errorText,
				})}
				type="text"
				placeholder={placeholder}
				value={value}
				disabled={disabled}
				onChange={onChangeText}
			/>
			{errorText && <div className={styles.errorText}>{errorText}</div>}
		</div>
	);
};

export default Input;
