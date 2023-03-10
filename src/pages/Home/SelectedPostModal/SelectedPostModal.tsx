import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ModalSwitcher from "../../../components/ModalSwitcher";
import {
	ModalSelectors,
	changeModal,
	visibleModal,
} from "../../../redux/reducers/postSlice";
import Card from "../../../components/Card";
import { CardSize } from "../../../components/Card/types";

const SelectedPostModal = () => {
	const dispatch = useDispatch();
	const isVisible = useSelector(ModalSelectors.getModalVisible);
	const selectedPost = useSelector(ModalSelectors.getModalValue);
	const onClose = () => {
		dispatch(changeModal(null));
		dispatch(visibleModal(false));
	};
	return (
		<ModalSwitcher isVisible={isVisible} onClose={onClose}>
			{selectedPost ? <Card card={selectedPost} size={CardSize.Large} /> : null}
		</ModalSwitcher>
	);
};
export default SelectedPostModal;
