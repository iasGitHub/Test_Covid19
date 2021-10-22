var cpt = 0;
    var R1;
    
    
    tmp = prompt("Donnez votre temperature corporelle : ");
    if (tmp <= 38){
        alert("Votre temperature est stable.")
        choix = prompt("Voulez-vous continuer l'évalution ? (Oui/Non) :" )
        if (choix === "Oui")
        {
            askMe();

        }else{
            prompt("Merci et a bientot")
        }
    }else{
        askMe();
    }

    //askMe
    function askMe(){
            R1= prompt("Q1=Avez-vous des toux recents ou des toux qui se sont aggraves ? ")
            val = addOne();
            R2 = prompt("Q2=Avez-vous des difficultes a respirer ? ")
            val = addOne();
            R3 = prompt("Q3=Avez-vous des nez qui coulent ? ")
            val = addOne();
            R4 = prompt("Q4=Avez-vous des maux de gorge ? ")
            val = addOne();
            R5 = prompt("Q5=Avez-vous des maux de ventre ? ")
            val = addOne();
            R6 = prompt("Q6=Avez-vous La diarrhee ? ")
            val = addOne();
            R7 = prompt("Q7=Avez-vous des fatiques intenses ? ")
            val = addOne();
            R8 = prompt("Q8=Avez-vous perdu votre appetit ? ")
            val = addOne();
            R9 = prompt("Q9=Avez-vous des nausees ? ")
            val = addOne();
            R10 = prompt("Q10=Avez-vous des douleurs musculaires ? ")
            val = addOne();
            R11 = prompt("Q11=Avez-vous des maux de tete inhabituels ? ")
            val = addOne();
    }

    //fonction qui permet d'incrémenter le compteur à chaque reponse égale à "Oui"
    function addOne(){
        if(R1 === "Oui"){
            cpt++;
        }
        return cpt
    }
    

    if(val >= 2 && val < 5){
        alert("Vous ne serez pas en quarantaine très probablement")
    }else if(val >= 5 && val < 8){
        alert("Vous êtes en risque d'attrapper le COVID")
    }else if(val >= 8){
        alert("Vous avez été testé positif au COVID. URGENCE!")
    }
