import { createContext, useEffect, useState } from "react";

import { toast } from "react-toastify";
export interface userCadastroType {
	email: string;
	password: string;
	username?: string;
}

export interface userLoginType {
	email: string;
	Authorization: string;
}

export interface userType {
	login: userLoginType;
	username: string;
}
export interface authStateType {
	loggedUser: userType;
}
interface authProviderProps {
	children: React.ReactNode;
}

export interface authContextType {
	authState: authStateType;
	login: (user: userLoginType) => void;
	logout: () => void;
}

const initialState: authStateType = {
	loggedUser: {
		login: { email: "", Authorization: "" },
		username: "",
	},
};

export const chartContext = createContext<authContextType>({
	authState: initialState,
	login: () => {
		//
	},
	logout: () => {
		//
	},
});

export const CharProvider = ({ children }: authProviderProps) => {
	const [authState, setAuthState] = useState(initialState);
	useEffect(() => {
		const user = JSON.parse(
			sessionStorage.getItem("@APIE_user") as string
		) as userType;
		if (user?.username?.length > 0) {
			const newState = {
				loggedUser: user,
			} as authStateType;
			setAuthState(newState);
		}
	}, []);

	function login(u: userLoginType) {}

	function logout() {}

	return (
		<chartContext.Provider value={{ authState, login, logout }}>
			{children}
		</chartContext.Provider>
	);
};
