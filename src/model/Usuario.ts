class Usuario {
  idCurso: number;
  nome: string;
  email: string;
  senha: string;
  papel: string;
  periodo: number;

  constructor(
    idCurso: number,
    nome: string,
    email: string,
    senha: string,
    papel: string,
    periodo: number
  ) {
    this.idCurso = idCurso;
    this.nome = nome;
    this.email = email;
    this.senha = senha;
    this.papel = papel;
    this.periodo = periodo;
  }
}

export default Usuario