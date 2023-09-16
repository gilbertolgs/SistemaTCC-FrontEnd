<script lang="ts">

    import { pageName } from '../stores';

    let cursos = [
        {
            id: 1,
            nome: 'Sistemas de Informação'
        },
        {
            id: 2,
            nome: 'Administração'
        },
    ]
    let papeis = [
        {
            id: 1,
            nome: 'Administrador'
        },
        {
            id: 2,
            nome: 'Professor'
        },
    ]
</script>

<svelte:head>
	<title>{pageName} - Cadastro</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="flex items-center text-text-primary">
    <div class="h-max mx-auto flex flex-col items-center">
        <div class="bg-bg-primary shadow-xl p-10 flex flex-col gap-4 text-sm rounded-xl">
            <div>
                <label class="font-bold inline-block pb-2" for="text">Nome</label>
                <input required class="focus:outline-text-primary rounded-md w-full shadow-sm px-5 py-2 bg-bg-secondary placeholder-text-tertiary" type="text" name="text" placeholder="exemplo">
            </div>
            <div>
                <input class="w-full py-2 rounded-md text-white font-bold cursor-pointer bg-content-primary hover:brightness-90" type="submit" value="Cadastrar" >
            </div>
        </div>        
    </div>
</div>