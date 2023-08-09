

class Animal{

    nom;
    especie;
    edat;
    color;

    constructor(nom, especie, edat, color){
    
        this.nom=nom;
        this.especie=especie;
        this.edat=edat;
        this.color=color;        
           
    }
    
    get nom(){
        return this.nom;
    }

    get especie(){
        return this.especie;
    }

    get edat(){
        return this.edat;
    }
    get color(){
        return this.color;
    }

    toString(){

        return "El meu nom es [" + this.nom +","+ "i soc un " + 
        this.especie +","+ "amb edat" + this.edat + "i color" + this.color + "]";
        
    }
    

    }
