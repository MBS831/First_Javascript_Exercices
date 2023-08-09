class Curs {

constructor(nombre){

    
    this._nombre=nombre;  
    this._alumnos=[];
       
}

get nombre(){
    return this._nombre;
}


get alumnos(){
    return this._alumnos;
}

addAlumno (alumno){
 this._alumnos.push(alumno);

}

eliminaAlumno (alumno){
    this._alumnos.splice(this._alumnos.indexOf(alumno),1);
   
}

/*buscaAlumne (nomAlumne){
    let encontrado=false;
    let i=0;
    
    while (i<this._alumnos.length && !encontrado) {
    let nomaBuscar = this._alumnos.find(nomAlumne => nomAlumne == this._nombre);
     if (nomaBuscar = !undefined){
        encontrado=true;
        console.log("l'alumne esta a la llista");
    } else{
        console.log("l'alumne no esta a la llista");
    } 
    */

buscaAlumne (id){

    let i=0;
    let alumnoId;

    while (i<this._alumnos.length && alumnoId==undefined){
        if (alumnos[i].id == id){
            alumnoId = this._alumnos[i];
        }
        i++;
    }return alumnoId;
}


mostraAlumne (id){
    let busca=buscaAlumne(id);
    if (busca != undefined){
        console.log(alumno.nombre)
    }
}



mostrarNombre (){
    console.log (this._nombre);
}



toString(){

    return "Curso [nombre=" + this._nombre + "alumnos" + this._alumnos +"]";
    
}

}
