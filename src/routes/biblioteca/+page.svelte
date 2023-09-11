<script lang="ts">
    import Card from '$components/Card.svelte';
    import { PUBLIC_PAGENAME } from '$env/static/public';
    let projetos = [
        {
            nome: "Projeto 1",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            id: 1
        },
        {
            nome: "Projeto 2",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            id: 2
        },
        {
            nome: "Projeto 3",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            id: 3
        },
        {
            nome: "Projeto 4",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            id: 4
        }
    ]
</script>
<svelte:head>
	<title>{PUBLIC_PAGENAME} - Projetos Publicados</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="flex items-center flex-col">
    <h1>
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