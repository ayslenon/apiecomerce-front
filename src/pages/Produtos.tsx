import { useEffect } from "react";
import { api } from "../config/api";
import { Header } from "../components/header/";
import { CardProduto } from "../components/cardProduto/";

const produtos = [
	{
		id: 0,
		categoriaProduto: "Computador",
		nomeProduto: "um pc",
		descricaoProduto: "eh um produto",
		precoProduto: 1000,
		imagemProduto: "",
	},
	{
		id: 1,
		categoriaProduto: "Computador",
		nomeProduto: "Outro pc",
		descricaoProduto: "eh um produto",
		precoProduto: 1400,
		imagemProduto: "",
	},
];

export const Produtos = () => {
	useEffect(() => {
		api.get("produtos").then((res) => {
			console.log(res);
		});
	}, []);
	return (
		<div>
			<Header />
			{produtos.map((produto) => {
				return <CardProduto produto={produto} />;
			})}
		</div>
	);
};
