export default class AnswerModel {
  #valor: string;
  #certa: boolean;
  #revelada: boolean;

  constructor(valor: string, certa: boolean, revelada: boolean) {
    this.#valor = valor;
    this.#certa = certa;
    this.#revelada = revelada;
  }

  get valor() {
    return this.#valor;
  }
  get certa() {
    return this.#certa;
  }
  get revelada() {
    return this.#revelada;
  }
}
