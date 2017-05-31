class ListaNegociacoes {

	constructor() {
		this._negociacoes = [];
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

	get volumeTotal() {
		return this._negociacoes.reduce((total, n) => total + n.volume, 0.0);
	}

	ordena(criterio) {
		this._negociacoes.sort(criterio);
	}

	inverteOrdem() {
		this._negociacoes.reverse();
	}
}