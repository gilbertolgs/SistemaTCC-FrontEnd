<script lang="ts">
    import { pageName, storeConvites, storeLogin } from '../stores';
    import type Convite from '$model/Covite';
    import Projeto from '$model/Projeto';
    import { onMount } from 'svelte';
    import Api from '$repository/axiosInstance';
    import Cookie from '$model/Cookie';
    import type User from '$model/User';
    
    let convites: Convite[] = [];

    storeConvites.subscribe((value) => {
        convites = value;
    });

    let user: User | null;
    storeLogin.subscribe((value) => {
        user = value;
    });

    
    async function getData(){
        if(user){
            storeConvites.set(await Api.get('convites', {IdUsuario : user.id}));
        }
    }

    onMount(getData);
    
    async function responderConvite(id: number, resposta: number){
        let convite = {
            "id": id,
            "aceito": resposta
        }
        if(resposta == 1){
            await Api.put('convites/responderConvite', convite);
        }
        else if(resposta == 2){
            await Api.put('convites/responderConvite', convite);
        }

        getData();
    }


</script>
<svelte:head>
	<title>{pageName} - Convites</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="flex items-center flex-col">
    <div class="tableHolderComponent">
        <table class="tableComponent">
            <thead class="text-text-primary">
                <tr>
                    <th>Convites Pendentes</th>
                </tr>
            </thead>
            <tbody>
                {#each convites as convite}
                <tr class="trComponent text-text-secondary">
                    <th class="w-full p-4 pl-8 border-b">
                        <p>{convite.projeto.nome}</p>
                    </th>
                    <th class="flex border-b text-text-primary">
                        <button class="p-4 bg-green-500 hover:scale-110 transition-all rounded-l-md font-bold hover:brightness-90" on:click={() => {responderConvite(convite.id, 1)}}>Aceitar</button>
                        <button class="p-4 mr-1 bg-red-500 hover:scale-110 transition-all rounded-r-md font-bold hover:brightness-90" on:click={() => {responderConvite(convite.id, 2)}}>Rejeitar</button>
                    </th>
                </tr>
                {/each}
            </tbody>
            </table>
    </div>
</div>