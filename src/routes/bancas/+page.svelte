<script lang="ts">
    import { goto } from '$app/navigation';
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
        },
        {
            nome: "Projeto 4",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            id: 4
        }
    ]

    function openProject(id: number){
        goto('/projeto');
    }
</script>
<svelte:head>
	<title>SGTCC - Bancas</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="flex items-center flex-col">
    <h1>
        Bancas dos Cursos
    </h1>
    <div class="shadow-sm my-8 relative rounded-xl overflow-auto bg-slate-50 flex justify-between flex-wrap">
        <div>
            
        </div>
    </div>
</div>