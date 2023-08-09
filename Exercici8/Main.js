
function curso() {
    
const curso=new Curs('Fonaments de la programació');

const primerAlumne= new Nacional ('Marc', 1, '12345678A');
const segonAlumne=new Nacional ('Laia', 2, '98765432B');
const tercerAlumne= new Erasmus ('Peter', 3, 'ABC123456');
const quartAlumne = new Erasmus ('Kate', 4, 'DEF654321') ;


curso.addAlumno(primerAlumne);
curso.addAlumno(segonAlumne);
curso.addAlumno(tercerAlumne);
curso.addAlumno(quartAlumne);

console.log(curso);

primerAlumne.addNota(1);

primerAlumne.addNota(3);
primerAlumne.addNota(5);
primerAlumne.addNota(7);
primerAlumne.addNota(9);

console.log(primerAlumne);

segonAlumne.addNota(2);
segonAlumne.addNota(4);
segonAlumne.addNota(6);
segonAlumne.addNota(8);
segonAlumne.addNota(10);

console.log(segonAlumne);

tercerAlumne.addNota(1);
tercerAlumne.addNota(2);
tercerAlumne.addNota(5);
tercerAlumne.addNota(6);
tercerAlumne.addNota(9);
tercerAlumne.addNota(10);

console.log(tercerAlumne);

quartAlumne.addNota(3);
quartAlumne.addNota(4);
quartAlumne.addNota(7);
quartAlumne.addNota(8);


console.log(primerAlumne.notes);
console.log(segonAlumne.notes);
console.log(tercerAlumne.notes);
console.log(quartAlumne.notes);


primerAlumne.calcularMitja();
segonAlumne.calcularMitja();
tercerAlumne.calcularMitja();
quartAlumne.calcularMitja();

console.log(tercerAlumne);
console.log(quartAlumne);
console.log(primerAlumne);
console.log(segonAlumne);


curso.eliminaAlumno(0,1);


tercerAlumne.nombre="Jason";


console.log(curso);
console.log(curso.toString());



}


    
    
   


