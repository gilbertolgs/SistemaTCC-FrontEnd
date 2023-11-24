<script lang="ts">
    import Modal from "./Modal.svelte";
    import type ModalModel from "$model/ModalModel";

    export let dadosModal: ModalModel;
    function openModal(titulo: string, mensagem: string, opt1: any, opt2: any){
        dadosModal = {
            titulo: titulo,
            mensagem: mensagem,
            opt1: opt1,
            opt2: opt2
        }
        toggleModal();
    }

    //Funções Componentes
    let toggleModal: () => void;
</script>

<Modal
bind:toggleModal={toggleModal}
dados={dadosModal}
/>