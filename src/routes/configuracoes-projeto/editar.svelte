<script lang="ts">
    import Modal from "$components/Modal.svelte";
    import type Projeto from "$model/Projeto";
    import Api from "$repository/axiosInstance";

    export let projeto: Projeto;

    let dadosModal: any;

    function atualizarProjeto(){
        const novoProjeto = {

        }
        //Api.put(`projetos/${projeto.id}/atualizarProjeto`, novoProjeto);
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

    function openExcluirModal(){
        dadosModal = {
            titulo: 'Excluir Projeto',
            mensagem: 'Tem certeza que deseja excluir esse projeto?',
            opt1: {
                link: null,
                botao: (() => cancelarProjeto()),
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
                botao: (() => tornarPublico()),
                nome: 'Publicar'
            },
            opt2: {
                nome: 'Cancelar'
            }
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
            <h1>{projeto.nome}</h1>
            <h2>{projeto.descricao}</h2>
            <h2>{projeto.idCurso}</h2>
        </div>
        <div class="grid gap-2 w-[30%] ml-auto">
            <button on:click={atualizarProjeto} class="buttonPrimaryComponent flex text-center justify-center">
                <span class="material-symbols-outlined mr-2">
                    edit
                </span>
                Editar
            </button>
            <button on:click={openExcluirModal} class="buttonPrimaryComponent flex text-center justify-center">
                <span class="material-symbols-outlined mr-2">
                    close
                </span>
                Excluir
            </button>
            <button on:click={finalizarProjeto} class="buttonPrimaryComponent flex text-center justify-center">
                <span class="material-symbols-outlined mr-2">
                    done
                </span>
                Finalizar Projeto
            </button>
            <button on:click={openPublicarModal} class="buttonPrimaryComponent flex text-center justify-center">
                <span class="material-symbols-outlined mr-2">
                    done
                </span>
                Tornar Publico
            </button>
        </div>
    </div>
</div>
