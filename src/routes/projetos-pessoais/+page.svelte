<script lang="ts">
    import logo from '$lib/images/logoVazia.png';
    let projetos = [
        {
            nome: "Projeto 1",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            id: 1
        },
        {
            nome: "Projeto 2",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            id: 2
        },
        {
            nome: "Projeto 3",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            id: 3
        }
    ]

    function openProject(id: number){

    }
</script>
<svelte:head>
	<title>SGTCC - Seus Projetos</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="flex items-center">
    <div class="shadow-sm my-8 relative rounded-xl overflow-auto bg-slate-50">
        <table class="border-collapse table-auto w-full text-sm my-3">
            <thead class="">
                <tr>
                    <th>Nome</th>
                    <th>Descricao</th>
                </tr>
            </thead>
            <tbody class="bg-white dark:bg-slate-800">
                {#each projetos as projeto}
                <tr class="hover:bg-slate-100 dark:hover:bg-slate-700 cursor-pointer" on:click={() => {openProject(projeto.id)} }>
                        <th class="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                            <p>{projeto.nome}</p>
                        </th>
                        <th class="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                            <p>{projeto.descricao}</p>
                        </th>
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>
</div>