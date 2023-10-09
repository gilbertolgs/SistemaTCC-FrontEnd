<script lang="ts">
    import { pageName, connectionError } from '../stores';

    let connectionErrorValue: number;

    let corpoPagina: {
        titulo: String,
        mensagem: String,
    }

    connectionError.subscribe((value) => {
        connectionErrorValue = value;
    });

    function mostrarMensagem(){        
        if(connectionErrorValue == 500){
            corpoPagina = {
                titulo : "Erro na Conexão",
                mensagem : "O servidor não conseguiu retornar os dados solicitados, tente novamente."
            }
        }
        else if(connectionErrorValue == 401){
            corpoPagina = {
                titulo : "Sem Permissão",
                mensagem : "Você não tem permissão para acessar essa página."
            }
        }
        else{
            corpoPagina = {
                titulo : "Erro desconhecido",
                mensagem : "Algo deu errado."
            }
        }
    }

    mostrarMensagem();


    function recarregarPagina() {
        window.location.reload();
    }
</script>

<svelte:head>
	<title>{pageName} - {corpoPagina.titulo}</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="flex flex-col items-start text-text-primary m-3">
    <p>{corpoPagina.mensagem}</p>
    <p class="text-text-secondary text-sm">Erro: {connectionErrorValue}</p>
    <button on:click={recarregarPagina} class="mt-2 p-2 rounded-md text-white font-bold cursor-pointer bg-content-primary hover:brightness-90">Recarregar</button>
</div>