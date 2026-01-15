

document.addEventListener('DOMContentLoaded', () => {
    let targetNumber;
    let atemts;
    let maxNumber = 10;

    let guess = document.querySelector('.guessInput');
    let submitbtn = document.querySelector('.submitbtn');
    let newGame = document.querySelector('.newgamebtn');
    let feedback = document.querySelector('.feedback');
    let attemtsDisplay = document.querySelector('.attemtsDisplay');


    function startgame() {
        targetNumber = Math.floor(Math.random() * 100 ) + 1;
        console.log(targetNumber);
        atemts = 0;
        attemtsDisplay.textContent = `Attemts: ${atemts}`;
        feedback.textContent = '';
        guess.value = "";

    }

    function checkGame() {
        const userInput = parseInt(guess.value);

        if(isNaN(userInput) || userInput < 1 || userInput > 100){
            feedback.textContent = `Please enter valid number between 1 and 100`;
            feedback.style.color = 'rgb(220, 24, 24)';
            return ;
        }
        atemts++;
        attemtsDisplay.textContent = ` Attemts: ${atemts}`;


        if (userInput === targetNumber) {
           alert(feedback.textContent = `Congrat 🎉 your win in ${atemts} attemts`);
            feedback.style.color = 'rgb(1, 165, 75)';
            submitbtn.disapled = true ;

        }else if(atemts >= maxNumber){
            feedback.textContent = ` Game over 🎯 the guess number is ${targetNumber} `
           feedback.style.color = 'rgb(227, 77, 64)';
        //    attemtsDisplay.textContent = `attemts ${atemts}`
           return;
        }else{
            const hint = userInput <targetNumber ? " Too low " : " Too heigh ";

            feedback.textContent = ` ${hint} Try again `;
            feedback.style.color = "rgb(8, 21, 197)";

        }
        guess.value = "";
    }
    submitbtn.addEventListener('click',checkGame);
    newGame.addEventListener('click',startgame);
 startgame();
   
})

