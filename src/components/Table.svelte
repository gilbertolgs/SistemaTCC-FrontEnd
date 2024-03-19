<script lang="ts">

    export let dados: [
        {
			vitae : "dolorem",
			lectus : "ipsum",
			quisquam : "quia"
		},
		{
			vitae : "amet",
			lectus : "consectetur",
			quisquam : "adipisci"
		}
    ];
</script>

<table class="border-collapse table-auto w-full text-sm my-3">
	<thead class="text-text-primary">
		<tr>
			{#each Object.keys(dados[0]) as coluna}
				<th>{coluna}</th>
			{/each}
		<tr/>
	</thead>
	<tbody>
		{#each Object.values(dados) as linha}
			<tr class="bg-base-100 hover:brightness-90">
				{#each Object.values(linha) as celula}
					<td class="border-b p-4 pl-8 text-text-secondary">{celula}</td>
				{/each}
			</tr>
		{/each}
	</tbody>
</table>