import React, { FC, ReactNode, useState } from "react";
import classNames from "classnames";
import Button, { ButtonType } from "../Button";
import styles from "./MenuButton.module.scss";
import { CloseMenu, OpenMenu } from "../../assets/icons";

enum ButtonState {
	Opened,
	Closed,
}

const MenuButton = () => {
	const [btnState, setBtnState] = useState(ButtonState.Opened);

	const changeState = () => {
		return btnState === ButtonState.Opened
			? setBtnState(ButtonState.Closed)
			: setBtnState(ButtonState.Opened);
	};
	return (
		<Button
			className={styles.menu}
			title={btnState === ButtonState.Opened ? <OpenMenu /> : <CloseMenu />}
			type={ButtonType.Primary}
			onClick={changeState}
		/>
	);
};

export default MenuButton;
