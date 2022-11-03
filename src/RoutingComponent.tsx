import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { Login } from "./pages/Login";
import { Produtos } from "./pages/Produtos";
import { Produto } from "./pages/Produto";
import { Compras } from "./pages/Compras";
import { Compra } from "./pages/Compra";
import { Carrinho } from "./pages/Carrinho";

function RoutingComponent() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Navigate to="/produtos" />} />;
				<Route path="login" element={<Login />} />;
				<Route path="produtos" element={<Produtos />}>
					<Route path=":id" element={<Produto />} />
				</Route>
				;
				<Route path="compras" element={<Compras />}>
					<Route path=":id" element={<Compra />} />
				</Route>
				;
				<Route path="carrinho" element={<Carrinho />} />;
				<Route
					path="*"
					element={
						<main style={{ padding: "1rem" }}>
							<p>Página não encontrada</p>
						</main>
					}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default RoutingComponent;
