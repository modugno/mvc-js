class ListaNegociacoes {

	constructor(armadilha) {
		this._negociacoes = [];
		this._armadilha = armadilha;
	}

	adiciona(negociacoes) {
		this._negociacoes.push(negociacoes);
	}

	get negociacoes() {
		return [].concat(this._negociacoes);
	}

	esvaziar() {
		this._negociacoes = [];
	}
}