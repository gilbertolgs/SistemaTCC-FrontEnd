<script lang="ts">
    import Modal from "$components/Modal.svelte";
    import type Curso from "$model/Curso";
    import type Projeto from "$model/Projeto";
    import type User from "$model/User";
    import Api from "$repository/axiosInstance";
    import { get } from "svelte/store";
    import { storeAlerts, storeLogin } from "../stores";
    import DadosAlert from "$model/DadosAlert";

    export let projeto: Projeto;
    export let cursos: Curso[] = [];

    let currentUser: User | null;
    let dadosModal: any;
    let editando = false;

    let txtProjeto = {
        'nome' : projeto.nome,
        'descricao' : projeto.descricao,
    }

    storeLogin.subscribe((value) => {
		currentUser = value;
    });
    async function getData(){
        
        projeto = await Api.get(`projetos/${projeto.id}`);
    }

    function limparCampos() {
        txtProjeto.nome = projeto.nome;
        txtProjeto.descricao = projeto.descricao;
    }

    function editarProjeto(){
        txtProjeto = {
            'nome' : projeto.nome,
            'descricao' : projeto.descricao,
        }
        editando = !editando;
    }

    async function atualizarProjeto(){
        const novoProjeto = {
            id: 0,
            nome: txtProjeto.nome,
            descricao: txtProjeto.descricao
        };
        await Api.put(`projetos/${projeto.id}/atualizarProjeto`, novoProjeto);
        DadosAlert.addAlert('', 'Projeto Alterado com sucesso!', 'bg-green-500');

        getData();
        limparCampos();
        editarProjeto();
    }

    function cancelarProjeto(){
        Api.put(`projetos/${projeto.id}/cancelarProjeto`, null);
        DadosAlert.addAlert('', 'Projeto Cancelado com sucesso!', 'bg-green-500');
        toggleModal();
    }

    function finalizarProjeto(){
        Api.put(`projetos/${projeto.id}/finalizarProjeto`, null);
        DadosAlert.addAlert('', 'Projeto Finalizado com sucesso!', 'bg-green-500');
        toggleModal();
    }

    function tornarPublico(){
        Api.put(`projetos/${projeto.id}/tornarPublico`, null);
        DadosAlert.addAlert('', 'Projeto agora é público com sucesso!', 'bg-green-500');
        toggleModal();
    }

    function openModal(titulo: string, mensagem: string, opt1: any, opt2: any){
        dadosModal = {
            titulo: titulo,
            mensagem: mensagem,
            opt1: opt1,
            opt2: opt2
        }
        toggleModal();
    }
    //Funções Componentes
    let toggleModal: () => void;
</script>

<Modal
bind:toggleModal={toggleModal}
dados={dadosModal}
/>
<div class="h-max mx-auto flex flex-col items-center w-full">
    <div class="w-full mt-2 bg-bg-primary shadow-xl p-5 gap-4 text-sm rounded-xl grid grid-flow-col">
        <div>
            <!-- {#if projeto.imagem}
            <h2>{projeto.imagem}</h2>
            {:else}
            <div class="h-40 w-40 bg-content-primary rounded-xl">
                <img
                src=''
                alt='City'
                class="object-cover object-center hidden"
                />
            </div>
            {/if} -->
            {#if editando}
            <div class="grid gap-2 w-2/4 my-2">
                <input bind:value={txtProjeto.nome} required class="txtPrimaryComponent" type="text" name="text" placeholder="{projeto.nome}">
                <textarea bind:value={txtProjeto.descricao} cols="30" rows="4" class="txtPrimaryComponent resize-none" placeholder="{projeto.descricao}"/>

                <button on:click={atualizarProjeto} class="btnPrimaryComponent bg-green-500 flex text-center justify-center">
                    <span class="material-symbols-outlined mr-2">
                        done
                    </span>
                    Salvar
                </button>
                <button on:click={editarProjeto} class="btnPrimaryComponent bg-red-500 flex text-center justify-center">
                    <span class="material-symbols-outlined mr-2">
                        close
                    </span>
                    Cancelar
                </button>
            </div>
            {:else}
            <div class="grid w-72">
                <h1>{projeto.nome}</h1>
                <h2>{projeto.descricao}</h2>
            </div>
            <!-- <h2>{projeto.idCurso}</h2> -->
            {/if}
        </div>
        {#if editando == false}
        <div class="grid gap-2 w-[30%] ml-auto">
            {#if currentUser?.papel == 'Administrador'}
            <button on:click={() => {openModal(
                'Publicar Projeto',
                'Tem certeza que deseja tornar esse projeto publico?',
                {
                    link: null,
                    botao: (() => tornarPublico()),
                    nome: 'Publicar'
                },
                {
                    nome: 'Cancelar'
                }
                )}}
            class="btnPrimaryComponent flex text-center justify-center my-5">
            <span class="material-symbols-outlined mr-2">
                done
            </span>
            Tornar Publico
        </button>
        {:else}
        <button on:click={editarProjeto} class="btnPrimaryComponent flex text-center justify-center">
            <span class="material-symbols-outlined mr-2">
                edit
            </span>
            Editar
        </button>
        <button on:click={() => {openModal(
            'Cancelar Projeto',
            'Tem certeza que deseja cancelar esse projeto?',
            {
                link: null,
                botao: (() => cancelarProjeto()),
                nome: 'Excluir'
            },
            {
                nome: 'Cancelar'
            }
        )}}
        class="btnPrimaryComponent flex text-center justify-center">
            <span class="material-symbols-outlined mr-2">
                close
            </span>
            Excluir
        </button>
        <button on:click={() => {openModal(
            'Finalizar Projeto',
            'Tem certeza que deseja concluir esse projeto?',
            {
                link: null,
                botao: (() => finalizarProjeto()),
                nome: 'Finalizar'
            },
            {
                nome: 'Cancelar'
            }
        )}}
        class="btnPrimaryComponent flex text-center justify-center">
            <span class="material-symbols-outlined mr-2">
                done
            </span>
            Finalizar Projeto
        </button>
        {/if}
    </div>
        {/if}
    </div>
</div>
