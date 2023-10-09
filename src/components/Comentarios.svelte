<script lang="ts">
    import { onMount } from "svelte";
    import DropDown from "./DropDown.svelte";

    import Comentario from "$model/Comentario";
    import type Projeto from "$model/Projeto";
    import Usuario from "$model/Usuario";
    import Api from "$repository/axiosInstance";
    import type User from "$model/User";
    import { storeLogin } from "../routes/stores";

    export let projeto: Projeto;
    let campoComentario: string;
    let comentarios: Comentario[] = [];
    let editandoComentario: number;
    let txtEditandoComentarioConteudo: string;

    let user: User | null;
    storeLogin.subscribe((value) => {
        user = value;
    });

    async function getData(){
        comentarios = await Api.get('projetoComentarios', {idProjeto : projeto.id});        
    }

    onMount(getData);

    async function comentar(){
        if(user){
            let comentario = new Comentario(
                0,
                projeto.id,
                user.id,
                new Usuario(0, 'null', 'null', 'null', 'null', 0),
                campoComentario
            );
            await Api.post('projetoComentarios/criarComentario', comentario);
    
            campoComentario = '';
            getData();
        }
    }

    const opcoesComentario = {
        admin : 
        [
            {
                nome: "Excluir Comentario",
                botao: ((comentarioId: number) => excluirComentario(comentarioId))
            }
        ],
        aluno : 
        [
            {
                nome: "Editar Comentario",
                botao: ((comentarioId: number) => editarComentario(comentarioId))
            },
            {
                nome: "Excluir Comentario",
                botao: ((comentarioId: number) => excluirComentario(comentarioId))
            }
        ],
    }
    
    async function salvarComentario(id: number) {
        const comentario = {
            id: id,
            conteudo: txtEditandoComentarioConteudo
        }
        await Api.put('projetoComentarios/atualizarComentario', comentario);

        editarComentario(id);
        getData();
    }

    function editarComentario(id: number){
        const conteudoComentario = comentarios.find(comentario => comentario.id == id)?.conteudo;
        if(conteudoComentario){
            txtEditandoComentarioConteudo = conteudoComentario;
        }
        editandoComentario = (id == editandoComentario) ? 0 : id;
    }

    async function excluirComentario(id: number){
        await Api.delete(`projetoComentarios/${id}/deletarComentario`);
        getData();
    }


</script>

<div class="flex flex-col my-2 border border-bg-secondary p-3 rounded-lg">
    <h1>Comentarios:</h1>
    <textarea name="" bind:value={campoComentario} id="" cols="30" rows="4" class="bg-bg-primary resize-none border border-bg-secondary"></textarea>
    <button on:click={comentar} class="p-2 bg-content-primary hover:scale-110 transition-all rounded-md font-bold hover:brightness-90 flex items-center w-20 mt-2 ml-auto">Comentar</button>
</div>
<ul class="mt-5">
    {#each comentarios as comentario}
    <li class="flex flex-col mb-3 border border-bg-secondary p-3 rounded-lg relative">
        <a href="usuario?id={comentario.idUsuario}" class="text-content-primary underline hover:brightness-90">
            {comentario.usuario.nome}
        </a>
        {#if editandoComentario == comentario.id}
        <div class="grid grid-flow-col">
            <textarea bind:value={txtEditandoComentarioConteudo} placeholder="{comentario.conteudo}" class="col-span-5 focus:outline-text-primary rounded-md w-full shadow-sm px-5 py-2 bg-bg-secondary placeholder-text-tertiary resize-none"/>
            <div class="ml-auto mb-auto">
                <button on:click={() => {salvarComentario(comentario.id)}} class="w-full ml-auto mb-auto hover:brightness-90 bg-bg-primary rounded-xl p-3 pb-2 flex justify-center bg-green-500">
                    <span class="material-symbols-outlined">
                        done
                    </span>
                    Salvar
                </button>
                <button on:click={() => {editarComentario(comentario.id)}} class="w-full ml-auto mb-auto hover:brightness-90 bg-bg-primary rounded-xl p-3 pb-2 flex justify-center bg-red-500">
                    <span class="material-symbols-outlined">
                        close
                    </span>
                    Cancelar
                </button>
            </div>
        </div>
        {:else}
        {#if comentario.idUsuario == user?.id || user?.papel == 'Administrador'}
        <button class="absolute right-3 transition-all group">
            <span class="material-symbols-outlined hover:scale-110">
                more_vert
            </span>
            <div class="dropDownComponent group-hover:openDropDownComponent" >
                <DropDown
                id={comentario.id}
                dados={opcoesComentario.aluno}
                perfil={null}
                />
            </div>
        </button>
        {/if}
        {comentario.conteudo}
        {/if}
    </li>
    {/each}
</ul>