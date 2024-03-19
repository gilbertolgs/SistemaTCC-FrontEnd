<script lang="ts">
    let showModal = false;
  
    export function toggleModal() {
      showModal = !showModal;
    }

    export let dados = {
        titulo: '',
        mensagem: '',
        opt1: {
            botao: () => {},
            nome: ''
        },
        opt2: {
            nome: ''
        }
    }    
  </script>
  
  {#if showModal}
  <div class="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50 py-10 text-text-primary z-10">
      <div class="max-h-full w-full max-w-xl overflow-y-auto sm:rounded-2xl bg-base-100">
        <div class="w-full">
          <div class="m-8 my-20 max-w-[400px] mx-auto">
            <div class="mb-8">
              <h1 class="mb-4 text-3xl font-extrabold">{dados.titulo}</h1>
              <p class="text-text-secondary">{dados.mensagem}</p>
            </div>
            <div>
              <input type="file" id="myFile" name="filename">
            </div>
            <div class="space-y-4">
                {#if dados.opt1.botao}
                <button on:click={dados.opt1.botao} class="p-3 bg-content-primary hover:brightness-90 rounded-full w-full font-semibold">{dados.opt1.nome}</button>
                {/if}
              <button class="p-3 bg-content-primary hover:brightness-90 border rounded-full w-full font-semibold" on:click={toggleModal}>{dados.opt2.nome}</button>
            </div>
          </div>
        </div>
      </div>
  </div>
  {/if}
  