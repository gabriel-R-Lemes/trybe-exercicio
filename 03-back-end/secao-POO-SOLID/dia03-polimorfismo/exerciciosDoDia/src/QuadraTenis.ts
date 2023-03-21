import IAgenda from "./interfaces/IAgenda";
import ITenis from "./interfaces/ITenis";
import normas from "./normas/normasDeUso";
import Quadra from "./Quadra";

export default class QuadraTenis extends Quadra {
  public tenisData: ITenis = normas.tenis;

  reservar<ITenis>(dataReserva: Date): IAgenda<ITenis> {
    const protocolo = (Math.random() + 1).toString(30).substring(3);
    return {
      protocolo,
      data: dataReserva,
      regras: this.tenisData as unknown as ITenis
    }
  }
}