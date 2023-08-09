function ciutatsAmbLletra() {

    let lletraBuscar = document.getElementById("lletraInput").value.toLowerCase();
    let ciutats = ["Barcelona", "Madrid", "València", "Sevilla", "Bilbao"];
    let ciutatsContenedores = [];

    for (let i = 0; i < ciutats.length; i++) {
        let ciutat = ciutats[i].toLowerCase();
        if (ciutat.includes(lletraBuscar)) {
            ciutatsContenedores.push(ciutats[i]);             
        }
    }
    document.getElementById("mostrarCiutats").innerText = ciutatsContenedores;
           
}