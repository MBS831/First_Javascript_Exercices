//abstract class

class Alumne{

    constructor(nombre, id){
    
        this._nombre=nombre;
        this._id=id;
        
        this._notes=[];
           
    }
    
    get nombre(){
        return this._nombre;
    }

    
    get id(){
        return this._id;
    }

    get notes(){
        return this._notes;
    }


    set nombre(nombre){
        this._nombre=nombre;
    }


    addNota (nota){
        this._notes.push(nota);
       
       }

       toString(){

        return "Em dic [nom=" + this._nombre + "i sóc alumne amb id=" + 
        this._id + "i dni=" + this._notes + "i les meves notes son" + "]";
        
    }
    

    }

    class Erasmus extends Alumne {

        constructor(nombre, id, dni){
            super (nombre, id);
            this._dni=dni;
            this._notaMitja=0;
            
               
        }

        get dni(){
            return this._dni;
        }

        get notaMitja(){
            return this._notaMitja;
        }

        
        toString(){

            return "Em dic [nom=" + this._nombre + "i sóc alumne amb id=" + 
            this._id + "i dni=" + this._dni + "i la mitjana de la nota és" + this._notaMitja + "]";
            
        }

        calcularMitja (){
            
           let pares=0
           let impares=0;
           
            for (let i=0;i<this._notes.length;i++){
                if (this._notes[i]%2 == 0){
                    pares += (this._notes[i]) * 2;               
                    } else {
                    impares += (this._notes[i]/2) ;
                    }
                    
                }
             this._notaMitja= (pares + impares)/this._notes.length;
            } 

    }

    class Nacional extends Alumne {

        constructor(nombre, id, passport){
            super (nombre, id);
            this._passport=passport;
            this._notaMitja=0;
            
               
        }

        get passport(){
            return this._nombre;
        }

        get notaMitja() {
            return this._notaMitja;

        }

        calcularMitja (){
            
            let suma=0;
            let suma2=0;


            for (let i=0;i<this._notes.length;i++){
                if (this._notes[i]>=5){
                   suma += this._notes[i]; 
                    
                    } else {
                    suma2 += this._notes[i] ;
                    }
                
                }
            this._notaMitja=((suma/2)+suma2)/this._notes.length;
            
            
            } 
        

        toString(){

            return "Em dic [nom=" + this._nombre + "i soc alumne amb id=" +
             this._id + "i passport=" + this._passport + "i la nota mitja és" + this._notaMitja + "]";
            
        }

        
        
    }


    