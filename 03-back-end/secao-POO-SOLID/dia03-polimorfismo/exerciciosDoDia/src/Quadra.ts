import IAgenda from "./interfaces/IAgenda";

// src/Quadra.ts
abstract class Quadra {
  abstract reservar<T>(date: Date): IAgenda<T>;
}

export default Quadra;