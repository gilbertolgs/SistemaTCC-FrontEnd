import type Projeto from "./Projeto";

class Convite {
    id: number;
    idProjeto: number;
    idUsuario: number;
    projeto: Projeto;
    dataEnvio: Date;
    dataExpira: Date;
    aceito: number;

    constructor(id: number, idProjeto: number, idUsuario: number, projeto: Projeto, dataEnvio: Date, dataExpira: Date, aceito: number) {
        this.id = id;
        this.idProjeto = idProjeto;
        this.idUsuario = idUsuario;
        this.projeto = projeto;
        this.dataEnvio = dataEnvio;
        this.dataExpira = dataExpira;
        this.aceito = aceito;
    }
}

export default Convite;