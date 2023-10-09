<script lang="ts">
    import { onMount } from 'svelte';
    import Card from '$components/Card.svelte';
    import { pageName } from '../stores';
    import Usuario from '$model/Usuario';
    import Api from '$repository/axiosInstance';
    import type Curso from '$model/Curso';
    import type Projeto from '$model/Projeto';
    import { error } from '@sveltejs/kit';

    let queryString = '';
    let idUsuario: number;
    let projetos: Projeto[] = [];
    let usuario: Usuario = new Usuario(
        0,
        '',
        '',
        '',
        '',
        0
    );

    let cursos: Curso[] = [];
    let nomeCurso: string;
    
    
    function updateQueryString() {
      const searchParams = new URLSearchParams(window.location.search);
      queryString += searchParams.toString().split('=')[1];
      idUsuario = parseInt(queryString);

      getData();
    }

    async function getData(){
        cursos = await Api.get(`cursos`);
        usuario = await Api.get(`usuarios/id`, {id : idUsuario});
        projetos = await Api.get(`projetos/porUsuario/${idUsuario}`);

        const cursoUsuario = cursos.find(curso => {
            return curso.id == usuario.idCurso;
        })?.nome;

        if(cursoUsuario){
            nomeCurso = cursoUsuario;
        }

        console.log(cursoUsuario);
        
    }

    onMount(updateQueryString);

    let editandoPerfil = false;
    function editarPerfil() {
        editandoPerfil = !editandoPerfil;
    }

    function salvarPerfil() {
        editandoPerfil = !editandoPerfil;
        
        //Nao feito
        throw error(0, 'Funcionalidade não implementada');
    }
</script>

<svelte:head>
	<title>{pageName} - {usuario.nome} </title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="flex items-center h-max mx-auto flex-col w-full text-text-primary bg-bg-primary shadow-xl p-10 gap-4 text-sm rounded-xl mb-2">
    <div class="flex w-full items-center">
        <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="imagem de perfil" class="h-20 w-20 rounded-lg border border-text-primary m-3">
        <div class="flex flex-col text-text-secondary font-bold">
            {#if editandoPerfil}
            Nome de Usuario: <input type="text" bind:value={usuario.nome} placeholder="{usuario.nome}" class="focus:outline-text-primary rounded-md w-full shadow-sm px-5 py-2 bg-bg-secondary placeholder-text-tertiary">
            E-mail: <input type="text" bind:value={usuario.email} placeholder="{usuario.email}" class="focus:outline-text-primary rounded-md w-full shadow-sm px-5 py-2 bg-bg-secondary placeholder-text-tertiary">
            Curso:  <select name="" id="" bind:value={usuario.idCurso} class="focus:outline-text-primary rounded-md w-full shadow-sm px-5 py-2 bg-bg-secondary">
                {#each cursos as curso}
                    <option value="{curso.id}">{curso.nome}</option>
                {/each}
            </select>
            Papel: <input type="text" bind:value={usuario.papel} placeholder="{usuario.papel}" class="focus:outline-text-primary rounded-md w-full shadow-sm px-5 py-2 bg-bg-secondary placeholder-text-tertiary">
            {:else}
            Nome de Usuario: {usuario.nome} <br>
            E-mail: {usuario.email} <br>
            Curso: {nomeCurso ? nomeCurso : 'Sem Curso'} <br>
            Papel: {usuario.papel} <br>
            {/if}
        </div>
        {#if editandoPerfil}
        <div class="ml-auto mb-auto">
            <button on:click={salvarPerfil} class="w-full ml-auto mb-auto hover:brightness-90 bg-bg-primary rounded-xl p-3 pb-2 flex justify-center bg-green-500">
                <span class="material-symbols-outlined">
                    done
                </span>
                Salvar
            </button>
            <button on:click={editarPerfil} class="w-full ml-auto mb-auto hover:brightness-90 bg-bg-primary rounded-xl p-3 pb-2 flex justify-center bg-red-500">
                <span class="material-symbols-outlined">
                    close
                </span>
                Cancelar
            </button>
        </div>
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