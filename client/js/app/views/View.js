class View {

	constructor(elemento) {
		this._elemento = elemento;
	}

	template(model) {
		throw new Error('O Método template() deve ser implementado.');
	}

	update(model) {
		return this._elemento.innerHTML = this.template(model);
	}
}