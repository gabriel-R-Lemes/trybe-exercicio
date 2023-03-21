import Clube from "./Clube"
import Quadra from "./Quadra";
import QuadraFutebol from "./QuadraFutebol";
import QuadraTenis from "./QuadraTenis";

const clube = new Clube;
const q1 = new QuadraFutebol;

const data = new Date('2023-05-01');
clube.adicionarQuadra(q1);
// q1.reservar(data)

const reservarQuadraFutebol = clube
  .buscarQuadra<QuadraFutebol>(0) // buscando a quadra de futebol a posição 0, já que ela foi a primeira a ser adicionada no array de quadras do clube
  .reservar(data); // o método  reservar é da Classe QuadraFutebol, e passamos a data que queremos reservar

console.log(reservarQuadraFutebol);

const q2 = new QuadraTenis;
const data2 = new Date('2023-04-02');
clube.adicionarQuadra(q2);

const reservarQuadraTenis = clube
  .buscarQuadra<QuadraTenis>(1)
  .reservar(data2);

console.log(reservarQuadraTenis);