class DateHelper {

	constructor() {
		throw new Error('Esta classe não pode ser instanciada');
	}

	static strToDate(texto) {
		
		// expressão regular pra validar formato aaaa-mm-dd
		if (!/\d{4}-\d{2}-\d{2}/.test(texto)) {
			throw new Error('O formato da data deve ser aaaa-mm-dd');
		}

		return new Date(...texto.split('-').map((item, index) => item - index % 2));
	}
	

	static dateToStr(data) {

		return `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`;
	}
}