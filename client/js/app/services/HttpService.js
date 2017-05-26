class HttpService {

	/**
	 * Retorna os dados do servidor
	 * @param  String url Url do servidor
	 * @return Promise com os dados da requisição
	 */
	get(url) {

		return new Promise((resolve, reject) => {

			// instancia o objeto para requisição HTTP
			let xhr = new XMLHttpRequest();

			// requisição GET na lista de negociacoes da semana
			xhr.open('GET', url);

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
				 		resolve(JSON.parse(xhr.responseText));
				 	} else {
				 		reject(xhr.responseText);
				 	}
				 }
			};

			// envia a requisição
			xhr.send();
		});
	}

	/**
	 * Envia dados ao servidor
	 * @param  String url   Url do servidor
	 * @param  Object dados Dados a serem enviados para o servidor
	 * @return Promise Dados vindos do servidor
	 */
	post(url, dados) {

		return new Promise((resolve, reject) => {

			let xhr = new XMLHttpRequest;
			// prepara a requisição para POST
			xhr.open('POST', url, true);
			// seta o cabeçalho 
			xhr.setRequestHeader('Content-Type', 'application/json');
			// chega o status ao final da requisição
			xhr.onreadystatechange = () => {

				if (xhr.readyState == 4) {

					if (xhr.status == 200) {
						resolve(JSON.parse(xhr.responseText));
					} else {
						console.log(xhr.responseText);
						reject(xhr.responseText);
					}

				}
			};

			// envia os dados ao servidor
			xhr.send(JSON.stringify(dados)); // stringify para converter para uma string no formato JSON
		});

	}
}