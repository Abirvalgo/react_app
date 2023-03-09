import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.module.scss";

import ThemeProvider from "./context/Theme/Provider";
import { Theme } from "./context/Theme/Context";
import ModalProvider from "./context/Modal/Provider";
import { Modal } from "./context/Modal/Context";
import Router from "./pages/Router";
import { changeTheme, ThemeSelectors } from "./redux/reducers/themeSlice";
import { changeModal, ModalSelectors } from "./redux/reducers/postSlice";

const App = () => {
	const dispatch = useDispatch();
	const theme = useSelector(ThemeSelectors.getThemeValue);
	const modalState = useSelector(ModalSelectors.getModalValue);

	const onChangeTheme = (value: Theme) => {
		dispatch(changeTheme(value));
	};
	const onChangeModal = (value: Modal) => {
		dispatch(changeModal(value));
	};

	// const [theme, setTheme] = useState(Theme.Dark);

	// const onChangeTheme = (value: Theme) => {
	// 	setTheme(value);
	// };

	return (
		<ThemeProvider theme={theme} onChangeTheme={onChangeTheme}>
			<ModalProvider modalState={modalState} onChangeModal={onChangeModal}>
				<Router />
			</ModalProvider>
		</ThemeProvider>
	);
};

export default App;
