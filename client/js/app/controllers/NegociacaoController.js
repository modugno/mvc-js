class NegociacaoController {

	constructor() {
		
		// cria um atalho pra usar o querySelector (igual do jQuery)
		let $ = document.querySelector.bind(document);
		// instancia o objeto
		let self = this;

		// pega os ados do formulário
		this._inputData  = $('#data');
		this._inputQtde  = $('#quantidade');
		this._inputValor = $('#valor');
		
		// fabrica lista de negociacoes
		this._listaNegociacoes = new Bind(
			new ListaNegociacoes(),
			new NegociacoesView($('#negociacoesView')),
			'adiciona', 'esvaziar'); 

		// fabrica as mensagem
		this._mensagem = new Bind(
			new Mensagem(),
			new MensagemView($('#mensagemView')),
			'texto');
		
	}


	adiciona(event) {
		event.preventDefault();
		
		// adiciona na lista de negociacoes
		this._listaNegociacoes.adiciona(this._criaNegociacao());
		this._mensagem.texto = 'Negociação adicionada com sucesso.';
		this._limpaFormulario();
	}

	apaga() {
		this._listaNegociacoes.esvaziar();
		this._mensagem.texto = 'Negociações apagadas com sucesso.';
	}

	_criaNegociacao() {
		// monta a model
		return new Negociacao(
			DateHelper.strToDate(this._inputData.value),
			this._inputQtde.value,
			this._inputValor.value
		);
	}

	_limpaFormulario() {
		this._inputData.value  = '';
		this._inputValor.value = 0.0;
		this._inputQtde.value  = 0;

		this._inputData.focus();
	}

	importarNegociacao() {

		let service = new NegociacoesService();
		service.getNegociacoesDaSemana((erro, negociacoes) => {

			// se tiver erro, ja printa na tela
			if (erro) {
				console.log(erro);
				return;
			}

			negociacoes.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));
			console.log('Negociação adicionada com sucesso.');

		});
	}
}