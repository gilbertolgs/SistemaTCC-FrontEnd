<script lang="ts">
    import type Projeto from "$model/Projeto";

    export let projeto: Projeto;
</script>

<div class="h-max mx-auto flex flex-col items-center">
    <div class="w-full mt-2 bg-bg-primary shadow-xl p-5 flex flex-col gap-4 text-sm rounded-xl">
        <h1>Projeto</h1>
        <h2>{projeto.imagem}</h2>
        <h2>{projeto.nome}</h2>
        <h2>{projeto.descricao}</h2>
        <h2>{projeto.idCurso}</h2>
        <button>Editar</button>
        <button>Excluir</button>
        <button>Tornar Publico se for ADMin</button>
    </div>
</div>
