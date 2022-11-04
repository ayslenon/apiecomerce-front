import { Link, Outlet } from "react-router-dom";

import "./index.css";

const categorias = [
	{ nomeCategoria: "Computador" },
	{ nomeCategoria: "Monitor" },
	{ nomeCategoria: "Teclado" },
	{ nomeCategoria: "Mouse" },
	{ nomeCategoria: "Impressora" },
];

export const MenuLateral = () => {
	return (
		<>
			<nav>
				{categorias.map((item) => {
					return (
						<Link className="link" to="#">
							{item.nomeCategoria}
						</Link>
					);
				})}
			</nav>
			<Outlet />
		</>
	);
};
