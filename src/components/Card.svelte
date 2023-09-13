<script lang="ts">
  import {onMount} from 'svelte';
  function doNothing(){

  }
  onMount(doNothing);
    export let item = {
        nome: String,
        descricao: String,
        id: Number
    };
    export let tipo: string;
</script>

<div class="group relative rounded-lg overflow-hidden bg-bg-primary hover:shadow-2xl hover:scale-105 transition-all m-4 lg:w-[30%] border border-text-primary">
    <div class="h-40 bg-content-primary">
      <img
        src=''
        alt='City'
        class="h-40 w-full object-cover object-center hidden"
      />
    </div>
    <div class="h-1/2 p-4 ">
      <h3 class="mb-2 text-base font-semibold text-content-primary">
        <a href='/{tipo}?id={item.id}' class="hover:underline">
          {item.nome}
        </a>
      </h3>                        
      <div class='flex flex-row justify-between text-xs mt-2 text-text-secondary'> 
          <p>{item.descricao}</p>
      </div>
    </div>
</div>

<style>

</style>