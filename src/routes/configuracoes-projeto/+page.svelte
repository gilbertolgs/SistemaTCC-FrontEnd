<script lang="ts">
    import Editar from "./editar.svelte";
    import Participantes from "./participantes.svelte";
    import { onMount } from 'svelte';
    import { pageName } from '../stores';
    import DropDown from '$components/DropDown.svelte';
    import Modal from '$components/Modal.svelte';
    import Comentarios from '$components/Comentarios.svelte';

    import Api from '$repository/axiosInstance';
    import Projeto from '$model/Projeto';
    import type Curso from "$model/Curso";

    let login: any = localStorage.getItem("login");
    if(login) {
        login = JSON.parse(login);
    }

    let queryString = '';
    let idProjeto: number;
    let editandoProjeto = false;
    let projetoEditado = {
        id: 0,
        nome: "string",
        descricao: "string"
    }

    let projeto: Projeto = new Projeto(
        0,
        0,
        0,
        '',
        '',
        null
    );

    let cursos: Curso[] = [];

    function updateQueryString() {
      const searchParams = new URLSearchParams(window.location.search);
      queryString += searchParams.toString().split('=')[1];
      idProjeto = parseInt(queryString);

      getData();
    }

    async function getData(){
        cursos = await Api.get('cursos');
        projeto = await Api.get(`projetos/${idProjeto}`);
    }

    onMount(updateQueryString);

    const rotas = ['Editar', 'Participantes']

    let paginaAtual = 'Editar';
    function togglePagina(nome: string){
        paginaAtual = nome;        
    }
</script>

<svelte:head>
	<title>{pageName} - Configurações {projeto.nome}</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="flex flex-col items-center text-text-primary">
    <div class="grid grid-flow-col mx-auto w-[50%] bg-base-100 shadow-xl gap-1 rounded-xl mb-2">
        {#each rotas as rota}
            <button class="h-full btn btn-primary" on:click={() => (togglePagina(rota))}>{rota}</button>
        {/each}
    </div>
    {#if paginaAtual == 'Editar'}
        <Editar
        bind:projeto={projeto}
        bind:cursos={cursos}
        />
    {:else if paginaAtual == 'Participantes'}
        <Participantes
        bind:projeto={projeto
        }/>
    {/if}
</div>