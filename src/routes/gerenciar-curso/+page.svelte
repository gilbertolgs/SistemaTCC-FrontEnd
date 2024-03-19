<script lang="ts">
    import Curso from '$model/Curso';
    import { pageName } from '../stores';
    import Api from '$repository/axiosInstance';
    import { onMount } from 'svelte';
    import DadosAlert from '$model/DadosAlert';
    import Modal from '$components/Modal.svelte';

    let txtNome: string;
    let cursos: Curso[] = [];

    let textoBotao = 'Cadastrar';
    //se alterando é diferente de 0 seu valor é igual ao id do curso a ser alterado.
    let alterando = 0;

    async function getData(){
        cursos = await Api.get('cursos');
    }

    onMount(getData);

    function checarCampos(){
        if(txtNome == undefined){
            return false;
        }
        return true;
    }
    async function criarCurso(){
        if(checarCampos()){
            if(alterando){
                const curso = new Curso(alterando, txtNome);
                await Api.put('cursos/atualizarCurso', curso);

                cancelarAlteracao();
                DadosAlert.addAlert('', 'Curso Alterado com sucesso!', 'bg-green-500');
            }
            else{
                const curso = new Curso(0, txtNome);
                await Api.post('cursos/criarCurso', curso);
                DadosAlert.addAlert('', 'Curso Adicionado com sucesso!', 'bg-green-500');
            }

            txtNome = '';
            getData();
        }
    }

    function alterarCurso(id: number, nomeCurso: string) {
        txtNome = nomeCurso;
        alterando = id;
        textoBotao = 'Alterar';
    }

    async function deletarCurso(id: number) {
        await Api.delete(`cursos/${id}/deletarCurso`);
        DadosAlert.addAlert('', 'Curso Deletado com sucesso!', 'bg-green-500');

        toggleModal();

        getData();
    }

    function cancelarAlteracao() {
        alterando = 0;
        txtNome = '';
        textoBotao = 'Cadastrar';
    }

    function criarCursoKeyPress(event : KeyboardEvent){
        if(event.key == 'Enter'){
            criarCurso();
        }
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
    let dadosModal: any;
</script>

<Modal
bind:toggleModal={toggleModal}
dados={dadosModal}
/>

<svelte:head>
	<title>{pageName} - Cadastro</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<h1 class="bg-base-100 text-base-content p-5 rounded-xl w-full text-center m-3">
    Cadastrar Curso
</h1>     
<div class="flex items-center text-text-primary">
    <div class="h-max mx-auto flex flex-col items-center">        
        <div class="bg-base-100 shadow-xl p-10 flex flex-col gap-4 text-sm rounded-xl">
            <div>
                <label class="font-bold inline-block pb-2" for="text">Nome</label>
                <input bind:value={txtNome} on:keypress={criarCursoKeyPress} required class="input input-bordered" type="text" name="text" placeholder="exemplo">
            </div>
            <div>
                <input class="btn btn-primary" type="submit" value="{textoBotao}" on:click={criarCurso}>
                {#if alterando}
                <input class="w-full mt-2 py-2 rounded-md text-white font-bold cursor-pointer bg-red-500 hover:brightness-90" type="submit" value="Cancelar" on:click={cancelarAlteracao}>
                {/if}
            </div>
        </div>
        <div class="tableHolderComponent">
            <table class="tableComponent">
                <thead class="text-text-primary">
                    <tr>
                        <th>Cursos cadastrados</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {#each cursos as curso}
                    <tr class="trComponent text-text-secondary">
                        <th class="w-full p-4 pl-8 border-b">
                            <p>{curso.nome}</p>
                        </th>
                        <th class="flex border-b text-text-primary">
                            <button class="p-4 bg-content-primary hover:scale-110 transition-all rounded-l-md font-bold hover:brightness-90" on:click={() => {alterarCurso(curso.id, curso.nome)}}>Alterar</button>
                            <!-- <button class="p-4 mr-1 bg-red-500 hover:scale-110 transition-all rounded-r-md font-bold hover:brightness-90" on:click={() => {deletarCurso(curso.id)}}>Excluir</button> -->
                            <button class="p-4 mr-1 bg-red-500 hover:scale-110 transition-all rounded-r-md font-bold hover:brightness-90" on:click={() => {openModal(
                                'Deletar Curso',
                                'Tem certeza que deseja excluir esse curso?',
                                {
                                    link: null,
                                    botao: (() => deletarCurso(curso.id)),
                                    nome: 'Excluir'
                                },
                                {
                                    nome: 'Cancelar'
                                }
                                )}}
                            >

                            Excluir
                            </button>
                        </th>
                    </tr>
                    {/each}
                </tbody>
                </table>
        </div>    
    </div>
</div>