

//   Si sexo='M' el peso debe estar comprendido entre 70 y 90
    //   Si sexo='F' el peso debe estar comprendido entre 55 y 75
    //   Sino entre 55 y 75

       

        //   Si el peso esta comprendido entre 91 y 130 en caso de 'M'

        //      Indicaremos que debe hacer cardio intenso y pesas

        //   Si el peso esta comprendido entre 76 y 110 en caso de 'F'

        //      Indicaremos que debe hacer cardio intenso y pesas

        //

    

        // Para cualquier rango de edades:

        //   En cualquier caso, si la altura es menor a 100cm, tanto

        //   en el caso de 'M', 'F', indicaremos que, adem'as

        //   debe tomar hormonas de crecimiento.

        //

        //   Y, en cualquier caso, si m'as alto de 190cm, le

        //   ofreceremos basketball.

        //

        //   Tarifas:                      M       T

        //      cardio ligero             30      40

        //      cardio más ligero         35      45

        //      cardio intenso y pesas    40      50

        //

        //      hormonas de crecimiento    0       0

        //      basketball                +5     +10

        //

        //  1. Mostrar por pantalla (en el DOM): el tipo de ejercicio a realizar

        //   o el error en el caso de no cumplirse la edad.

        //  2. Mostrar por pantalla (en el DOM): la tarifa que debe aplicarse

        //  3. Mostrar por pantalla (en el DOM): los extras



function procesar() {

    let nombre_apellidos = getValue("name");
    let edad = getNumberValue("age");
    let altura = getNumberValue("tall");
    let peso = getNumberValue("weight");
    let sexo = getValue("sex");
    let condicion = getValue("condition");
    let horario = getValue("timetable");


    //quan el nom estigui en blanc retorna false i aixo és el qué farà
    //quan sigui false, alert. si es true 
    if (!comprobarNombre(nombre_apellidos)){
        alert("Tienes que introducir nombre y apellido");
        return;
    } else {
        alert("Registrado");
       
    }

    //si es S debes hacer cardioligero sino ultra

    if (!siEsS(condicion)) {
        alert("debes hacer cardio ligero");
        
    } else{
        alert("debes hacer cardio ultraligero");
        
    }
    
    //ets major edat?
    if (esMayorDeEdad(edad)){
        alert("ets menor d'edat, no es pot fer el registre, necessites autorització");
        
    } else {
       alert("Ets major d'edat i el preu amb descompte es" + aplicarDescuento(edad));
    }

}  
    


    function aplicarDescuento(edad) {
        let precio = 100; // Precio base
        
        switch (true) {
          case (edad > 55):
            precio -= precio * 0.5; // Reducción del 50%
            break;
          case (edad > 45):
            precio -= precio * 0.2; // Reducción del 20%
            break;
          case (edad > 35):
            precio -= precio * 0.15; // Reducción del 15%
            break;
          case (edad > 25):
            precio -= precio * 0.1; // Reducción del 10%
            break;
          default:
            // No se aplica descuento
            break;
        }
        
        return precio;
      }    
      
      
      
      
   
  

function siEsS (condicion) {
    if (condicion == 's') {
        return true;
    } return false;
}


function esMayorDeEdad(edad){
    if (edad >=18){
        return false;
    }
    return true;
}

function comprobarNombre (nombre){
    if (nombre == ""){
        return false;
    }return true;
}


function getValue (dom_id){

    let elemento=document.getElementById(dom_id);
    if (elemento == null){
        alert("Te has equivocado, no existe" + dom_id);
        return "";
    }
    return elemento.value.trim();

}

function getNumberValue(dom_id){

    let valor = getValue(dom_id);
    if (isNaN(valor) || valor==""){
        alert("El numero no es valido" + valor);
        return 0;
    }

    return Number(valor);

}