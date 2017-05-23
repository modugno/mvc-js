class NegociacoesService {

	/**
	 * Negociacoes da Semana
	 * @param  {Function} callback [description]
	 * @return {[type]}            [description]
	 */
	getNegociacoesDaSemana() {

		return new Promise((resolve, reject) => {

			// instancia o objeto para requisição HTTP
			let xhr = new XMLHttpRequest();

			// requisição GET na lista de negociacoes da semana
			xhr.open('GET', 'negociacoes/semana');

			// quando o estato do XMLHttpRequest mudar
			xhr.onreadystatechange = () => {
				/**
				 * STATUS DA REQUISIÇÃO
				 * 0: Requisição ainda não iniciada
				 * 1: conexão com o servidor estabelecida
				 * 2: requisição recebida
				 * 3: processando requisição
				 * 4: requisição concluida, e resposa pronta
				 */

				 // se a resposta do servidor
				 if (xhr.readyState == 4) {

				 	if (xhr.status == 200) {
				 		resolve(JSON.parse(xhr.responseText)
				 		.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));

				 	} else {
				 		console.log(xhr.responseText);
				 		reject('Não foi possível importar as negociações.');
				 	}
				 }
			};

			// envia a requisição
			xhr.send();

		});
	}

	/**
	 * Negociacoes da Semana Retrasada
	 * @param  {Function} callback [description]
	 * @return {[type]}            [description]
	 */
	getNegociacoesDaSemanaRetrasada() {

		return new Promise((resolve, reject) => {

			// instancia o objeto para requisição HTTP
			let xhr = new XMLHttpRequest();

			// requisição GET na lista de negociacoes da semana
			xhr.open('GET', 'negociacoes/retrasada');

			// quando o estato do XMLHttpRequest mudar
			xhr.onreadystatechange = () => {
				/**
				 * STATUS DA REQUISIÇÃO
				 * 0: Requisição ainda não iniciada
				 * 1: conexão com o servidor estabelecida
				 * 2: requisição recebida
				 * 3: processando requisição
				 * 4: requisição concluida, e resposa pronta
				 */

				 // se a resposta do servidor
				 if (xhr.readyState == 4) {

				 	if (xhr.status == 200) {
				 		
				 		resolve(JSON.parse(xhr.responseText)
				 		.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));

				 	} else {
				 		console.log(xhr.responseText);
				 		reject('Não foi possível importar as negociações.');
				 	}
				 }
			};

			// envia a requisição
			xhr.send();
		});
	}

	/**
	 * Negociacoes da Semana Anterior
	 * @param  {Function} callback [description]
	 * @return {[type]}            [description]
	 */
	getNegociacoesDaSemanaAnterior() {

		return new Promise((resolve, reject) => {

			// instancia o objeto para requisição HTTP
			let xhr = new XMLHttpRequest();

			// requisição GET na lista de negociacoes da semana
			xhr.open('GET', 'negociacoes/anterior');

			// quando o estato do XMLHttpRequest mudar
			xhr.onreadystatechange = () => {
				/**
				 * STATUS DA REQUISIÇÃO
				 * 0: Requisição ainda não iniciada
				 * 1: conexão com o servidor estabelecida
				 * 2: requisição recebida
				 * 3: processando requisição
				 * 4: requisição concluida, e resposa pronta
				 */

				 // se a resposta do servidor
				 if (xhr.readyState == 4) {

				 	if (xhr.status == 200) {
				 		
				 		resolve(JSON.parse(xhr.responseText)
				 		.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));

				 	} else {
				 		console.log(xhr.responseText);
				 		reject('Não foi possível importar as negociações.');
				 	}
				 }
			};

			// envia a requisição
			xhr.send();
		});
	}
}