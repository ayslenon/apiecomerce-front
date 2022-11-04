import { createContext, useEffect, useState } from "react";

import { toast } from "react-toastify";
export interface userLoginType {
	email: string;
	token: string;
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
		login: { email: "", token: "" },
		username: "",
	},
};

export const authContext = createContext<authContextType>({
	authState: initialState,
	login: () => {
		//
	},
	logout: () => {
		//
	},
});

export const AuthProvider = ({ children }: authProviderProps) => {
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
		<authContext.Provider value={{ authState, login, logout }}>
			{children}
		</authContext.Provider>
	);
};
