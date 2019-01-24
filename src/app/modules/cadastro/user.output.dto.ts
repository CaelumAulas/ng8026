export class UserOutputDto {
  name = '';
  username = '';
  senha = '';
  avatar = '';
  phone = '';

  constructor(objetoDadosFormulario){
    this.name = objetoDadosFormulario.nome;
    this.username = objetoDadosFormulario.username;
    this.senha = objetoDadosFormulario.senha;
    this.avatar = objetoDadosFormulario.avatar;
    this.phone = objetoDadosFormulario.telefone;
  }


}
