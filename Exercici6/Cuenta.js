class Cuenta{

    constructor(numCompte, saldo){
    
        this._numCompte=numCompte;
        this._saldo=saldo;
        this._numMoviments=0;
           
    }
    
    
    get numCompte(){
        return this._numCompte;
    }
    
    get saldo(){
        return this._saldo;
    }

    get numMoviments(){
        return this._numMoviments;
    }

    set numCompte(numCompte){
        this._numCompte=numCompte;

    }
    
    
    toString(){
    
        return "Cuenta [=saldo"+ this._saldo + ",numero compte=" + this._numCompte + "]";
        
    }
    
    ingresar (quantitat){
        this._saldo += parseInt (quantitat);
        this._numMoviments += 1;
        saldoInferior.innerHTML = " ";
        console.log(this);
    }

    retirar (quantitat){
         if (parseInt (quantitat <= this._saldo)){
             this.saldo -= parseInt (quantitat);

             this._numMoviments +=1;
             saldoInferior.innerHTML="";
             console.log(this);
         } else {
            saldoInferior.innherHTML = "No hi ha saldo";
         }

         }

    }



    