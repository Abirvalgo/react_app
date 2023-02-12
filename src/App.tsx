import React from "react";
import "./App.css";
import Button from "./components/Button";
import classNames from "classnames"
import { ButtonType } from "./components/Button/Button";

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
		</div>
	);
};

export default App;
