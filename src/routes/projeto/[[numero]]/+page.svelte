<script lang="ts">
    let projeto = {
        id: 1,
        nome: 'Projeto 1',
        descricao: 'Lorem ipsum'
    }
    export let data;
    let numeroProduto = data.params.numero
    projeto.nome = 'Projeto ' + numeroProduto
    
</script>

<svelte:head>
	<title>SGTCC - {projeto.nome} </title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="flex items-center">
    <div class="h-max mx-auto flex flex-col items-center">
        <div class="bg-white shadow-xl p-10 flex flex-col gap-4 text-sm rounded-xl">
            <div>
                <h1 class="text-gray-600 font-bold inline-block pb-2">{projeto.nome}</h1>
            </div>
            <div>
                <p class="text-gray-600 font-bold inline-block pb-2">{projeto.descricao}</p>
            </div>
        </div>        
    </div>
</div>