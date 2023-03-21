import IAgenda from "./interfaces/IAgenda";
import IFutebol from "./interfaces/IFutebol";
import normas from "./normas/normasDeUso";
import Quadra from "./Quadra";

export default class QuadraFutebol extends Quadra {
  public futebolData: IFutebol = normas.futebol;

  reservar<IFutebol>(dataReserva: Date): IAgenda<IFutebol> {
    const protocolo = (Math.random() + 1).toString(30).substring(3);
    return {
      // protocolo é o "id" da reserva, gere de forma aleatória
      protocolo,
      data: dataReserva,
      regras: this.futebolData as unknown as IFutebol,
    }
  }
}