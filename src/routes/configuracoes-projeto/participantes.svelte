<script lang="ts">
    import type Projeto from "$model/Projeto";
    import type User from "$model/User";
    import Api from "$repository/axiosInstance";
    import { onMount } from "svelte";

    export let projeto: Projeto;

    let pessoas = [
        {
            id: 0,
            nome: ''
        },
    ]

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

    $: txtParticipante = '';
    let mostrarLista = false;
    let participante: any;
    let cboPapel = 'Aluno';

    async function getData(){
        //Fazer função na api para pegar os participantes
        partipantes = await Api.get("usuarios/porProjeto", {idProjeto: projeto.id});
    }

    onMount(getData);

    async function atualizaLista(){
        if(txtParticipante.length == 3){
            const papel = cboPapel;
            
            pessoas = await Api.get("usuarios/userByRole", {papel});
        }
        
        //Fazer filtro
        if(txtParticipante.length > 0){
            mostrarLista = true;
        }
        else{
            mostrarLista = false;
        }
    }

    async function selecionaParticipante(usuario: any){
        participante = await Api.get("usuarios/email", {email : usuario.email});
        txtParticipante = '';
        mostrarLista = false;
    }

    async function enviarConvite(){
        const convite = {
            id: 0,
            idUsuario: participante.id,
            idProjeto: projeto.id
        }
        await Api.post('convites/enviarConvite', convite);

        getData();
    }

    function removerConvite(idConvite: number) {
        //recusar convite
    }
</script>

<div class="h-max mx-auto flex flex-col items-center">
    <div class="bg-bg-primary shadow-xl p-10 flex flex-col gap-4 text-sm rounded-xl">
        <div>
            <label class="font-bold inline-block pb-2" for="text">Pessoa</label>
            {#if participante}
            <h1 class="shadow-sm border border-bg-secondary bg-content-primary text-white rounded-xl p-3">{participante.nome}</h1>
            <button on:click={() => (selecionaParticipante(null))} class="absolute material-symbols-outlined hover:scale-110 transition-all">close</button>
            {:else}
            <select name="" id="" bind:value={cboPapel}>
                <option value="Aluno">Aluno</option>
                <option value="Professor">Professor</option>
            </select>
            <input type="text" class="border border-bg-secondary focus:outline-slate-400 rounded-md w-full shadow-sm px-5 py-2" bind:value={txtParticipante} on:input={atualizaLista}>
            {#if mostrarLista}
            <ul class="max-h-40 overflow-y-scroll border border-bg-secondary rounded-xl">
                {#if pessoas}
                {#each pessoas as pessoa}
                <li>
                    <button class="buttonPrimaryComponent" on:click={() => (selecionaParticipante(pessoa))}>{pessoa.nome} | Convidar Participante</button>
                </li>
                {/each}
                {/if}
            </ul>
            {/if}
            {/if}
        </div>
        <div>
            <label class="font-bold inline-block pb-2" for="text">Mensagem</label>
            <textarea name="" id="" cols="30" rows="4" class="focus:outline-slate-400 rounded-md w-full shadow-sm px-5 py-2 resize-none border border-bg-secondary"></textarea>
        </div>
        <div>
            <input class="buttonPrimaryComponent" type="submit" value="Enviar Convite" on:click={enviarConvite}>
        </div>
    </div>
    <div class="w-full mt-2 bg-bg-primary shadow-xl p-5 flex flex-col gap-4 text-sm rounded-xl">
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
    <div class="w-full mt-2 bg-bg-primary shadow-xl p-5 flex flex-col gap-4 text-sm rounded-xl">
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
                        <th>
                            <p>Deixar projeto se for usuario</p>
                        </th>
                    </tr>
                    {/each}
                </tbody>
            </table>
        </div>
    </div>     
</div>