<script lang="ts">
    import { onMount } from 'svelte';
    import { pageName } from '../stores';
    import DropDown from '$components/DropDown.svelte';
    import Modal from '$components/Modal.svelte';
    import Comentarios from '$components/Comentarios.svelte';

    import Api from '$repository/axiosInstance';
    import Usuario from '$model/Usuario';
    import Projeto from '$model/Projeto';

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
    );

    function updateQueryString() {
      const searchParams = new URLSearchParams(window.location.search);
      queryString += searchParams.toString().split('=')[1];
      idProjeto = parseInt(queryString);

      getData();
    }

    async function getData(){
        projeto = await Api.get(`projetos/${idProjeto}`);
    }

    onMount(updateQueryString);

    let dadosModal: any;

    let opcoes = [
        {
            link: null,
            nome: 'Editar Projeto',
            botao: (() => editarProjeto())
        },
        {
            link: 'projeto/convidar-participante',
            nome: 'Convidar Participante'
        },
        {
            link: null,
            nome: 'Excluir Projeto',
            botao: (() => openExcluirModal())
        },
    ]
    if(login){
        if(login.papel == "Administrador") {
            opcoes = [
                {
                    link: null,
                    nome: 'Publicar Projeto',
                    botao: (() => openPublicarModal())
                }
            ]
        }
    }

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

    async function salvarProjeto(){
        projetoEditado.id = idProjeto;
        
        await Api.put('projetos/atualizarProjeto', projetoEditado);
        getData();
        editarProjeto();
    }

    function editarProjeto() {
        editandoProjeto = !editandoProjeto;
        projetoEditado.nome = projeto.nome;
        projetoEditado.descricao = projeto.descricao;
    }
    //Funções Componentes
    let toggleModal: () => void;
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
                    Nome: <input type="text" bind:value={projetoEditado.nome} placeholder="{projeto.nome}" class="focus:outline-text-primary rounded-md w-full shadow-sm px-5 py-2 bg-bg-secondary placeholder-text-tertiary">
                    {:else}
                    <h1 class="text-text-secondary font-bold inline-block pb-3 flex-1">{projeto.nome}</h1>
                    {/if}
                    {#if editandoProjeto}
                    <div class="ml-auto mb-auto">
                        <button on:click={salvarProjeto} class="w-full ml-auto mb-auto hover:brightness-90 bg-bg-primary rounded-xl p-3 pb-2 flex justify-center bg-green-500">
                            <span class="material-symbols-outlined">
                                done
                            </span>
                            Salvar
                        </button>
                        <button on:click={editarProjeto} class="w-full ml-auto mb-auto hover:brightness-90 bg-bg-primary rounded-xl p-3 pb-2 flex justify-center bg-red-500">
                            <span class="material-symbols-outlined">
                                close
                            </span>
                            Cancelar
                        </button>
                    </div>
                    {:else}
                    <div>
                        <button class="m-0 p-0 group">
                            <span class="material-symbols-outlined justify-end group-hover:rotate-45 transition-all">
                                settings
                            </span>
                            <div class="dropDownComponent group-hover:openDropDownComponent" >
                            <DropDown
                            id={0}
                            dados={opcoes}
                            perfil={null}
                            />
                            </div>
                        </button>
                    </div>
                    {/if}
                </div>
                {#if editandoProjeto}
                Descrição: <input type="text" bind:value={projetoEditado.descricao} placeholder="{projeto.descricao}" class="focus:outline-text-primary rounded-md w-full shadow-sm px-5 py-2 bg-bg-secondary placeholder-text-tertiary">
                {:else}
                <p class="text-text-secondary font-bold inline-block pb-2">{projeto.descricao}</p>
                {/if}
            </div>
            <div>
                {#if projeto.id != 0}
                <Comentarios
                bind:projeto={projeto}
                />
                {/if}
            </div>
        </div>    
</div>