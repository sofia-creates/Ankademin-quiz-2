//dark mode
let darkModeBtn = document.querySelector('#darkModeBtn');

darkModeBtn.addEventListener('click', ()=>{
    if (document.body.classList.contains('darkMode')){
        document.body.classList.remove("darkMode");
    } else if (document.body.classList.contains('darkMode') === false){
        document.body.classList.add("darkMode"); }
});




//variabler till quizzet

let resultBtn = document.querySelector('#resultBtn');

let resultsPlace = document.querySelector('#resultsPlace')

let correctAnswersQ8=  ["A", "B", "C", "D"];

let correctAnswersQ9 = ["D", "E"];

let correctAnswers = ["A", "B", "A", "B", "B", "D", "B", correctAnswersQ8, correctAnswersQ9];


console.log("antal rätt svar i facit är "+correctAnswers.length);


//Alert till fråga 5
/*let q5true = document.querySelector('#q5True');

q5true.addEventListener('change', () =>
{
    alert("Nej."); 
}); */



//Hela tjotafräset med quizzet

resultBtn.addEventListener('click', ()=>{
    

    //steg 1a: hämta värdet från checkade radioknappar 
    let checkedRadio = document.querySelectorAll('input[type="radio"]:checked');
    
    let userAnswerArray = [];
    checkedRadio.forEach((radio) => {
        userAnswerArray.push(radio.value);
    });

    console.log(userAnswerArray);


    //steg 1b: hämta värdet från checkade checkboxar. Två variabler, två frågor.
    let checkedBoxesq8 = document.querySelectorAll('input[name="several1"]:checked');
    let checkedBoxesq9 = document.querySelectorAll('input[name="several2"]:checked');

    //gör egna arrays för de två frågor med arrays av checkboxarna 
    let checkBoxArrayq8 = [];
    checkedBoxesq8.forEach((checkbox) => {
        checkBoxArrayq8.push(checkbox.value);
    });
    console.log(checkBoxArrayq8);



    let checkBoxArrayq9 = [];
    checkedBoxesq9.forEach((checkbox) => {
        checkBoxArrayq9.push(checkbox.value);
    });
    console.log(checkBoxArrayq9);




    //steg 2: jämföra användarens svar med facit
    let amountOfRightAnswers = 0;
    let amountOfWrongAnswers = 0;






    //jämföra checkboxarna först. det behöver göras separat eftersom här måste ALLA svaren i arrayen matcha, behöver använda every metoden.





    //skapa funktion som jämför HÄR ÄR FUCKING PROBLEMET FIXA PÅ NÅT SÄTT

    function areCheckboxArraysEqual(array1 , facit) {
        array1.every((answer, index) => 
            answer === facit[index] ) 
    };

    // och en if sats som kör funktionerna och lägger till en räknare om de returnerar true.
    
    if (areCheckboxArraysEqual(checkedBoxesq8, correctAnswersQ8)){
        amountOfRightAnswers++;
    };
   
        

    console.log(amountOfRightAnswers);




    

    //sedan resten av svaren

    userAnswerArray.forEach((answer, index) => {
        if (answer === correctAnswers[index]){
            amountOfRightAnswers++;
        } else {
            amountOfWrongAnswers++;
        }
    })

    // räkna ut hur stor andel av svaren som är rätt och skriv ut resultatet
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




    
})