class Usuario {
  idCurso: number;
  nome: string;
  email: string;
  senha: string;
  papel: string;
  periodo: number;
  imagem: string | null;

  constructor(
    idCurso: number,
    nome: string,
    email: string,
    senha: string,
    papel: string,
    periodo: number,
    imagem: string | null
  ) {
    this.idCurso = idCurso;
    this.nome = nome;
    this.email = email;
    this.senha = senha;
    this.papel = papel;
    this.periodo = periodo;
    this.imagem = imagem;
  }
}

export default Usuario