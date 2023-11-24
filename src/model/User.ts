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
    imagem: string | null,
    token: string,
  ) {
    super(idCurso, nome, email, senha, papel, imagem);
    this.id = id;
    this.token = token;
  }


}

export default User;
