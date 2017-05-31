class NegociacoesView extends View {

	constructor(elemento) {
		super(elemento);
	}

	template(model) {
		return `
		<table class="table table-hover table-bordered">
			<thead>
				<tr>
					<th onclick="negociacao.ordena('data')">DATA</th>
					<th onclick="negociacao.ordena('quantidade')">QUANTIDADE</th>
					<th onclick="negociacao.ordena('valor')">VALOR</th>
					<th onclick="negociacao.ordena('volume')">VOLUME</th>
				</tr>
			</thead>

			<tbody>

				${model.negociacoes.map(response => `
					<tr>
						<td>${DateHelper.dateToStr(response.data)}</td>
						<td>${response.quantidade}</td>
						<td>${response.valor}</td>
						<td>${response.volume}</td>		
					</tr>	
				`).join('')}

			</tbody>
				
			<tfoot>
				<td colspan='3'></td>
				<td>
					${model.volumeTotal}
				</td>
			</tfoot>
		</table>
		`;
	}
}