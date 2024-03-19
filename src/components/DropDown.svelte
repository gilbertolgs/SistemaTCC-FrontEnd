<script lang="ts">
    export let id: number;
    export let dados: any;
    export let perfil: any;
</script>
  
{#if perfil}
<a href="usuario?id={perfil.id}" class="flex items-center p-3 -mt-2 text-sm  transition-colors duration-200 transform hover:brightness-90 bg-base-100">
    <img class="flex-shrink-0 object-cover mx-1 rounded-full w-9 h-9" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="avatar">
    <div class="mx-1">
        <h1 class="text-sm font-semibold ">{perfil.nome}</h1>
        <p class="text-sm ">{perfil.email}</p>
    </div>
</a>
<hr class="border-gray-200 dark:border-gray-700 ">
<a href="logout" class="block px-4 py-3 text-sm  capitalize transition-colors duration-200 transform hover:brightness-90 bg-base-100">
    Log Out
</a>
{:else}
{#each dados as dado}
<hr class="border-gray-200 dark:border-gray-700 ">
{#if dado.link}
<a href="{dado.link}" class="block px-4 py-3 text-sm capitalize transition-colors duration-200 transform hover:brightness-90 bg-base-100">
    {dado.nome}
</a>
{:else}
<button on:click="{() => {dado.botao(id)}}" class="block px-4 py-3 text-sm capitalize transition-colors duration-200 transform hover:brightness-90 bg-base-100 w-full">
    {dado.nome}
</button>
{/if}
{/each}
{/if}