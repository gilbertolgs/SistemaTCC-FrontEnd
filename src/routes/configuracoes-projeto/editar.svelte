<script lang="ts">
    import Modal from "$components/Modal.svelte";
    import type Curso from "$model/Curso";
    import type Projeto from "$model/Projeto";
    import Api from "$repository/axiosInstance";

    export let projeto: Projeto;
    export let cursos: Curso[] = [];

    let dadosModal: any;
    let editando = false;

    let txtNome = projeto.nome;
    let txtDescricao = projeto.descricao;
    let txtIdCurso: string;

    
    async function getData(){
        projeto = await Api.get(`projetos/${projeto.id}`);
    }

    function limparCampos() {
        txtNome = projeto.nome;
        txtDescricao = projeto.descricao;
        txtIdCurso = '';
    }

    function editarProjeto(){
        editando = !editando;
    }

    async function atualizarProjeto(){
        const novoProjeto = {
            id: 0,
            nome: txtNome,
            descricao: txtDescricao
        };
        await Api.put(`projetos/${projeto.id}/atualizarProjeto`, novoProjeto);

        getData();
        limparCampos();
        editarProjeto();
    }

    function cancelarProjeto(){
        Api.put(`projetos/${projeto.id}/cancelarProjeto`, null);
        toggleModal();
    }

    function finalizarProjeto(){
        Api.put(`projetos/${projeto.id}/finalizarProjeto`, null);
        toggleModal();
    }

    function tornarPublico(){
        Api.put(`projetos/${projeto.id}/tornarPublico`, null);
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
            {#if projeto.imagem}
            <h2>{projeto.imagem}</h2>
            {:else}
            <div class="h-40 w-40 bg-content-primary rounded-xl">
                <img
                src=''
                alt='City'
                class="object-cover object-center hidden"
                />
            </div>
            {/if}
            {#if editando}
            <div class="grid gap-2 w-2/4 my-2">
                <input bind:value={txtNome} required class="txtPrimaryComponent" type="text" name="text" placeholder="{projeto.nome}">
                <textarea bind:value={txtDescricao} cols="30" rows="4" class="txtPrimaryComponent resize-none" placeholder="{projeto.descricao}"/>
                <select bind:value={txtIdCurso} class="focus:outline-text-primary rounded-md w-full shadow-sm px-5 py-2 bg-bg-secondary">
                    {#each cursos as curso}
                        <option value="{curso.id}">{curso.nome}</option>
                    {/each}
                </select>

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
            <h1>{projeto.nome}</h1>
            <h2>{projeto.descricao}</h2>
            <h2>{projeto.idCurso}</h2>
            {/if}
        </div>
        {#if editando == false}
        <div class="grid gap-2 w-[30%] ml-auto">
            <button on:click={editarProjeto} class="btnPrimaryComponent flex text-center justify-center">
                <span class="material-symbols-outlined mr-2">
                    edit
                </span>
                Editar
            </button>
            <button on:click={() => {openModal(
                'Excluir Projeto',
                'Tem certeza que deseja excluir esse projeto?',
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
            class="btnPrimaryComponent flex text-center justify-center">
                <span class="material-symbols-outlined mr-2">
                    done
                </span>
                Tornar Publico
            </button>
        </div>
        {/if}
    </div>
</div>
