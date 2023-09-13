<script lang="ts">

    import { pageName } from '../stores';
    let bancas = [
        {
            curso: "Sistemas de Informação",
            membros: [
                'Loreno', 'Ipsono'
            ],
            id: 1
        },
        {
            curso: "Administração",
            membros: [
                'Loreno', 'Ipsono'
            ],
            id: 2
        }
    ]
</script>
<svelte:head>
	<title>{pageName} - Bancas</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="flex items-center flex-col">
    <div class="tableHolderComponent">
        <table class="tableComponent">
            {#each bancas as banca}
            <thead class="text-text-primary">
                <tr>
                    <th>{banca.curso}</th>
                </tr>
            </thead>
            <tbody>
                {#each banca.membros as membro}
                <tr class="trComponent">
                    <th class="border-b p-4 pl-8 text-text-secondary">
                        {membro}
                    </th>
                </tr>
                {/each}
            </tbody>
            {/each}
        </table>
    </div>
</div>

