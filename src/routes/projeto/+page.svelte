<script lang="ts">
    import { onMount } from 'svelte';
    import { pageName, projetos } from '../stores';
    import DropDown from '$components/DropDown.svelte';
    import Modal from '$components/Modal.svelte';

    let login: any = localStorage.getItem("login");
    if(login) {
        login = JSON.parse(login);
    }

    let queryString = '';
    let editandoProjeto = false;

    
    function updateQueryString() {
      const searchParams = new URLSearchParams(window.location.search);
      queryString += searchParams.toString().split('=')[1];
      projeto.nome = 'Projeto ' + queryString;
      projeto.id = parseInt(queryString);

      localStorage.setItem('idProjeto', queryString);

      for(let i = 0; i < projetos.length; i++){
        if(projetos[i].id == projeto.id){
            projeto = projetos[i];
        }
      }
    }

    
    onMount(updateQueryString);

    let dadosModal: any;

    let projeto = {
        id: 1,
        nome: 'Projeto 1',
        descricao: 'Lorem ipsum'
    }

    let comentarios = [
        {
            id: 1,
            texto: 'Lorem Ipsum',
            editado: false,
            avaliacao: false,
            usuario: {
                id: 2,
                nome: 'Loreno'
            }
        },
        {
            id: 2,
            texto: 'Lorem Ipsum',
            editado: false,
            avaliacao: false,
            usuario: {
                id: 3,
                nome: 'Ipsono'
            }
        }
    ]

    let opcoes = [
        {
            link: null,
            nome: 'Editar Projeto',
            botao: (() => editarProjeto())
        },
        {
            link: 'convidar-participante',
            nome: 'Convidar Participante'
        },
        {
            link: null,
            nome: 'Excluir Projeto',
            botao: (() => openExcluirModal())
        },
    ]

    //if(login.papel == "Administrador") {
        // opcoes = [
        //     {
        //         link: null,
        //         nome: 'Editar Projeto',
        //         botao: (() => openPublicarModal())
        //     }
        // ]
    //}

    function openExcluirModal(){
        dadosModal = {
            titulo: 'Excluir Projeto',
            mensagem: 'Tem certeza que deseja excluir esse projeto?',
            opt1: {
                link: null,
                botao: 'Faz',
                nome: 'Excluir'
            },
            opt2: {
                nome: 'Cancelar'
            }
        }
        toggleModal();
    }

    function openPublicarModal(){
        dadosModal = {
            titulo: 'Publicar Projeto',
            mensagem: 'Tem certeza que deseja tornar esse projeto publico?',
            opt1: {
                link: null,
                botao: 'Faz',
                nome: 'Publicar'
            },
            opt2: {
                nome: 'Cancelar'
            }
        }
        toggleModal();
    }

    function publicarProjeto(id: number){
        //Publica Projeto
    }

    function excluirProjeto(id: number){
        //exclui Projeto
    }
    
    let openDropDown: () => void;
	let closeDropDown: () => void;

    let toggleModal: () => void;
    function editarProjeto() {
        editandoProjeto = !editandoProjeto;
    }
</script>

<svelte:head>
	<title>{pageName} - {projeto.nome} </title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<Modal
bind:toggleModal={toggleModal}
dados={dadosModal}
/>
<div class="flex items-center h-max mx-auto flex-col w-full text-text-primary">
        <div class="bg-bg-primary shadow-xl p-10 flex flex-col gap-4 text-sm rounded-xl w-full divide-y divide-bg-bg-secondary">
            <div class="flex flex-col items-center">
                <div class="flex w-full justify-center">
                    {#if editandoProjeto}
                    Nome: <input type="text" placeholder="{projeto.nome}" class="focus:outline-text-primary rounded-md w-full shadow-sm px-5 py-2 bg-bg-secondary placeholder-text-tertiary">
                    {:else}
                    <h1 class="text-text-secondary font-bold inline-block pb-3 flex-1">{projeto.nome}</h1>
                    {/if}
                    <div>
                        <button class="m-0 p-0 group" on:mouseenter={openDropDown} on:mouseleave={closeDropDown}>
                            <span class="material-symbols-outlined justify-end group-hover:rotate-45 transition-all">
                                settings
                            </span>
                            <DropDown
                            bind:openDropDown={openDropDown}
                            bind:closeDropDown={closeDropDown}
                            dados={opcoes}
                            perfil={null}
                            pos={''}
                            />
                        </button>
                    </div>
                </div>
                {#if editandoProjeto}
                Descrição: <input type="text" placeholder="{projeto.descricao}" class="focus:outline-text-primary rounded-md w-full shadow-sm px-5 py-2 bg-bg-secondary placeholder-text-tertiary">
                {:else}
                <p class="text-text-secondary font-bold inline-block pb-2">{projeto.descricao}</p>
                {/if}
            </div>
            <div>
                <h1>Comentarios:</h1>
                <div class="flex flex-col mb-3 border border-bg-secondary p-3 rounded-lg">
                    <textarea name="" id="" cols="30" rows="4" class="bg-bg-primary resize-none border border-bg-secondary"></textarea>
                    <button class="p-2 bg-content-primary hover:scale-110 transition-all rounded-md font-bold hover:brightness-90 flex items-center w-20 mt-2 ml-auto">Comentar</button>
                </div>
                <ul class="mt-5">
                    {#each comentarios as comentario}
                    <li class="flex flex-col mb-3 border border-bg-secondary p-3 rounded-lg">
                        <a href="usuario?id={comentario.usuario.id}" class="text-content-primary underline hover:brightness-90">
                            {comentario.usuario.nome}
                        </a>
                        {comentario.texto}
                    </li>
                    {/each}
                </ul>
            </div>
        </div>    
</div>