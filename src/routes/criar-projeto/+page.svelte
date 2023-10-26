<script lang="ts">
    import Projeto from '$model/Projeto';
    import type Curso from '$model/Curso';
    import Usuario from '$model/Usuario';

    import { pageName, storeLogin } from '../stores';
    import { onMount } from 'svelte';
    
    import Api from '$repository/axiosInstance';
    import Cookie from '$model/Cookie';
    import { goto } from '$app/navigation';
    import type User from '$model/User';
    
    let cursos: Curso[] = [];

    let nome: string;
    let descricao: string;
    let curso: number;

    let user: User | null;
    storeLogin.subscribe((value) => {
        user = value;
    });

    
	let login: Usuario = new Usuario(
		0,
		'null',
		'null',
		'null',
		'null',
		0,
        null
	);

    async function getData(){        
        cursos = await (Api.get('cursos', {query : 1}));        
    }
    onMount(getData);    

    function checarCampos(){
        if(curso == undefined){
            return false;
        }
        else if(nome == undefined){
            return false;
        }
        else if(descricao == undefined){
            return false;
        }
        return true;
    }

    function limparCampos(){
        nome = '';
        descricao = '';
    }
    async function criarProjeto(){
        if(user && checarCampos()){
            const projeto = new Projeto(
                0,    
                curso,
                user.id,
                nome,
                descricao,
                null
            )
            await Api.post('projetos/CriarProjeto', projeto);

            limparCampos();
            goto('/projetos-pessoais');
        }
    }

</script>

<svelte:head>
	<title>{pageName} - Criar Projeto</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="flex items-center text-text-primary">
    <div class="h-max mx-auto flex flex-col items-center">
        <div class="flex items-center h-max mx-auto w-full text-text-primary bg-bg-primary shadow-xl p-10 gap-4 text-sm rounded-xl mb-2 justify-center">
            <h1 class="font-bold">Criar Projeto</h1>
        </div>
        <div class="bg-bg-primary shadow-xl p-10 flex flex-col gap-4 text-sm rounded-xl">
            <div>
                <label class="font-bold inline-block pb-2" for="text">Nome</label>
                <input bind:value={nome} required class="focus:outline-text-primary rounded-md w-full shadow-sm px-5 py-2 bg-bg-secondary" type="text" name="text">
            </div>
            <div>
                <label class="font-bold inline-block pb-2" for="text">Descrição</label>
                <textarea name="" bind:value={descricao} id="" cols="30" rows="4" class="focus:outline-text-primary rounded-md w-full shadow-sm px-5 py-2 bg-bg-secondary resize-none"></textarea>
            </div>
            <div>
                <label class="font-bold inline-block pb-2" for="text">Curso</label>
                <select bind:value={curso} name="" id="" class="focus:outline-text-primary rounded-md w-full shadow-sm px-5 py-2 bg-bg-secondary">
                    {#each cursos as curso}
                        <option value="{curso.id}">{curso.nome}</option>
                    {/each}
                </select>
            </div>
            <div>
                <input class="btnPrimaryComponent" type="submit" value="Criar Projeto" on:click={criarProjeto}>
            </div>
        </div>        
    </div>
</div>