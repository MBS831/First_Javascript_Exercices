
function arrays() {

    let array = ["gat", "gos", "peix", "ocell", "serp"];

    let paraulaMesLlarga = array[0];
    let paraulaMesCurta = array[0];


    for (let i = 1; i < array.length; i++) {
        if (array[i].length > paraulaMesLlarga.length) {
            paraulaMesLlarga = array[i];
            
        }
        if (array[i].length < paraulaMesCurta.length) {
            paraulaMesCurta = array[i];
            

            
        }
    }

    document.getElementById("paraulaLlarga").innerText = paraulaMesLlarga;
    document.getElementById("paraulaCurta").innerText = paraulaMesCurta;


}



