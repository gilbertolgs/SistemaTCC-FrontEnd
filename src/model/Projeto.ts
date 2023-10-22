class Projeto {
    id: number;
    idCurso: number;
    idUsuario: number;
    nome: string;
    descricao: string;
    imagem: string | null;
  
    constructor(id: number, idCurso: number, idUsuario: number, nome: string, descricao: string, imagem: string | null) {
      this.id = id;
      this.idCurso = idCurso;
      this.idUsuario = idUsuario;
      this.nome = nome;
      this.descricao = descricao;
      this.imagem = imagem;
    }
  }

  export default Projeto;