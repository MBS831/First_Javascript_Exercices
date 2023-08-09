class Cliente{

constructor(nombre, apellido, dni){

    
    this._nombre=nombre;
    this._apellido=apellido;
    this._dni=dni;
    this._cuentas=[];
       
}


get dni(){
    return this._dni;
}

get nombre(){
    return this._nombre;
}

get apellido(){
    return this._apellido;
}

get cuentas(){
    return this._cuentas;
}

addCuenta (cuentas){
 this._cuentas.push(cuentas);

}

mostrarCompte(){
    console.log (this._nombre);
}

toString(){

    return "Cliente [nombre=" + this._nombre + ",apellido=" + this._apellido + "dni=, "
     + this._dni + "]";
    
}

}