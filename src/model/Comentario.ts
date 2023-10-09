import type Usuario from "./Usuario";

class Comentario {
    id: number;
    idProjeto: number;
    idUsuario: number;
    usuario: Usuario;
    conteudo: string;
  
    constructor(id: number, idProjeto: number, idUsuario: number, usuario: Usuario, conteudo: string) {
      this.id = id;
      this.idProjeto = idProjeto;
      this.idUsuario = idUsuario;
      this.usuario = usuario;
      this.conteudo = conteudo;
    }
  }  

export default Comentario