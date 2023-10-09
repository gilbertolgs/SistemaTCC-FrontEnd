<script lang="ts">
    import Card from '$components/Card.svelte';
    import { pageName } from '../stores';
    import type Projeto from '$model/Projeto';
    import { onMount } from 'svelte';
    import Api from '$repository/axiosInstance';

    let projetos: Projeto[] = [];

    async function getData(){
        projetos = await Api.get('projetos/pendente');
        console.log(projetos);
        
    }

    onMount(getData);
</script>

<svelte:head>
	<title>{pageName} - Projetos Pendentes</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="flex items-center flex-col">
    <div class="flex items-center h-max mx-auto w-full text-text-primary bg-bg-primary shadow-xl p-10 gap-4 text-sm rounded-xl mb-2 justify-between">
        <h1>
            Projetos Pendentes
        </h1>
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