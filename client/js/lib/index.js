// campos do formulário
var campos = [
	document.querySelector('#data'),
	document.querySelector('#quantidade'),
	document.querySelector('#valor')
];	

// tbody 
var $tbody = document.querySelector('.table tbody');

// evento de submeter o formulário
document.querySelector('.form').addEventListener('submit', function(event) {

	event.preventDefault();

	// cria a tr para a tabela
	var $tr = document.createElement('tr');

	// popula os campos e cria a linha da tabela
	campos.forEach(function(campo) {
		var $td = document.createElement('td');
		$td.textContent = campo.value;
		$tr.appendChild($td);
	});

	// cria a celula de volume
	var $tdVolume = document.createElement('td');
	$tdVolume.textContent = campos[1].value * campos[2].value;

	// insere na linha
	$tr.appendChild($tdVolume);

	// insere na tabela
	$tbody.appendChild($tr);

	// limpa o formulário
	campos[0].value = '';
	campos[1].value = '1';
	campos[2].value = '0';

	// deixa o foco no campo de data
	campos[0].focus();
});


