<script lang="ts">

  import Card from '$components/Card.svelte';
  import { pageName, projetos } from '../stores';
</script>

<svelte:head>
	<title>{pageName} - Seus Projetos</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="flex items-center flex-col">
    <div class="flex items-center h-max mx-auto w-full text-text-primary bg-bg-primary shadow-xl p-10 gap-4 text-sm rounded-xl mb-2 justify-between">
        <h1>
            Seus Projetos
        </h1>
        <a href="criar-projeto" class="p-2 bg-green-500 hover:scale-110 transition-all rounded-md font-bold hover:brightness-90 flex items-center hover:no-underline">
            <span class="material-symbols-outlined">
                Add
            </span>
            <span>
                Add Criar Novo
            </span>
        </a>
    </div>
    <div class="cardHolderComponent">
        {#each projetos as projeto}
            <Card
            item={projeto}
            tipo="projeto"
            />
        {/each}
    </div>
</div>