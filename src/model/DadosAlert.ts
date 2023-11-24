import { get } from "svelte/store";
import { storeAlerts } from "../routes/stores";

class DadosAlert {
    icone: string;
    mensagem: string;
    cor: string;

    constructor(icone: string, mensagem: string, cor: string) {
        this.icone = icone;
        this.mensagem = mensagem;
        this.cor = cor;
    }

    static addAlert(icone: string, mensagem: string, cor: string){
        let dadosalert = {
            icone: icone,
            mensagem: mensagem,
            cor: cor
        } 
        storeAlerts.set([...get(storeAlerts), dadosalert]);
    }
}

export default DadosAlert;