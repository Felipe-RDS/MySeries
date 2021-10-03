export class Conteudo{
  public id: number;
  public nome: string;
  public descricao: string;
  public status: boolean;
  public imagem: string;

  constructor(id?: number, nome?: string, descricao?: string, status?: boolean, imagem?: string){
    this.id = id || 0;
    this.nome = nome || '';
    this.descricao = descricao || '';
    this.status = status || false;
    this.imagem = imagem || '';
  }

}
