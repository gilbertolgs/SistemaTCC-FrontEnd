<script lang="ts">

  import Card from '$components/Card.svelte';
  import { PUBLIC_PAGENAME } from '$env/static/public';
  let projetos = [
      {
          nome: "Projeto 1",
          descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          id: 1,
          estado: 0
      },
      {
          nome: "Projeto 2",
          descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          id: 2,
          estado: 1
      },
      {
          nome: "Projeto 3",
          descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          id: 3,
          estado: 2
      }
  ];
</script>

<svelte:head>
	<title>{PUBLIC_PAGENAME} - Seus Projetos</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="flex items-center flex-col">
    <h1>
        Seus Projetos
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