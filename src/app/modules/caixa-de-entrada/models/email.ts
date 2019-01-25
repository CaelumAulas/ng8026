export class Email {

  private _destinatario = '';
  private _assunto = '';
  private _conteudo = '';
  private _dataDeEnvio = '';
  private _id = '';

  constructor(
    {destinatario, assunto, conteudo, dataDeEnvio, id}:
    {destinatario: string, assunto: string, conteudo: string , dataDeEnvio: string, id: string}
  )
  {
    this._destinatario = destinatario;
    this._conteudo = conteudo;
    this._dataDeEnvio = dataDeEnvio;
    this._id = id;

    this.setAssunto(assunto);
  }

  get destinatario(): string {
    return this._destinatario;
  }

  get assunto(): string {
    return this._assunto;
  }

  get conteudo(): string {
    return this._conteudo;
  }

  get dataDeEnvio(): string {
    return this._dataDeEnvio;
  }

  get id():string {
    return this._id;
  }

  get introducao(): string{

    if (this.conteudo && this.conteudo.length > 190) {
      return `${this.conteudo.substr(0, 190)} ...`;
    }
    return this.conteudo;
  }

  private setAssunto(assunto) {
    if (assunto) {
      this._assunto = assunto;
    }
    else {
      this._assunto = '<sem assunto>';
    }
  }

}
