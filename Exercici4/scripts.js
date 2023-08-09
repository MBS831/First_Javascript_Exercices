


const animals = [
    new Animal("Marle", "Gato", 2, "Negro"),
    new Animal("Kara", "Conejo", 5, "Gris"),
    new Animal("Estop", "Caballo", 6, "Blanco"),
    new Animal("Onda", "Perro", 7, "Negro"),
    new Animal("Esterea", "Perro", 2, "Gris")
];

function buscarAnimal() {


    let animalBuscar = document.getElementById("buscarAnimal").value.toLowerCase();
       
    for (i = 0; i < animals.length; i++) {
        if (animalBuscar === animals[i].nom.toLowerCase()) {
            document.getElementById("nomAnimal").innerText = animals[i].nom;
            document.getElementById("especie").innerText = animals[i].especie;
            document.getElementById("edat").innerText = animals[i].edat;
            document.getElementById("color").innerText = animals[i].color;
            return;
        }
    }
    alert("No s'ha trobat cap animal amb aquest nom");
}

function animalsNegres() {
    const animalsNegros = animals.reduce((negre, animalNegre) => {
        if (animalNegre.color.toLowerCase() === 'negro') {
            negre.push(animalNegre);
        }
        return negre;
    }, []);

    animalsNegros.forEach(animal => console.log(animal.toString()));
}


