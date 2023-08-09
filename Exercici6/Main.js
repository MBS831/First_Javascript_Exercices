
const clientes = [];

function crearCliente(){


    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById ("apellido").value;
    let dni = document.getElementById ("dni").value;
    let cliente= new Cliente (nombre, apellido, dni); 
    alert(cliente);
    clientes.push(cliente);
    let encontrado = false;
    let i=0;

    while (i<clientes.length && !encontrado){

        if (dni==clientes[i].dni){
            encontrado=true;
        }
        i++;

    } 

    if (!encontrado){

        const nouCompte = new Cliente (nombre, apellido, dni);
        clientes.push(nouCompte);
        console.log (clientes);
    } else {
        console.log ("el titular ya esta dado de alta ");
    }

}

function eliminarClient(){
    let dni=prompt("Intrduce el numero del dni a eliminar");
    let encontrado= false;
    let i=0;
    
    while (i<clientes.length && !encontrado){
        if (clientes[i].dni===dni){
            encontrado=true;
            clientes.splice(i,1);
            alert("El cliente ha sigut eliminat");
        }else {
            alert("el cliente no esta a la llista");
        }
        i++;
    }
    console.log(clientes);
    
}

function buscarCliente(dni){
    
    if(dni>"99999999"){
        
        alert("El dni introducido no es valido");
        }
        else{
       
        let dniFinal = prompt("Introduzca la letra de su dni").toUpperCase();
        } 
    let cliente=clientes.find(cliente => cliente.dni === dni);
   return cliente;
}

function veureCliente(){

    let dni = prompt("Introdueix el el dni del cliente amb lletra");
    let cliente=buscarCliente(dni);
    if (cliente != undefined){
        console.log(cliente.toString());
        
    } else{
        console.log ("El cliente no esta en la lista");
    }

}

function crearCompte(){
    let nombre = prompt("Introdueix el nombre del cliente");
    let dni = prompt("Introdueix el dni");
    let cliente=clientes.find(cliente=>cliente.nombre=== nombre  && cliente.dni=== dni);

    if (cliente != undefined){

        let cuenta = prompt ("Introdueix el numero de cuenta");
        let compte = cliente.cuentas.find (compte => cuenta.numCompte == cuenta);

        if (compte == undefined){

            let saldoInicial=0;
            let cuenta = prompt ("Introdueix el numero de cuenta");
            cliente.addCuenta (new Cuenta (cuenta,saldoInicial));
            console.log(cliente.cuentas);
            console.log (clientes);
            
        } else  {
            console.log("esta cuenta ya esta creada");
        }
    }
}

function ingresare (){
    let nomTitular= document.querySelector ("#titular").value;
    let cuenta= document.querySelector ("#cuenta").value;
    let cantidad= parseFloat(document.querySelector ("cantidad").value);

    let titular=clientes.find(titular => titular.nombre === numCompte);
    if (titular != undefined){

        let compte = titular.cuentas.find(cuenta => compte.numCompte == cuenta);

        if (compte != undefined){

            cuenta.ingresar(cantidad);
            document.getElementById("nombre").innerHTML= "Nom del titular: "(cliente.nombre);
            document.getElementById("cuenta").innerHTML= "Num compte del titular: "(cuenta.numCompte);
            document.getElementById("cantidad").innerHTML= "Cuenta: "(cuenta.saldo);
    } else{
        console.log("El usuario no tiene esta cuenta asociada");
    } 
    } else{
        console.log("No se ha encontrado la persona");
    }
   

}