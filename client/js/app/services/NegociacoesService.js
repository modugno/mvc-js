class NegociacoesService {

	constructor() {
		this._http = new HttpService;
	}

	/**
	 * Retorna todas as negociacoes
	 * @return {[type]} [description]
	 */
	getNegociacoes() {

		return Promise.all([
			this.getNegociacoesDaSemana(),
			this.getNegociacoesDaSemanaAnterior(),
			this.getNegociacoesDaSemanaRetrasada()
		]).then(periodo => {

			let negociacoes = periodo.reduce((dados, periodo) => dados.concat(periodo), []);
			return negociacoes;
		}).catch(erro => {
			throw new Error(erro);
		});
	}

	/**
	 * Negociacoes da Semana
	 * @param  {Function} callback [description]
	 * @return {[type]}            [description]
	 */
	getNegociacoesDaSemana() {

		return this._http.get('negociacoes/semana')
		.then(negociacoes => {
			return negociacoes.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor));
		}).catch(erro => {
			console.log(erro);
			throw new Error('Não foi possível obter as negociações da semana.');
		});
	}

	/**
	 * Negociacoes da Semana Retrasada
	 * @param  {Function} callback [description]
	 * @return {[type]}            [description]
	 */
	getNegociacoesDaSemanaRetrasada() {

		return this._http.get('negociacoes/retrasada')
		.then(negociacoes => {
			return negociacoes.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor));
		}).catch(erro => {
			console.log(erro);
			throw new Error('Não foi possível obter as negociações da semana.');
		});
	}

	/**
	 * Negociacoes da Semana Anterior
	 * @param  {Function} callback [description]
	 * @return {[type]}            [description]
	 */
	getNegociacoesDaSemanaAnterior() {

		return this._http.get('negociacoes/anterior')
		.then(negociacoes => {
			return negociacoes.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor));
		}).catch(erro => {
			console.log(erro);
			throw new Error('Não foi possível obter as negociações da semana.');
		});
	}
}