import React from "react";
import "./App.css";
import Button from "./components/Button";
import User from "./components/User";
import classNames from "classnames";
import { ButtonType } from "./components/Button/Button";
import Title from "./components/Title";
import Tabs from "./components/Tabs";
import MenuButton from "./components/MenuButton";

const App = () => {
	return (
		<div>
			<Button title={`Primary`} type={ButtonType.Primary} onClick={() => {}} />
			<Button
				disabled
				title={`Secondary`}
				type={ButtonType.Secondary}
				onClick={() => {}}
			/>
			<Button title={`Error`} type={ButtonType.Error} onClick={() => {}} />
			<User username={"Artem Malkin"} />
			<Title text={"Blog"} />
			<Tabs />
			<MenuButton />
		</div>
	);
};

export default App;
