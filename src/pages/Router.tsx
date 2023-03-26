import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import PagesContainer from "./PagesContainer";
import SignIn from "./FormContainer/SignIn";
import Home from "./Home";
import Success from "./FormContainer/Success";
import SignUp from "./FormContainer/SignUp";
import Confirm from "./FormContainer/Confirm";
import Post from "./Post";
import FormContainer from "./FormContainer";
import ResetPassword from "./FormContainer/ResetPassword";
import NewPassword from "./FormContainer/NewPassword";
import { RoutesList } from "../utils/@globalTypes";
import { useSelector } from "react-redux";
import { AuthSelectors } from "../redux/reducers/authSlice";

// RoutesList в @globaltypes.ts

const Router = () => {
	const isLoggedIn = useSelector(AuthSelectors.getLoggedIn);
	return (
		<BrowserRouter>
			<Routes>
				<Route path={RoutesList.Home} element={<PagesContainer />}>
					<Route path={RoutesList.Home} element={<Home />} />
					<Route path={RoutesList.SinglePost} element={<Post />} />
					<Route path={RoutesList.AccountLogin} element={<FormContainer />}>
						<Route path={RoutesList.SignIn} element={<SignIn />} />
						<Route path={RoutesList.Success} element={<Success />} />
						<Route path={RoutesList.SignUp} element={<SignUp />} />
						<Route path={RoutesList.Confirm} element={<Confirm />} />
						<Route
							path={RoutesList.ResetPassword}
							element={<ResetPassword />}
						/>
						<Route path={RoutesList.NewPassword} element={<NewPassword />} />
					</Route>
					<Route
						path={RoutesList.AddPost}
						element={
							isLoggedIn ? <Home /> : <Navigate to={RoutesList.SignIn} />
						}
					/>
					<Route path={RoutesList.Default} element={<div>404 NOT FOUND</div>} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
