class NegociacoesView extends View {

	constructor(elemento) {
		super(elemento);
	}

	template(model) {
		return `
		<table class="table table-hover table-bordered">
			<thead>
				<tr>
					<th>DATA</th>
					<th>QUANTIDADE</th>
					<th>VALOR</th>
					<th>VOLUME</th>
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
					${model.negociacoes.reduce((total, n) => total + n.volume, 0.0)}
				</td>
			</tfoot>
		</table>
		`;
	}
}