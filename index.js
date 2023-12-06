//dark mode
let darkModeBtn = document.querySelector('#darkModeBtn');

darkModeBtn.addEventListener('click', ()=>{
    if (document.body.classList.contains('darkMode')){
        document.body.classList.remove("darkMode");
    } else if (document.body.classList.contains('darkMode') === false){
        document.body.classList.add("darkMode"); }
});




//quizzet

let resultBtn = document.querySelector('#resultBtn');

let resultsPlace = document.querySelector('#resultsPlace')

let correctAnswers = ["A", "B", "A", "B", "B", "D", "B"]



//Hela tjotafräset med quizzet

resultBtn.addEventListener('click', ()=>{
    
    //steg 1: hämta värdet från checkade radioknappar
    let checkedRadio = document.querySelectorAll('input[type="radio"]:checked');
    
    let userAnswerArray = [];
    checkedRadio.forEach((radio) => {
        userAnswerArray.push(radio.value);
    })

    console.log(userAnswerArray);

    //steg 2: jämföra användarens svar med facit
    let amountOfRightAnswers = 0;
    let amountOfWrongAnswers = 0;

    userAnswerArray.forEach((answer, index) => {
        if (answer === correctAnswers[index]){
            amountOfRightAnswers++;
        } else {
            amountOfWrongAnswers++;
        }
    })

    // räkna ut hur stor andel av svaren som är rätt
    if(amountOfRightAnswers >= correctAnswers.length*0.75){
        //ta bort tidigare färger och tömma tidigare text 
        resultsPlace.innerText= "";
        resultsPlace.classList.remove("orangeText");
        resultsPlace.classList.remove("redText");

        //sätta ny färg och skriva ny text
        resultsPlace.classList.add("greenText");
        resultsPlace.innerText = "Antal rätt: " + amountOfRightAnswers + " utav " + correctAnswers.length + " möjliga. Ditt betyg: VG" ;

        console.log('vg test');
    } else if (amountOfRightAnswers >= correctAnswers.length*0.50){
        //ta bort tidigare färger och tömma tidigare text 
        resultsPlace.innerText= "";
        resultsPlace.classList.remove("greenText");
        resultsPlace.classList.remove("redText");

        //ny färg ny text
        resultsPlace.classList.add("orangeText");
        resultsPlace.innerText = "Antal rätt: " + amountOfRightAnswers + " utav " + correctAnswers.length + " möjliga. Ditt betyg: G" ;

        console.log('g test');
    } else if (amountOfRightAnswers < correctAnswers.length*0.50){
        //ta bort tidigare färger och tömma tidigare text 
        resultsPlace.innerText= "";
        resultsPlace.classList.remove("greenText");
        resultsPlace.classList.remove("orangeText");

        //ny färg ny text
        resultsPlace.classList.add("redText");
        resultsPlace.innerText = "Antal rätt: " + amountOfRightAnswers + " utav " + correctAnswers.length + " möjliga. Ditt betyg: U" ;
        console.log('u test');
    } else {
        resultsPlace.innerText = "Har du fyllt i quizet?"
    }
    ;




    //skriva ut resultatet
})