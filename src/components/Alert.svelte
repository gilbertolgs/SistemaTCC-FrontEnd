<script lang="ts">
    import type DadosAlert from "$model/DadosAlert";
    import { fade } from "svelte/transition";
    import { storeAlerts } from "../routes/stores";

    let arrAlerts: DadosAlert[] = [];
    storeAlerts.subscribe((value) => {
        arrAlerts = value;

        fadeOut(0);
    });

    function fadeOut(index: number){
        // let element = document.getElementById(`alert${index}`);
        // if (element) {
        //     element.style.opacity = '0'; // Set opacity to 0
        // }
        setTimeout(() => {
            closeAlert(0);
        }, 2000);
    }

    function closeAlert(index: number){
        if(index == 0){
            arrAlerts.splice(0, 1);
        }
        else{
            arrAlerts.splice(index, index);
        }
        
        storeAlerts.set([...arrAlerts]);
    }
</script>

<div class="grid absolute w-[70%] ml-[10%]">
    {#each arrAlerts as alert, index}
    <div id="alert{index}" class="rounded-xl grid grid-flow-col p-2 m-1 {alert.cor} transition-all duration-1000">
        {#if alert.icone != ''}
        {alert.icone}
        {/if}
        {alert.mensagem}
        <button class="ml-auto" on:click={() => {fadeOut(index)}}>
            <span class="material-symbols-outlined">
                close
            </span>
        </button>
    </div>
    {/each}
</div>