export class Perfil {

  public id: number;
  public foto: string;
  public nome: string;
  public idade: number;
  public email: string;
  public senha: string;
  public status: boolean;

  constructor()
  constructor(id?: number, foto?: string, nome?: string,
              idade?: number, email?: string, senha?: string, status?: boolean) {

    this.id = (id)? id : 999;
    this.nome = (nome)? nome: '';
    this.idade = (idade)? idade : 0;
    this.status = (status != null && status !=undefined)? status : false;
    this.email = (email)? email: '';
    this.foto = (foto)? foto: '';
    this.senha = (senha)? senha: '';
  }
}
