import React, { FC, ReactNode } from "react";

import styles from "./User.module.scss";

type UserProps = {
	username: string;
};

const User: FC<UserProps> = ({ username }) => {
	function shortName(str: string) {
		const firstLetters = str
			.split(" ")
			.map((word: any) => word.charAt(0))
			.join("");
		return firstLetters;
	}
	return (
		<div className={styles.userframe}>
			<p>{shortName(username)}</p>
			<p>{username}</p>
		</div>
	);
};

export default User;
