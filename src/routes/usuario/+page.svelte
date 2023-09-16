<script lang="ts">
    import { onMount } from 'svelte';
    import Card from '$components/Card.svelte';
    import { pageName, projetos } from '../stores';

    let queryString = ''; 
    
    
    function updateQueryString() {
      const searchParams = new URLSearchParams(window.location.search);
      queryString += searchParams.toString().split('=')[1];
      login.nome = login.nome + ' ID: ' + queryString;
    }
    
    
    onMount(updateQueryString);

	let login = {
		id: 1,
		nome: 'Gilberto Luis',
		email: 'gilberto@aedb.br',
        papel: 'Aluno',
		senha: '123'
	}
    let editandoPerfil = false;
    function editarPerfil() {
        editandoPerfil = !editandoPerfil;
    }
</script>

<svelte:head>
	<title>{pageName} - {login.nome} </title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="flex items-center h-max mx-auto flex-col w-full text-text-primary bg-bg-primary shadow-xl p-10 gap-4 text-sm rounded-xl mb-2">
    <div class="flex w-full items-center">
        <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="imagem de perfil" class="h-20 w-20 rounded-lg border border-text-primary m-3">
        <div class="flex flex-col text-text-secondary font-bold">
            {#if editandoPerfil}
            Nome de Usuario: <input type="text" placeholder="{login.nome}" class="focus:outline-text-primary rounded-md w-full shadow-sm px-5 py-2 bg-bg-secondary placeholder-text-tertiary">
            E-mail: <input type="text" placeholder="{login.email}" class="focus:outline-text-primary rounded-md w-full shadow-sm px-5 py-2 bg-bg-secondary placeholder-text-tertiary">
            Curso: <input type="text" placeholder="{login.papel}" class="focus:outline-text-primary rounded-md w-full shadow-sm px-5 py-2 bg-bg-secondary placeholder-text-tertiary">
            Papel: <input type="text" placeholder="{login.papel}" class="focus:outline-text-primary rounded-md w-full shadow-sm px-5 py-2 bg-bg-secondary placeholder-text-tertiary">
            {:else}
            Nome de Usuario: {login.nome} <br>
            E-mail: {login.email} <br>
            Curso: Sistemas de Informação <br>
            Papel: {login.papel} <br>
            {/if}
        </div>
        {#if editandoPerfil}
        <button on:click={editarPerfil} class="ml-auto mb-auto hover:brightness-90 bg-bg-primary rounded-xl p-3 pb-2 flex justify-center bg-green-500">
            <span class="material-symbols-outlined">
                done
            </span>
            Salvar
        </button>
        {:else}
        <button on:click={editarPerfil} class="ml-auto mb-auto hover:brightness-90 bg-bg-primary rounded-xl p-3 pb-2 flex justify-center">
            <span class="material-symbols-outlined">
                edit
            </span>
            Editar Perfil
        </button>
        {/if}
    </div>        
</div>
<div class="flex items-center h-max mx-auto flex-col w-full text-text-primary bg-bg-primary shadow-xl p-5 gap-2 text-sm rounded-xl divide-y divide-bg-secondary">
    <div class="text-text-secondary font-bold text-xl">Participante de Projetos:</div>
    <div class="w-full"></div>
    <div class="cardHolderComponent mt-4">
        {#each projetos as projeto}
            <Card
            item={projeto}
            tipo="projeto"
            />
        {/each}
    </div>
</div>