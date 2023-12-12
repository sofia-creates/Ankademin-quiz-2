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


console.log("antal möjliga  rätta svar i facit är "+correctAnswers.length);




//variabel till bild

let youShallNotPass = document.querySelector('#you-shall-not-pass-img');




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
   
    
    let isQ8Correct = checkBoxArrayq8.length > 4 && checkBoxArrayq8.every((answer, index) => answer === correctAnswersQ8[index]);

    console.log("q8=" + isQ8Correct); //varför är den false även när if satsen körs??? det vete fan
    if (isQ8Correct ==true){
        amountOfRightAnswers++;
    }
    console.log("q8=" + isQ8Correct);

    let isQ9Correct = checkBoxArrayq9.length > 2 &&checkBoxArrayq9.every((answer, index) => answer === correctAnswersQ9[index]);

    if (isQ9Correct){
        amountOfRightAnswers++;
    }


    //console.log(isQ9Correct);
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

        //göm bild
        youShallNotPass.classList.add('hide');

        console.log('vg test');
    } else if (amountOfRightAnswers >= correctAnswers.length*0.50){
        //ta bort tidigare färger och tömma tidigare text 
        resultsPlace.innerText= "";
        resultsPlace.classList.remove("greenText");
        resultsPlace.classList.remove("redText");

        //ny färg ny text
        resultsPlace.classList.add("orangeText");
        resultsPlace.innerText = "Antal rätt: " + amountOfRightAnswers + " utav " + correctAnswers.length + " möjliga. Ditt betyg: G" ;


        //göm bild
         youShallNotPass.classList.add('hide');

        console.log('g test');
    } else if (amountOfRightAnswers < correctAnswers.length*0.50){
        //ta bort tidigare färger och tömma tidigare text 
        resultsPlace.innerText= "";
        resultsPlace.classList.remove("greenText");
        resultsPlace.classList.remove("orangeText");

        //ny färg ny text
        resultsPlace.classList.add("redText");
        resultsPlace.innerText = "Antal rätt: " + amountOfRightAnswers + " utav " + correctAnswers.length + " möjliga. Ditt betyg: U" ;

        //visa bild
        youShallNotPass.classList.remove('hide');

        console.log('u test');
    } else {
        resultsPlace.innerText = "Har du fyllt i quizet?"
    }
    ;




    
})