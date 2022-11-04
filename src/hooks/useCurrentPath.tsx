import { matchRoutes, RouteMatch, useLocation } from "react-router-dom";

const routes = [
	{ path: "/produtos" },
	{ path: "/produtos/:id" },
	{ path: "/compras" },
	{ path: "/compras/:id" },
	{ path: "/carrinho" },
	{ path: "/login" },
];

export const useCurrentPath = () => {
	const location = useLocation();
	const [{ route }] = matchRoutes(routes, location) as RouteMatch<string>[];

	return route.path;
};
