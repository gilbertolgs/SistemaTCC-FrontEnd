<script lang="ts">
    import Curso from '$model/Curso';
    import { pageName } from '../stores';
    import Api from '$repository/axiosInstance';
    import { onMount } from 'svelte';

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
            }
            else{
                const curso = new Curso(0, txtNome);
                await Api.post('cursos/criarCurso', curso);
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

        getData();
    }


    function cancelarAlteracao() {
        alterando = 0;
        txtNome = '';
        textoBotao = 'Cadastrar';
    }
</script>

<svelte:head>
	<title>{pageName} - Cadastro</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="flex items-center text-text-primary">
    <div class="h-max mx-auto flex flex-col items-center">
        <div class="bg-bg-primary shadow-xl p-10 flex flex-col gap-4 text-sm rounded-xl w-full my-2 items-center">
            <div>
                <h1>
                    Cadastrar Curso
                </h1>
            </div>
        </div>        
        <div class="bg-bg-primary shadow-xl p-10 flex flex-col gap-4 text-sm rounded-xl">
            <div>
                <label class="font-bold inline-block pb-2" for="text">Nome</label>
                <input bind:value={txtNome} required class="txtPrimaryComponent" type="text" name="text" placeholder="exemplo">
            </div>
            <div>
                <input class="btnPrimaryComponent" type="submit" value="{textoBotao}" on:click={criarCurso}>
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
                            <button class="p-4 mr-1 bg-red-500 hover:scale-110 transition-all rounded-r-md font-bold hover:brightness-90" on:click={() => {deletarCurso(curso.id)}}>Excluir</button>
                        </th>
                    </tr>
                    {/each}
                </tbody>
                </table>
        </div>    
    </div>
</div>