<script lang="ts">
    import type Projeto from "$model/Projeto";
    import type User from "$model/User";
    import Api from "$repository/axiosInstance";
    import { error } from "@sveltejs/kit";
    import { onMount } from "svelte";
    import { storeLogin } from "../stores";
    import { get } from "svelte/store";
    import DadosAlert from "$model/DadosAlert";

    export let projeto: Projeto;

    let pessoas = [
        {
            id: 0,
            nome: ''
        },
    ]
    pessoas = [];

    let convidados = [
        {
            id: 0,
            nome: ''
        },
    ]
    convidados = [];

    let partipantes = [
        {
            id: 0,
            nome: ''
        }
    ]
    partipantes = [];

    let txtParticipante = '';
    let txtMensagem = '';
    let participante: any;
    let cboPapel = 'Aluno';

    //Usuario Logado
    let currentUser: User | null;

    //TrocarAki
    storeLogin.subscribe((value) => {
        currentUser = value;
    });

    async function getData(){
        currentUser = get(storeLogin);
        
        partipantes = await Api.get("usuarios/userByProject", {id: projeto.id});
    }

    onMount(getData);

    async function atualizaLista(){
        if (txtParticipante.length < 3){
            pessoas = [];
        }
        else if(txtParticipante.length == 3 || txtParticipante.length > 5){
            const query = {
                Papel: cboPapel,
                Nome: txtParticipante
            }
            
            pessoas = await Api.get("usuarios/findUsers", query);
        }    
    }

    async function selecionaParticipante(usuario: any){
        if(usuario){
            participante = await Api.get("usuarios/email", {email : usuario.email});
        }
        else{
            participante = null;
        }
        txtParticipante = '';
        atualizaLista();
    }

    async function enviarConvite(){
        const convite = {
            id: 0,
            idUsuario: participante.id,
            idProjeto: projeto.id
        }
        await Api.post('convites/enviarConvite', convite);

        selecionaParticipante(null);
        
        txtMensagem = '';
        DadosAlert.addAlert('', 'Convite enviado!', 'bg-green-500');
        getData();
    }

    function removerConvite(idConvite: number) {
        //recusar convite
    }

    function deixarProjeto(){
        throw error(1, 'n ta feito');
    }
</script>

<div class="h-max mx-auto flex flex-col items-center">
    <div class="bg-base-100 shadow-xl p-10 flex flex-col gap-4 text-sm rounded-xl">
        <div>
            <label class="font-bold inline-block pb-2" for="text">Pessoa</label>
            {#if participante}
            <h1 class="shadow-sm border border-base-20 bg-content-primary text-white rounded-xl p-3">{participante.nome}</h1>
            <button on:click={() => (selecionaParticipante(null))} class="absolute material-symbols-outlined hover:scale-110 transition-all">close</button>
            {:else}
            <select class="select select-bordered w-auto m-3" bind:value={cboPapel}>
                <option value="Aluno">Aluno</option>
                <option value="Professor">Professor</option>
            </select>
            <input type="text" class="input input-bordered" bind:value={txtParticipante} on:input={atualizaLista}>
            {#if pessoas.length > 0}
            <ul class="max-h-40 overflow-y-scroll border border-base-20 rounded-xl">
                {#if pessoas}
                {#each pessoas as pessoa}
                <li>
                    <button class="btn btn-primary" on:click={() => (selecionaParticipante(pessoa))}>{pessoa.nome} | Convidar Participante</button>
                </li>
                {/each}
                {/if}
            </ul>
            {/if}
            {/if}
        </div>
        <div>
            <label class="font-bold inline-block pb-2" for="text">Mensagem</label>
            <textarea bind:value={txtMensagem} cols="30" rows="4" class="input input-bordered resize-none"></textarea>
        </div>
        <div>
            <input class="btn btn-primary" type="submit" value="Enviar Convite" on:click={enviarConvite}>
        </div>
    </div>
    {#if convidados.length > 0}
    <div class="w-full mt-2 bg-base-100 shadow-xl p-5 flex flex-col gap-4 text-sm rounded-xl">
        <div class="tableHolderComponent w-full my-0">
            <table class="tableComponent">
                <thead class="text-text-primary">
                    <tr>
                        <th>Convites Pendentes</th>
                    </tr>
                </thead>
                <tbody>
                    {#each convidados as convidado}
                    <tr class="trComponent text-text-secondary">
                        <th class="w-full border-b">
                            <p>{convidado.nome}</p>
                        </th>
                        <th class="flex border-b text-text-primary">
                            <button class="p-4 mr-1 bg-red-500 hover:scale-110 transition-all rounded-md font-bold hover:brightness-90" on:click={() => {removerConvite(convidado.id)}}>Cancelar</button>
                        </th>
                    </tr>
                    {/each}
                </tbody>
            </table>
        </div>
    </div>
    {/if}
    {#if partipantes.length > 0}
    <div class="w-full mt-2 bg-base-100 shadow-xl p-5 flex flex-col gap-4 text-sm rounded-xl">
        <div class="tableHolderComponent w-full my-0">
            <table class="tableComponent">
                <thead class="text-text-primary">
                    <tr>
                        <th>Participantes</th>
                    </tr>
                </thead>
                <tbody>
                    {#each partipantes as participa}
                    <tr class="trComponent text-text-secondary">
                        <th class="w-full border-b">
                            <p>{participa.nome}</p>
                        </th>
                        {#if currentUser?.id == participa.id}
                        <th>
                            <button class="btn btn-primary p-3" on:click={deixarProjeto}>
                                Deixar Projeto
                            </button>
                        </th>
                        {/if}
                    </tr>
                    {/each}
                </tbody>
            </table>
        </div>
    </div>     
    {/if}
</div>