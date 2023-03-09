import React from "react";

import { MoreIcon } from "../../assets/icons";
import styles from "./ModalSwitcher.module.scss";
import { Modal, useModalContext } from "../../context/Modal/Context";
import classNames from "classnames";

const ModalSwitcher = () => {
	const { modalState, onChangeModal } = useModalContext();

	const onClick = (value: Modal) => () => onChangeModal(value);

	return (
		<div className={styles.button} onClick={onClick(Modal.Opened)}>
			<MoreIcon />
		</div>
	);
};

export default ModalSwitcher;
