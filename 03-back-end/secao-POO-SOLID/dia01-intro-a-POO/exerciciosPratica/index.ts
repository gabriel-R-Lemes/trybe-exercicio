class Estudante {
  private _matricula: number;
  private _nome: string;
  private _notas: number[];
  private _trabalhos: number[];

  constructor(
    matricula: number,
    nome: string,
    notas: number[],
    trabalhos: number[],
  ) {
    this._matricula = matricula;
    this._nome = nome;
    this._notas = notas;
    this._trabalhos = trabalhos;
  }

  get matricula() { return this._matricula}
  get nome() { return this._nome}
  get notas() { return this._notas}
  get trabalhos() { return this._trabalhos}

  get sum() {
    return this._notas.reduce((acc, curr) => {return acc + curr}, 0);
  }

  get med() {
    return this.sum / 4;
  }
}

class Cliente {
  private _nome: string;

}

class Item {
  private _nome: string;
  private _preco: number;

  constructor(nome: string, preco: number) {
    this._nome = nome;
    this._preco = preco;
  }

  get preco() {
    return this._preco;
  }
}

// Order.ts
class Order {
  private _client: Cliente;
  private _items: Item[] = [];
  private _paymentMethod: string;
  private _discount = 0;

  constructor(
    client: Cliente, 
    items: Item[], 
    paymentMethod: string, 
    discount: number,
  ) {
    this._client = client;
    this.items = items;
    this._paymentMethod = paymentMethod;
    this.discount = discount;
  }

  get client(): Cliente {
    return this._client;
  }

  set client(value: Cliente) {
    this._client = value;
  }

  get items(): Item[] {
    return this._items;
  }

  set items(value: Item[]) {
    if (value.length === 0) {
      throw new Error('O pedido deve ter pelo meno um item.');
    }

    this._items = value;
  }

  get paymentMethod(): string {
    return this._paymentMethod;
  }

  set paymentMethod(value: string) {
    this._paymentMethod = value;
  }

  get discount(): number {
    return this._discount;
  }

  set discount(value: number) {
    if (value < 0) {
      throw new Error('O desconto não pode ser um valor negativo.');
    }

    this._discount = value;
  }

  get total() {
    return this._items.reduce((acc, curr) => { return acc + curr.preco }, 0);
  }

  get totalWithDiscout() {
    return (this.total * (1 - this.discount));
  }
}