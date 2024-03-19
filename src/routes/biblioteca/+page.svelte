<script lang="ts">
    import Card from '$components/Card.svelte';
    import { pageName } from '../stores';
    import type Projeto from '$model/Projeto';
    import { onMount } from 'svelte';
    import Api from '$repository/axiosInstance';

    let projetos: Projeto[] = [];

    async function getData(){
        projetos = await Api.get('projetos', {query : 1});        
    }

    onMount(getData);
</script>
<svelte:head>
	<title>{pageName} - Projetos Publicados</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="flex items-center flex-col">
    <h1 class="bg-base-100 text-base-content p-5 rounded-xl w-full text-center">
        Biblioteca de Trabalhos de Conclusão de Curso
    </h1>
    <div class="cardHolderComponent">
          {#each projetos as projeto}
          <Card
          item={projeto}
          tipo="projeto"
          />
          {/each}
    </div>
</div>