<script lang="ts">
  import {onMount} from 'svelte';
  function doNothing(){

  }
  onMount(doNothing);
    let open = 'h-0';
    export function openDropDown() {
        open = 'h-100 py-5';
    }

    export function closeDropDown() {
        open = 'h-0';
    }

    export let dados: any;
    export let perfil: any;
</script>
<div class="absolute right-0 top-10 z-20 w-56 mt-3 overflow-hidden rounded-md shadow-xl bg-bg-primary text-text-primary {open} transition-all" >
    {#if perfil}
    <a href="/usuario?id={perfil.id}" class="flex items-center p-3 -mt-2 text-sm  transition-colors duration-200 transform hover:brightness-90 bg-bg-primary">
        <img class="flex-shrink-0 object-cover mx-1 rounded-full w-9 h-9" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="avatar">
        <div class="mx-1">
            <h1 class="text-sm font-semibold ">{perfil.nome}</h1>
            <p class="text-sm ">{perfil.email}</p>
        </div>
    </a>
    <hr class="border-gray-200 dark:border-gray-700 ">
    <a href="/login" class="block px-4 py-3 text-sm  capitalize transition-colors duration-200 transform hover:brightness-90 bg-bg-primary">
        Log Out
    </a>
    {:else}
    {#each dados as dado}
    <hr class="border-gray-200 dark:border-gray-700 ">
    <a href="{dado.link}" class="block px-4 py-3 text-sm  capitalize transition-colors duration-200 transform hover:brightness-90 bg-bg-primary">
        {dado.nome}
    </a>
    {/each}
    {/if}
</div>