//LLISTAT ESTACIONS
let sel2 = document.querySelector("#s2");
let sel3 = document.querySelector("#s3");

let comprovarQAf = () => {
    let valorSelect = document.querySelector("#select").value;
    if (valorSelect == "R1"){
        comprovarAf();
    } else if( valorSelect == "R2N"){
        comprovarAfR2();
    } else if (valorSelect == "R11"){
        comprovarAfR11();
    }
}

//R2
let estacionsR2 = ()=> {
    //BORRAR estaciona altres linies
    let estacions = document.querySelectorAll(".optBorrar");
    estacions.forEach(elem => elem.remove());
    //mostrar selects
    let content2 = document.querySelector("#content2");
    content2.style.display = "block";
    //estacions
    let estacionsZ1 = ["Aeroport", "El Prat de Llobregat", "Bellvitge", "BCN-Sants", "BCN-Passeig de Gràcia", "BCN-Estació de França"];
    let estacionsZ2 = ["BCN-El Clot"];
    let estacionsZ3 = ["BCN-Sant Andreu Comtal", "Montcada i Reixac", "La Llagosta", "Mollet", "Montmeló", "Granollers Centre", "Les Franqueses-Granollers Nord", "Cardedeu", "Llinars del Vallès", "Palautordera", "Sant Celoni", "Gualba", "Riells i Viabrea-Breda", "Hostalric", "Maçanet-Massanes"];
    //variables selecció HTML
    sel2 = document.querySelector("#s2");
    sel3 = document.querySelector("#s3");
    //optionsZ1
    for(let i=0; i<estacionsZ1.length; i++){
        let opt = document.createElement("option");
        opt.classList.add("optBorrar");
        opt.value = 1;
        opt.innerHTML = estacionsZ1[i];
        sel2.appendChild(opt);
    }
    for(let i=0; i<estacionsZ1.length; i++){
        let opt = document.createElement("option");
        opt.classList.add("optBorrar");
        opt.value = 1;
        opt.innerHTML = estacionsZ1[i];
        sel3.appendChild(opt);
    }
    //optionsZ2
    for(let i=0; i<estacionsZ2.length; i++){
        let opt = document.createElement("option");
        opt.classList.add("optBorrar");
        opt.value = 2;
        opt.innerHTML = estacionsZ2[i];
        sel2.appendChild(opt);
    }
    for(let i=0; i<estacionsZ2.length; i++){
        let opt = document.createElement("option");
        opt.classList.add("optBorrar");
        opt.value = 2;
        opt.innerHTML = estacionsZ2[i];
        sel3.appendChild(opt);
    }
    //optionsZ3
    for(let i=0; i<estacionsZ3.length; i++){
        let opt = document.createElement("option");
        opt.classList.add("optBorrar");
        opt.value = 3;
        opt.innerHTML = estacionsZ3[i];
        sel2.appendChild(opt);
    }
    for(let i=0; i<estacionsZ3.length; i++){
        let opt = document.createElement("option");
        opt.classList.add("optBorrar");
        opt.value = 3;
        opt.innerHTML = estacionsZ3[i];
        sel3.appendChild(opt);
    }
}
let comprovarAfR2 = () =>{
    //borrar si hi ha alternatives
    let del = document.querySelectorAll(".b_alt");
    del.forEach(elem => elem.remove())

    // Z1 --> Z1
    if(sel2.value == 1 && sel3.value==1){
        let res = document.createElement("p");
        res.classList.add("b_alt");
        res.innerHTML = "Servei normal. No t'afecten les alteracions.";
        content2.appendChild(res);
    }
    // Z3 --> Z3
    if(sel2.value == 3 && sel3.value==3){
        let res = document.createElement("p");
        res.classList.add("b_alt");
        res.innerHTML = "Servei normal. No t'afecten les alteracions.";
        content2.appendChild(res);
    }
    //1-2
    if(sel2.value == 1 && sel3.value==2){
        let res = document.createElement("p");
        res.classList.add("b_alt");
        res.innerHTML = "Combinació complicada. Renfe proposa que vagis fins a l'estació de Sants i facis transbord a la línia blava del metro o a les línies R3, R4, R12 per anar fins a la Sagrera. Un cop allà, suggereix agafar la línia vermella del metro fins al Clot";
        content2.appendChild(res);
    }
    if(sel2.value == 1 && sel3.value==2){
        let res = document.createElement("p");
        res.classList.add("b_alt");
        res.innerHTML = "Combinació complicada. Renfe proposa que agafis el metro (L1) fins a la Sagrera i allà facis transbord o bé a la línia blava del metro o a les línies R3, R4, R12 per arribar fins a Sants. A Sants pots tornar a agafar l'R2 Nord.";
        content2.appendChild(res);
    }
    //1-3
    if(sel2.value == 1 && sel3.value==3){
        let res = document.createElement("p");
        res.classList.add("b_alt");
        res.innerHTML = "L'alternativa de Renfe és anar fins a Sants per agafar o la línia blava del metro o les línies R3, R4 o R12 de Rodalies fins a la Sagrera. Allà proposa agafar la línia vermella del metro o un bus llançadora fins a Sant Andreu o Granollers. A Granollers es pot tornar a agafar l'R2 Nord.<br><br>-  Horari del bus: feiners: 6:00 a 10:30h en sentit la Sagrera i de 17:00 a 20:30 en sentit Granollers. Cap de setmana i festius: de 8:00 a 10:45 en sentit la Sagrera i de 18:00 a 20:45 en sentit Granollers.";
        content2.appendChild(res);
    }
    if(sel2.value == 3 && sel3.value == 1){
        let res = document.createElement("p");
        res.classList.add("b_alt");
        res.innerHTML = "Renfe proposa: <br>  - Anar fins a Granollers i allà agafar un bus llançadora cap a la Sagrera per enllaçar amb la línia blava del metro o rodalies (R3, R4, R12), que arriben fins a Sants, on es pot tornar a agafar l'R2N <br>  - Agafar un bus llançadora a Granollers fins a la Sagrera i fer el mateix trajecte que en l'opció anterior. <be>-  Horari del bus: feiners: 6:00 a 10:30h en sentit la Sagrera i de 17:00 a 20:30 en sentit Granollers. Cap de setmana i festius: de 8:00 a 10:45 en sentit la Sagrera i de 18:00 a 20:45 en sentit Granollers"
        content2.appendChild(res);
    }
    //2-3
    if(sel2.value == 2 && sel3.value==3){
        let res = document.createElement("p");
        res.classList.add("b_alt");
        res.innerHTML = "L'alternativa proposada per Renfe és agafar la línia vermella del metro fins a Sant Andreu, on es pot agafar l'R2N";
        content2.appendChild(res);
    }
    if(sel2.value == 3 && sel3.value == 2){
        let res = document.createElement("p");
        res.classList.add("b_alt");
        res.innerHTML = "Renfe proposa agafar a Sant Andreu la línia vermella del metro, que arriba fins al Clot";
        content2.appendChild(res);
    }
}
//R11
let estacionsR11 = ()=> {
    //BORRAR estaciona altres linies
    let estacions = document.querySelectorAll(".optBorrar");
    estacions.forEach(elem => elem.remove());
    //mostrar selects
    let content2 = document.querySelector("#content2");
    content2.style.display = "block";
    //estacions
    let estacionsZ1 = ["BCN-Sants", "BCN-Passeig de Gràcia"];
    let estacionsZ2 = ["BCN-Clot/Aragó"];
    let estacionsZ3 = ["BCN-Sant Andreu Comtal", "Granollers Centre", "Sant Celoni", "Gualba", "Riells i Viabrea-Breda", "Hostalric", "Maçanet-Massanes", "Sils", "Caldes de Malavella", "Riudellots", "Fornells de la Selva", "Girona", "Celrà", "Bordils-Juià", "Flaçà", "Sant Jordi Desvalls", "Cremallera", "Sant Miquel de Fluvià", "Vilamalla", "Figueres","Vilajuïga", "Llançà", "Colera", "Portbou", "Cerbère"];
    
    //variables selecció HTML
    sel2 = document.querySelector("#s2");
    sel3 = document.querySelector("#s3");
    //optionsZ1
    for(let i=0; i<estacionsZ1.length; i++){
        let opt = document.createElement("option");
        opt.classList.add("optBorrar");
        opt.value = 1;
        opt.innerHTML = estacionsZ1[i];
        sel2.appendChild(opt);
    }
    for(let i=0; i<estacionsZ1.length; i++){
        let opt = document.createElement("option");
        opt.classList.add("optBorrar");
        opt.value = 1;
        opt.innerHTML = estacionsZ1[i];
        sel3.appendChild(opt);
    }
    //optionsZ2
    for(let i=0; i<estacionsZ2.length; i++){
        let opt = document.createElement("option");
        opt.classList.add("optBorrar");
        opt.value = 2;
        opt.innerHTML = estacionsZ2[i];
        sel2.appendChild(opt);
    }
    for(let i=0; i<estacionsZ2.length; i++){
        let opt = document.createElement("option");
        opt.classList.add("optBorrar");
        opt.value = 2;
        opt.innerHTML = estacionsZ2[i];
        sel3.appendChild(opt);
    }
    //optionsZ3
    for(let i=0; i<estacionsZ3.length; i++){
        let opt = document.createElement("option");
        opt.classList.add("optBorrar");
        opt.value = 3;
        opt.innerHTML = estacionsZ3[i];
        sel2.appendChild(opt);
    }
    for(let i=0; i<estacionsZ3.length; i++){
        let opt = document.createElement("option");
        opt.classList.add("optBorrar");
        opt.value = 3;
        opt.innerHTML = estacionsZ3[i];
        sel3.appendChild(opt);
    }
}
let comprovarAfR11 = () =>{
    //borrar si hi ha alternatives
    let del = document.querySelectorAll(".b_alt");
    del.forEach(elem => elem.remove())

    // Z1 --> Z1
    if(sel2.value == 1 && sel3.value==1){
        let res = document.createElement("p");
        res.classList.add("b_alt");
        res.innerHTML = "Servei normal. No t'afecten les alteracions.";
        content2.appendChild(res);
    }
    // Z3 --> Z3
    if(sel2.value == 3 && sel3.value==3){
        let res = document.createElement("p");
        res.classList.add("b_alt");
        res.innerHTML = "Servei normal. No t'afecten les alteracions.";
        content2.appendChild(res);
    }
    //1-2
    if(sel2.value == 1 && sel3.value==2){
        let res = document.createElement("p");
        res.classList.add("b_alt");
        res.innerHTML = "Combinació complicada. Renfe proposa que vagis fins a l'estació de Sants i facis transbord a la línia blava del metro o a les línies R3, R4, R12 per anar fins a la Sagrera. Un cop allà suggereix agafar la línia vermella del metro fins al Clot";
        content2.appendChild(res);
    }
    if(sel2.value == 2 && sel3.value==1){
        let res = document.createElement("p");
        res.classList.add("b_alt");
        res.innerHTML = "Combinació complicada. Renfe proposa que agafis el metro (L1) fins a la Sagrera i allà facis transbord o bé a la línia blava del metro o a les línies R3, R4, R12 per arribar fins a Sants. A Sants pots tornar a agafar l'R2 Nord.";
        content2.appendChild(res);
    }
    //1-3
    if(sel2.value == 1 && sel3.value==3){
        let res = document.createElement("p");
        res.classList.add("b_alt");
        res.innerHTML = "L'alternativa de Renfe és anar fins a Sants per agafar o bé la línia blava del metro o a les línies R3, R4, R12 fins a a la Sagrera. Allà proposa o agafar la línia vermella del metro fins a Sant Andreu o agafar un bus llançadora fins a Sant Andreu (funciona els feiners de 6:00 a 10:00 i de 16:00 a 20:00) o fins a Granollers, on es pot tornar a agafar l'R2 Nord. <br><br>-  Horari del bus: feiners: 6:00 a 10:30h en sentit la Sagrera i de 17:00 a 20:30 en sentit Granollers. Cap de setmana i festius: de 8:00 a 10:45 en sentit la Sagrera i de 18:00 a 20:45 en sentit Granollers.";
        content2.appendChild(res);
    }
    if(sel2.value == 3 && sel3.value == 1){
        let res = document.createElement("p");
        res.classList.add("b_alt");
        res.innerHTML = "Renfe suggereix: <br>  - Anar fins a Granollers i allà agafar un bus llançadora cap a la Sagrera, per enllaçar amb la línia blava del metro o Rodalies (R3, R4, R12), que arriben fins a Sants (allà es pot tornar a agafar l'R2N) <br>  - Agafar un bus llançadora a Granollers fins a la Sagrera i fer el mateix trajecte que en l'opció anterior. Horari del bus: feiners: 6:00 a 10:30h en sentit La Sagrera i de 17:00 a 20:30 en sentit Granollers. Cap de setmana i festius: de 8:00 a 10:45 en sentit La Sagrera i de 18:00 a 20:45 en sentit Granollers"
        content2.appendChild(res);
    }
    //2-3
    if(sel2.value == 2 && sel3.value==3){
        let res = document.createElement("p");
        res.classList.add("b_alt");
        res.innerHTML = "L'alternativa és agafar la línia vermella del metro fins a Sant Andreu, on es pot agafar l'R2N";
        content2.appendChild(res);
    }
    if(sel2.value == 3 && sel3.value == 2){
        let res = document.createElement("p");
        res.classList.add("b_alt");
        res.innerHTML = "Renfe proposa agafar a Sant Andreu la línia vermella del metro que arriba fins al Clot";
        content2.appendChild(res);
    }
}
//R1
                    let estacionsR1 = () => {
                        //BORRAR ESTACIOSN ANTERIOR
                        let estacions = document.querySelectorAll(".optBorrar");
                        estacions.forEach(elem => elem.remove());
                        //mostrar selects
                        let content2 = document.querySelector("#content2");
                        content2.style.display = "block";
                        //estacions
                        let estacionsZ1 = ["Maçanet-Massanes", "Tordera", "Blanes", "Malgrat de Mar", "Santa Susana", "Pineda de Mar", "Calella", "Sant Pol de Mar", "Canet de Mar", "Arenys de Mar", "Caldes d'Estrac", "Sant Andreu de Llavaneres", "Mataró", "Cabrera-Vilassar", "Vilassar de Mar", "Premià de Mar", "Ocata", "El Masnou", "Montgat Nord", "Montgat", "Badalona"];
                        let estacionsZ2 = ["Molins de Rei", "Sant Feliu de Llobregat", "Sant Joan Despí", "Cornellà"];
                        let estacionsZ3 = ["L'Hospitalet de Llobregat", "BCN-Sants", "BCN-Plaça Catalunya", "BCN-Arc de Triomf", "BCN-Clot/Aragó"];
                        let estacionsZ4 = ["Sant Adrià de Besòs"];
                        //variables selecció HTML
                        sel2 = document.querySelector("#s2");
                        sel3 = document.querySelector("#s3");
                        //optionsZ1
                        for(let i=0; i<estacionsZ1.length; i++){
                            let opt = document.createElement("option");
                            opt.classList.add("optBorrar");
                            opt.value = 1;
                            opt.innerHTML = estacionsZ1[i];
                            sel2.appendChild(opt);
                        }
                        for(let i=0; i<estacionsZ1.length; i++){
                            let opt = document.createElement("option");
                            opt.classList.add("optBorrar");
                            opt.value = 1;
                            opt.innerHTML = estacionsZ1[i];
                            sel3.appendChild(opt);
                        }
                        //optionsZ2
                        for(let i=0; i<estacionsZ2.length; i++){
                            let opt = document.createElement("option");
                            opt.classList.add("optBorrar");
                            opt.value = 2;
                            opt.innerHTML = estacionsZ2[i];
                            sel2.appendChild(opt);
                        }
                        for(let i=0; i<estacionsZ2.length; i++){
                            let opt = document.createElement("option");
                            opt.classList.add("optBorrar");
                            opt.value = 2;
                            opt.innerHTML = estacionsZ2[i];
                            sel3.appendChild(opt);
                        }
                        //optionsZ3
                        for(let i=0; i<estacionsZ3.length; i++){
                            let opt = document.createElement("option");
                            opt.classList.add("optBorrar");
                            opt.value = 3;
                            opt.innerHTML = estacionsZ3[i];
                            sel2.appendChild(opt);
                        }
                        for(let i=0; i<estacionsZ3.length; i++){
                            let opt = document.createElement("option");
                            opt.classList.add("optBorrar");
                            opt.value = 3;
                            opt.innerHTML = estacionsZ3[i];
                            sel3.appendChild(opt);
                        }
                        //optionsZ4
                        for(let i=0; i<estacionsZ4.length; i++){
                            let opt = document.createElement("option");
                            opt.classList.add("optBorrar");
                            opt.value = 4;
                            opt.innerHTML = estacionsZ4[i];
                            sel2.appendChild(opt);
                        }
                        for(let i=0; i<estacionsZ4.length; i++){
                            let opt = document.createElement("option");
                            opt.classList.add("optBorrar");
                            opt.value = 4;
                            opt.innerHTML = estacionsZ4[i];
                            sel3.appendChild(opt);
                        }
                        let borrar = document.querySelectorAll("p");
                    }
                    let comprovarAf  = () =>{  
                        //borrar si hi ha alternatives
                        let del = document.querySelectorAll(".b_alt");
                        del.forEach(elem => elem.remove())

                        //NO HI HA AFECTACIONS - COMENTAR 29 D'OCTUBRE
                        if(sel2.value > 0 && sel3.value>0){
                            let res = document.createElement("p");
                            res.classList.add("b_alt");
                            res.innerHTML = "Servei normal. No hi ha alteracions fins el dissabte 29 d'octubre.";
                            content2.appendChild(res);
                        }
            
                        // // Z1 --> Z1
                        // if(sel2.value == 1 && sel3.value==1){
                        //     let res = document.createElement("p");
                        //     res.classList.add("b_alt");
                        //     res.innerHTML = "Servei normal. No t'afecten les alteracions.";
                        //     content2.appendChild(res);
                        // }
                        // // Z2 --> Z2
                        // if(sel2.value == 2 && sel3.value==2){
                        //     let res = document.createElement("p");
                        //     res.classList.add("b_alt");
                        //     res.innerHTML = "Renfe no proposa alternatives";
                        //     content2.appendChild(res);
                        // }
                        // // Z3 --> Z3
                        // if(sel2.value == 2 && sel3.value==2){
                        //     let res = document.createElement("p");
                        //     res.classList.add("b_alt");
                        //     res.innerHTML = "Alternativa: línies L1 i L2 de metro";
                        //     content2.appendChild(res);
                        // }
                        // //Z1 --> Z4 
                        // if(sel2.value == 1 && sel3.value==4){
                        //     let res = document.createElement("p");
                        //     res.classList.add("b_alt");
                        //     res.innerHTML = "Combinació difícil. Un cop a Badalona Renfe proposa que caminis uns 25 minuts fins a la parada Bonavista/Bufalà del bus B7, que té parada a Sant Adrià.";
                        //     content2.appendChild(res);
                        // }
                        // if(sel2.value == 4 && sel3.value==1){
                        //     let res = document.createElement("p");
                        //     res.classList.add("b_alt");
                        //     res.innerHTML = "Combinació difícil. L'alternativa de Renfe és agafar el bus B7 a la parada de l'estació de Rodalies i baixar a Badalona a Bonavista/Bufalà. Un cop allà has de caminar uns 25 minuts fins a l'estació de Rodalies de Badalona.";
                        //     content2.appendChild(res);
                        // }
                        // //Z1 --> Z3 (ST ADRIÀ)
                        // if(sel2.value == 1 && sel3.value==3){
                        //     let res = document.createElement("p");
                        //     res.classList.add("b_alt");
                        //     res.innerHTML = "Un cop a Badalona, Renfe proposa caminar fins a l'estació de metro Badalona-Pompeu Fabra (10 minuts). Allà suggereix agafar la línia lila fins al Clot, on es pot fer transbord a la línia vermella (para a les estacions d'Arc de Triomf, Plaça Catalunya, Plaça de Sants i Rambla Just Oliveras).";
                        //     content2.appendChild(res);
                        // }
                        // if(sel2.value == 3 && sel3.value==1){
                        //     let res = document.createElement("p");
                        //     res.classList.add("b_alt");
                        //     res.innerHTML = "Renfe proposa utilitzar la línia vermella del metro (estacions de Rambla Just Oliveres, Pl. de Sants, Catalunya, Arc de Triomf) com a alternativa fins al Clot. Allà cal agafar la línia lila fins a Badalona Pompeu Fabra. Des d'aquesta última parada es pot arribar, caminant uns 10 minuts, a l'estació de Rodalies de Badalona, on es pot agafar l'R1.";
                        //     content2.appendChild(res);
                        // }
                        // //Z1 --> Z2 (ST ADRIÀ)
                        // if(sel2.value == 1 && sel3.value==2){
                        //     let res = document.createElement("p");
                        //     res.classList.add("b_alt");
                        //     res.innerHTML = "Renfe no proposa alternatives.";
                        //     content2.appendChild(res);
                        // }
                        // if(sel2.value == 2 && sel3.value==1){
                        //     let res = document.createElement("p");
                        //     res.classList.add("b_alt");
                        //     res.innerHTML = "Renfe no proposa alternatives.";
                        //     content2.appendChild(res);
                        // }
                        // //Z2 --> Z3 (ST ADRIÀ)
                        // if(sel2.value ==2  && sel3.value==3){
                        //     let res = document.createElement("p");
                        //     res.classList.add("b_alt");
                        //     res.innerHTML = "Renfe no proposa alternatives.";
                        //     content2.appendChild(res);
                        // }
                        // if(sel2.value == 3 && sel3.value==2){
                        //     let res = document.createElement("p");
                        //     res.classList.add("b_alt");
                        //     res.innerHTML = "Renfe no proposa alternatives.";
                        //     content2.appendChild(res);
                        // }
                        // //Z2 --> Z4 (ST ADRIÀ)
                        // if(sel2.value2 == 2 && sel3.value==4){
                        //     let res = document.createElement("p");
                        //     res.classList.add("b_alt");
                        //     res.innerHTML = "Renfe no proposa alternatives.";
                        //     content2.appendChild(res);
                        // }
                        // if(sel2.value == 4 && sel3.value==2){
                        //     let res = document.createElement("p");
                        //     res.classList.add("b_alt");
                        //     res.innerHTML = "Renfe no proposa alternatives.";
                        //     content2.appendChild(res);
                        // }
                        // //Z3 --> Z4 (ST ADRIÀ)
                        // if(sel2.value  == 3 && sel3.value==4){
                        //     let res = document.createElement("p");
                        //     res.classList.add("b_alt");
                        //     res.innerHTML = "Renfe proposa agafar la línia vermella fins a Glòries i allà fer transbord al TRAM, que arriba fins a Sant Adrià";
                        //     content2.appendChild(res);
                        // }
                        // if(sel2.value == 4 && sel3.value==3){
                        //     let res = document.createElement("p");
                        //     res.innerHTML = "Renfe proposa agafar el TRAM fins a Glòries i allà fer transbord a la línia vermella.";
                        //     res.classList.add("b_alt");
                        //     content2.appendChild(res);
                        // }
                    }

//CLASSE AFECTACIÓ
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

//R2N I R11

//19 DE SETEMBRE AL 2 DE DESEMBRE
afectacions[0] = new Afectació("R2N","Del 19 de setembre al 2 de desembre","Els trens de l’R2 Nord i l’R11 iniciaran i finalitzaran el seu recorregut a Sant Andreu Comtal.",`<br>  - En senetit Maçanet-Massanes, línies R3,R4 i R5 del metro fins a Sagrera Meridiana, on hi haurà autobusos només en hora punta fins a Sant Andreu Comptal. <br> - En sentit Aeroport, linia 1 del Metro.`)
afectacions[1] = new Afectació("R11","Del 19 de setembre al 2 de desembre","Els trens de l’R2 Nord i l’R11 iniciaran i finalitzaran el seu recorregut a Sant Andreu Comtal.",`<br>  - En senetit Maçanet-Massanes, línies R3,R4 i R5 del metro fins a Sagrera Meridiana, on hi haurà autobusos només en hora punta fins a Sant Andreu Comptal. <br> - En sentit Aeroport, linia 1 del Metro.`)

// 3 al 10 desembre
afectacions[2] = new Afectació("R2N","Del 3 de desembre al 10 de desembre", "Els trens de l’R2 Nord i l’R11 iniciaran i finalitzaran el seu recorregut a Montcada i Reixach", 
"<br>  - Caminar fins a l'estació Montcada i Reixac - Manresa (enllaç amb línies R4, R12 i R7 o bus complementari cada 15 minuts desde Montcada fins a Sagrera Meridiana. <br>  - El servei fins a l’Aeroport començarà i acabarà a l'estació Barcelona-Estació de França. <br>  - Els viatgers de Granollers-Centre, els dies laborables de dilluns a divendres, entre les 6:00 h i les 10:30 h disposaran d’autocars directes a Barcelona la Sagrera-Meridiana, i entre Barcelona la Sagrera-Meridiana i Granollers-Centre de 17:00 h a 20:30 h. Els dissabtes, diumenges i festius, l’horari serà de 8:00 h a 10:45 h i de 18:00 h a 20:45 h, respectivament en cada sentit");
afectacions[3] = new Afectació("R11","Del 3 de desembre al 10 de desembre", "Els trens de l’R2 Nord i l’R11 iniciaran i finalitzaran el seu recorregut a Montcada i Reixach", "<br>  - Caminar fins a l'estació Montcada i Reixac - Manresa (enllaç amb línies R4, R12 i R7 o bus complementari cada 15 minuts desde Montcada fins a Sagrera Meridiana. <br>  - El servei fins a l’Aeroport començarà i acabarà a l'estació Barcelona-Estació de França");

//R1
// DEL 17 AL 19 DE SETEMBRE 
afectacions[4] = new Afectació(
"R1",
"Del dissabte 29 al diumenge 30 d'octubre",
"Els trens de la línia R1 iniciaran i finalitzaran el seu recorregut a Badalona",
"<br>  - Caminar fins a la parada Badalona Pompeu Fabra de la L2 del Metro (10 minuts) <br>  - Caminar fins a la parada del Bus B7 Bonavista/Bufalà (25 minuts) per enllaçar amb el TRAM a Sant Adrià"
)

afectacions[5] = new Afectació(
"R1",
"Del dissabte 12 al diumenge 13 de novembre",
"Els trens de la línia R1 iniciaran i finalitzaran el seu recorregut a Badalona",
"<br>  - Caminar fins a la parada Badalona Pompeu Fabra de la L2 del Metro (10 minuts) <br>  - Caminar fins a la parada del Bus B7 Bonavista/Bufalà (25 minuts) per enllaçar amb el TRAM a Sant Adrià"
)

//VARIABLES NECESARIES PER MOSTRAR
    // per al resultat
let pData;
let pAfectacio;
let pAlternativa;
let i = false;

let mostrar = () =>{
    let valorSelect = document.querySelector("#select").value;
    if (valorSelect == "R1"){
        estacionsR1();
    } else if(valorSelect=="R2N"){
        estacionsR2();
    } else if(valorSelect=="R11"){
         estacionsR11();
    }
    
    if(i){
        let del = document.querySelectorAll(".data");
        del.forEach(elem => elem.remove())
        del = document.querySelectorAll(".afectacio");
        del.forEach(elem => elem.remove())
        del = document.querySelectorAll(".alternativa");
        del.forEach(elem => elem.remove());
        canviarCol();
    }
    
    for(let i=0; i<afectacions.length; i++){
        if (afectacions[i].linia==valorSelect){
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

//CANVI DE COLORS
let canviarCol = () =>{
    let select = document.querySelector("select").value;
    if(select == "R2N"){
        let fons = document.querySelector("#containerInt1");
        fons = fons.style.backgroundColor = "rgba(92, 190, 0, 0.171)";
        let titulets = document.querySelectorAll(".data");
        titulets.forEach(elem => elem.style.color = "#5cbe00");
        let img = document.querySelector("img");
        img.src="https://pbs.twimg.com/profile_images/662587044414255104/_4HjXDT7_400x400.jpg";
    } else if (select == "R11") {
        fons = document.querySelector("#containerInt1");
        fons = fons.style.backgroundColor = "rgba(0, 86, 184, 0.171)";
        titulets = document.querySelectorAll(".data");
        titulets.forEach(elem => elem.style.color = "rgb(0, 86, 184)")
        img = document.querySelector("img");
        img.src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/R11_Rodalies_de_Catalunya.svg/1200px-R11_Rodalies_de_Catalunya.svg.png";
    } else{
        fons = document.querySelector("#containerInt1");
        fons = fons.style.backgroundColor = "rgba(0, 161, 201, 0.171)";
        titulets = document.querySelectorAll(".data");
        titulets.forEach(elem => elem.style.color = "rgb(0, 161, 201)")
        img = document.querySelector("img");
        img.src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/R1_barcelona.svg/1024px-R1_barcelona.svg.png";
    }    
}