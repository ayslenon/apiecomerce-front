import { Link } from "react-router-dom";
import "./index.css";

export const CardProduto = (props: any) => {
	return (
		<div>
			<img src="" alt="" />
			<div>
				<h1>{props.produto.nomeProduto}</h1>
				<h1>{props.produto.precoProduto}</h1>
			</div>
		</div>
	);
};
