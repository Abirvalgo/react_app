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
	const [btnState, setBtnState] = useState(false);

	const changeState = () => {
		return setBtnState(!btnState);
	};
	return (
		<Button
			className={styles.menu}
			title={btnState ? <CloseMenu /> : <OpenMenu />}
			type={ButtonType.Primary}
			onClick={changeState}
		/>
	);
};

export default MenuButton;
