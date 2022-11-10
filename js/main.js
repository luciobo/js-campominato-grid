// cosa devo fare? 
// recuperare il click sul pulsante per genare la griglia


// creo il bottone con cui genererò il click 

const btnCreaGriglia = document.getElementById("btn_creagriglia");
console.log(btnCreaGriglia);


btnCreaGriglia.addEventListener("click", function () {
    console.log("hai cliccato il pulsante");

    generaLaGriglia(10);

});

// ora che ho reciuperato con fatica il click devo creare una 
// funzione che mi genri la griglia 



function generaLaGriglia(celle) {

    // recupero il cointenitore dove mettero la mia griglia
    const contenitoreGriglia = document.querySelector(".contenitore-griglia")
    // ora devo creare qualcosa che mi permetta di generare la griglia stessa

    const celleTotali = celle * celle;

    for (let i = 0; i < celleTotali; i++) {

        const nuovaCellaCreata = document.createElement("div");

        nuovaCellaCreata.classList.add("contenuto-cella");
        nuovaCellaCreata.style.width = `calc(100% / ${celle})`;
        console.log(nuovaCellaCreata)

        contenitoreGriglia.append(nuovaCellaCreata)
    }
    
}
