import Usuario from "./Usuario";

class User extends Usuario {
  id: number;
  token: string;

  constructor(
    id: number,
    idCurso: number,
    nome: string,
    email: string,
    senha: string,
    papel: string,
    periodo: number,
    token: string
  ) {
    super(idCurso, nome, email, senha, papel, periodo);
    this.id = id;
    this.token = token;
  }
}

export default User;
