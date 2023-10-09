class Projeto {
    id: number;
    idCurso: number;
    idUsuario: number;
    nome: string;
    descricao: string;
  
    constructor(id: number, idCurso: number, idUsuario: number, nome: string, descricao: string) {
      this.id = id;
      this.idCurso = idCurso;
      this.idUsuario = idUsuario;
      this.nome = nome;
      this.descricao = descricao;
    }
  }

  export default Projeto;