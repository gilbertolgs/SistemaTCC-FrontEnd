<script lang="ts">
    import { goto } from '$app/navigation';
    import { PUBLIC_PAGENAME } from '$env/static/public';
    import logo from '$lib/images/logoVazia.png';
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

    function openProject(id: number){
        goto('/projeto');
    }
</script>
<svelte:head>
	<title>{PUBLIC_PAGENAME} - Bancas</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="flex items-center flex-col">
    <h1>
        Bancas dos Cursos
    </h1>
    <div class="shadow-sm my-8 relative rounded-xl overflow-auto bg-slate-50 w-[70%]">
        <table class="border-collapse table-auto w-full text-sm my-3">
            {#each bancas as banca}
            <thead class="">
                <tr>
                    <th>{banca.curso}</th>
                </tr>
            </thead>
            <tbody class="bg-white dark:bg-slate-800">
                {#each banca.membros as membro}
                <tr class="hover:bg-slate-100 dark:hover:bg-slate-700 cursor-pointer">
                    <th class="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                        <p>{membro}</p>
                    </th>
                </tr>
                {/each}
            </tbody>
            {/each}
            </table>
    </div>
</div>