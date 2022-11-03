// interface de erro da api
export interface apiErrorSchema {
	detail: string;
}

// interfaces para token auth
export interface tokenRetrieveSchema {
	username: string;
	password: string;
}

export interface tokenReceiveSchema {
	refresh: string;
	access: string;
}

export interface tokenRefreshSchema {
	refresh: string;
}

export interface tokenRefreshReceiveSchema {
	access: string;
}

// interface para categoria
export interface categoriaSchema {
	id: string;
	nomeCategoria: string;
}

// interfaces para produtos
export interface produtosReadSchema {
	id: number;
	categoriaProduto: string;
	nomeProduto: string;
	descricaoProduto: string;
	precoProduto: number;
	imagemProduto: string;
}

export interface produtosWriteSchema {
	categoriaProduto: number;
	nomeProduto: string;
	descricaoProduto: string;
	precoProduto: number;
	imagemProduto: string;
}

// interfaces para compras
export interface comprasSchema {
	id: number;
	usuario: {
		username: string;
		first_name: string;
		last_name: string;
		email: string;
	};
	itens: [
		{
			id: number;
			quantidade: number;
			subTotal: number;
			idCompra: number;
			produto: produtosReadSchema;
		}
	];
	precoTotal: number;
	data: Date;
	descricaoCompras: string;
}
