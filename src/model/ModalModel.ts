class ModalModel {
    titulo: string;
    mensagem: string;
    opt1: any;
    opt2: any;

    constructor(titulo: string, mensagem: string, opt1: any, opt2: any) {
        this.titulo = titulo;
        this.mensagem = mensagem;
        this.opt1 = opt1;
        this.opt2 = opt2;
    }
}

export default ModalModel;