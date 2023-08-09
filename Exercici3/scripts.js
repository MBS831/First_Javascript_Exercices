//suma nombres parells

function sumaNombresParells(){

    let array = [2, 7, 12, 5, 8, 10, 3, 6, 15, 4];
    let suma = 0;

    for (i = 0; i < array.length; i++) {

        if (array[i] % 2 == 0) {

            suma += array[i];
        }

    }




    document.getElementById("mostrarSuma").innerHTML = suma;


}