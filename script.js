//CLASSE AFECTACIÓ
// `Línia: ${linia}`,`Dates: ${data}`,`Afectació: ${afectacio}`,`Alternatives de Renfe: ${alternativa}`

class Afectació {
    constructor(linia, data, afectacio, alternativa){
        //per a seleccionar
        this.linia = linia
        //per a mostrar
        this.data = data;
        this.afectacio = afectacio;
        this.alternativa = alternativa;
    }
}

let afectacions = [];

//AFEGIR AFECTACIONS AQUÍ

//17 i 18 setembre
afectacions[0] = new Afectació("R2N","Dissabte 17 de setembre i diumenge 18 de setembre", "Els trens de l’R2 Nord i l’R11 iniciaran i finalitzaran el seu recorregut a Montcada i Reixach", 
"<br>  - Caminar fins a l'estació Montcada i Reixac - Manresa (enllaç amb línies R4, R12 i R7 <br> - Bus complementari cada 15 minuts desde Montcada fins a Sagrera Meridiana.")
afectacions[1] = new Afectació("R11","Dissabte 17-09 i diumenge 18-09", "Els trens de l’R2 Nord i l’R11 iniciaran i finalitzaran el seu recorregut a Montcada i Reixach", "<br>  - Caminar fins a l'estació Montcada i Reixac - Manresa (enllaç amb línies R4, R12 i R7 <br> - Bus complementari cada 15 minuts desde Montcada fins a Sagrera Meridiana.");

//19 DE SETEMBRE AL 2 DE DESEMBRE
afectacions[2] = new Afectació("R2N","Del 19 de setembre al 2 de desembre","Els trens de l’R2 Nord i l’R11 iniciaran i finalitzaran el seu recorregut a Sant Andreu Comtal.",`<br>  - En senetit Maçanet-Massanes, línies R3,R4 i R5 del metro fins a Sagrera Meridiana, on hi haurà autobusos només en hora punta fins a Sant Andreu Comptal. <br> - En sentit Aeroport, linia 1 del Metro.`)
afectacions[3] = new Afectació("R11","Del 19 de setembre al 2 de desembre","Els trens de l’R2 Nord i l’R11 iniciaran i finalitzaran el seu recorregut a Sant Andreu Comtal.",`<br>  - En senetit Maçanet-Massanes, línies R3,R4 i R5 del metro fins a Sagrera Meridiana, on hi haurà autobusos només en hora punta fins a Sant Andreu Comptal. <br> - En sentit Aeroport, linia 1 del Metro.`)

// "En senetit Maçanet-Massanes, línies R3,R4 i R5 del metro fins ;a Sagrera Meridiana, on hi haurà autobusos només en hora punta fins a Sant Andreu Comptal.En sentit Aeroport, linia 1 del Metro."

// 3 al 10 desembre
afectacions[4] = new Afectació("R2N","Del 3 de desembre al 10 de desembre", "Els trens de l’R2 Nord i l’R11 iniciaran i finalitzaran el seu recorregut a Montcada i Reixach", 

"<br>  - Caminar fins a l'estació Montcada i Reixac - Manresa (enllaç amb línies R4, R12 i R7 o bus complementari cada 15 minuts desde Montcada fins a Sagrera Meridiana. <br>  - El servei fins a l’Aeroport començarà i acabarà a l'estació Barcelona-Estació de França. <br>  - Els viatgers de Granollers-Centre, els dies laborables de dilluns a divendres, entre les 6:00 h i les 10:30 h disposaran d’autocars directes a Barcelona la Sagrera-Meridiana, i entre Barcelona la Sagrera-Meridiana i Granollers-Centre de 17:00 h a 20:30 h. Els dissabtes, diumenges i festius, l’horari serà de 8:00 h a 10:45 h i de 18:00 h a 20:45 h, respectivament en cada sentit");


afectacions[5] = new Afectació("R11","Del 3 de desembre al 10 de desembre", "Els trens de l’R2 Nord i l’R11 iniciaran i finalitzaran el seu recorregut a Montcada i Reixach", "<br>  - Caminar fins a l'estació Montcada i Reixac - Manresa (enllaç amb línies R4, R12 i R7 o bus complementari cada 15 minuts desde Montcada fins a Sagrera Meridiana. <br>  - El servei fins a l’Aeroport començarà i acabarà a l'estació Barcelona-Estació de França");



//VARIABLES NECESARIES PER MOSTRAR
    // valor del select

    // per al resultat
let pData;
let pAfectacio;
let pAlternativa;
let i = false;

let mostrar = () =>{
    if(i){
        let del = document.querySelectorAll(".data");
        del.forEach(elem => elem.remove())
        del = document.querySelectorAll(".afectacio");
        del.forEach(elem => elem.remove())
        del = document.querySelectorAll(".alternativa");
        del.forEach(elem => elem.remove())
    }
    let valorSelect = document.querySelector("#select").value;
    for(let i=0; i<afectacions.length; i++){
        if (afectacions[i].linia==valorSelect){
            //SI HI HA NODES
            
            //CREAR NODES
            let elemData = document.createElement("p");
            let content = document.querySelector("#content");
            elemData.classList.add("data");
            content.appendChild(elemData);
            let elemAf = document.createElement("p");
            elemAf.classList.add("afectacio");
            content.appendChild(elemAf);
            let elemAlt = document.createElement("p");
            elemAlt.classList.add("alternativa");
            content.appendChild(elemAlt);

            pData = document.querySelectorAll(".data");
            pData = pData[pData.length-1];
            pAfectacio = document.querySelectorAll(".afectacio");
            pAfectacio = pAfectacio[pAfectacio.length-1]
            pAlternativa = document.querySelectorAll(".alternativa");
            pAlternativa = pAlternativa[pAlternativa.length-1]

            pData.innerHTML = afectacions[i].data;
            pAfectacio.innerHTML = `<strong>Afectació: </strong>${afectacions[i].afectacio}`;
            pAlternativa.innerHTML =`<strong>Alternatives de Renfe</strong>: ${afectacions[i].alternativa}`; ;

        }

    }
    i = true;
}

mostrar()