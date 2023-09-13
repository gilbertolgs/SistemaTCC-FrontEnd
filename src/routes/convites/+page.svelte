<script lang="ts">
  import {onMount} from 'svelte';
  function doNothing(){

  }
  onMount(doNothing);
    import { PUBLIC_PAGENAME } from '$env/static/public';
    let convites = [
        {
            nome: "Projeto 1",
            curso: "Sistemas de Informação",
            id: 1
        },
        {
            nome: "Projeto 2",
            curso: "Administração",
            id: 2
        }
    ]
    function responderConvite(id: number, aceitou: boolean){
        if(aceitou){
            // aceitaconvite
        }
        else{
            // recusaconvite
        }
    }
</script>
<svelte:head>
	<title>{PUBLIC_PAGENAME} - Convites</title>
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
                        <p>{convite.nome}</p>
                    </th>
                    <th class="flex border-b text-text-primary">
                        <button class="p-4 bg-green-500 hover:scale-110 transition-all rounded-l-md font-bold hover:brightness-90" on:click={() => {responderConvite(convite.id, true)}}>Aceitar</button>
                        <button class="p-4 mr-1 bg-red-500 hover:scale-110 transition-all rounded-r-md font-bold hover:brightness-90" on:click={() => {responderConvite(convite.id, false)}}>Rejeitar</button>
                    </th>
                </tr>
                {/each}
            </tbody>
            </table>
    </div>
</div>