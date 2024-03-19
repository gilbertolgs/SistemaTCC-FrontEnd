<script lang="ts">
    import { onMount } from 'svelte';
    import Card from '$components/Card.svelte';
    import { pageName, storeLogin } from '../stores';
    import Usuario from '$model/Usuario';
    import Api from '$repository/axiosInstance';
    import type Curso from '$model/Curso';
    import type Projeto from '$model/Projeto';
    import type User from '$model/User';
    
    //Usuario Logado
    let currentUser: User | null;
    storeLogin.subscribe((value) => {
        currentUser = value;
    });

    let queryString = '';
    let idUsuario: number;
    let projetos: Projeto[] = [];
    let usuario: Usuario = new Usuario(
        0,
        '',
        '',
        '',
        '',
        null
    );


    let cursos: Curso[] = [];
    let nomeCurso: string;

    let txtNome: string;
    let txtEmail: string;
    let lstCurso: number;

    function updateCamposTexto(){
        txtNome = usuario.nome;
        txtEmail = usuario.email;
        lstCurso = usuario.idCurso;
    }
    
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
        updateCamposTexto();
    }

    onMount(updateQueryString);

    let editandoPerfil = false;
    function editarPerfil() {
        editandoPerfil = !editandoPerfil;
        updateCamposTexto();
    }

    async function salvarPerfil() {
        const data = {
            nome: txtNome,
            email: txtEmail,
            idCurso: lstCurso
        }

        if(checarCampos()){
            await Api.put(`usuarios/${idUsuario}/atualizarUsuario`, data);
            
            getData();
            editandoPerfil = !editandoPerfil;
        }
        else{
            alert('Errou!');
        }
        
    }

    function checarCampos(){
        if(txtNome == ''){
            return false;
        }
        else if(txtEmail == '' || txtEmail.includes('@aedb.br') == false){
            return false;
        }
        else if(lstCurso == 0 || lstCurso == undefined){
            return false;
        }
        return true;
    }
</script>

<svelte:head>
	<title>{pageName} - {usuario.nome} </title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="flex items-center h-max mx-auto flex-col w-full text-text-primary bg-base-100 shadow-xl p-10 gap-4 text-sm rounded-xl mb-2">
    <div class="flex w-full items-center">
        <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="imagem de perfil" class="h-20 w-20 rounded-lg border border-text-primary m-3">
        <div class="flex flex-col text-text-secondary font-bold">
            {#if editandoPerfil}
            Nome de Usuario: <input type="text" bind:value={txtNome} placeholder="{usuario.nome}" class="input input-bordered">
            E-mail: <input type="text" bind:value={txtEmail} placeholder="{usuario.email}" disabled class="input input-bordered border border-text-primary">
            Curso:  <select name="" id="" bind:value={lstCurso} class="input input-bordered px-5 py-2">
                {#each cursos as curso}
                    <option value="{curso.id}">{curso.nome}</option>
                {/each}
            </select>
            Papel: <input type="text" bind:value={usuario.papel} disabled class="input input-bordered border border-text-primary">
            {:else}
            Nome de Usuario: {usuario.nome} <br>
            E-mail: {usuario.email} <br>
            Curso: {nomeCurso ? nomeCurso : 'Sem Curso'} <br>
            Papel: {usuario.papel} <br>
            {/if}
        </div>
        {#if editandoPerfil}
        <div class="ml-auto mb-auto flex flex-col gap-1">
            <button on:click={salvarPerfil} class="btn btn-success p-3">
                <span class="material-symbols-outlined">
                    done
                </span>
                Salvar
            </button>
            <button on:click={editarPerfil} class="btn btn-error p-3">
                <span class="material-symbols-outlined">
                    close
                </span>
                Cancelar
            </button>
        </div>
        {:else}
        {#if currentUser?.id == idUsuario}
        <button on:click={editarPerfil} class="ml-auto mb-auto hover:brightness-90 bg-base-100 rounded-xl p-3 pb-2 flex justify-center">
            <span class="material-symbols-outlined">
                edit
            </span>
            Editar Perfil
        </button>
        {/if}
        {/if}
    </div>        
</div>
<div class="flex items-center h-max mx-auto flex-col w-full text-text-primary bg-base-100 shadow-xl p-5 gap-2 text-sm rounded-xl divide-y divide-base-20">
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