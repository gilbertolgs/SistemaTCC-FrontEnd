<script lang="ts">

    import { pageName } from '../stores';

    let pessoas = [
        {
            id: 1,
            nome: 'Gilberto Luis'
        },
        {
            id: 2,
            nome: 'João Marcos'
        },
        {
            id: 2,
            nome: 'João Evangelista'
        }
    ]
</script>

<svelte:head>
	<title>{pageName} - Enviar Convite</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="flex items-center text-text-primary">
    <div class="h-max mx-auto flex flex-col items-center">
        <div class="flex items-center h-max mx-auto w-full text-text-primary bg-bg-primary shadow-xl p-10 gap-4 text-sm rounded-xl mb-2 justify-center">
            <h1 class="font-bold">Convidar Participante</h1>
        </div>
        <div class="bg-bg-primary shadow-xl p-10 flex flex-col gap-4 text-sm rounded-xl">
            <div>
                <label class="font-bold inline-block pb-2" for="text">Pessoa</label>
                <select name="" id="" class="focus:outline-text-primary rounded-md w-full shadow-sm px-5 py-2 bg-bg-secondary">
                    {#each pessoas as pessoa}
                    <option value="{pessoa.id}">{pessoa.nome}</option>
                    {/each}
                </select>
            </div>
            <div>
                <label class="font-bold inline-block pb-2" for="text">Mensagem</label>
                <input required class="focus:outline-text-primary rounded-md w-full shadow-sm px-5 py-2 bg-bg-secondary" type="text" name="text">
            </div>
            <div>
                <input class="w-full py-2 rounded-md text-white font-bold cursor-pointer bg-content-primary hover:brightness-90" type="submit" value="Enviar Convite">
            </div>
        </div>        
    </div>
</div>