'use strict'

const string = ""
let click = 0;



const board = 3;
let ticTacToe = [];

for (let i = 0; i < board; i++) {
    ticTacToe.push(new Array(board).fill('Y'));
  }


function fillBoard(id, click) {

    let innerVal = "";

    if(click % 2 == 0) {
        innerVal = 'X';
    }
    else {
        innerVal = 'O';
    }

    if (id >= 1 && id <= 3) {
        ticTacToe[0][id-1] = innerVal;
    }
    else if ( id > 3 && id <= 6)
    {
        ticTacToe[1][id-4] = innerVal;
    }
    else {
        ticTacToe[2][id-7] = innerVal;
    }

}



function findWinner( ) {
    //  row check
    
    for (let i = 0; i < 3; i++) {
        
        if(  ticTacToe[i][0] == ticTacToe[i][1] &&  ticTacToe[i][1] == ticTacToe[i][2] ) {
            return ticTacToe[i][0];
        }
    }

    //  column check

    for ( let i = 0; i < 3; i++) {
        
        if( ticTacToe[0][i] == ticTacToe[1][i] && ticTacToe[1][i] ==  ticTacToe[2][i] ) {
            return ticTacToe[0][i];
        }
    }


    // diagonal check

    if ( ticTacToe[0][0] == ticTacToe[1][1] && ticTacToe[1][1] == ticTacToe[2][2] ) {
        return ticTacToe[0][0];
    } 

    if( ticTacToe[0][2] == ticTacToe[1][1] && ticTacToe[1][1] == ticTacToe[2][0] ) {
        return ticTacToe[0][2];
    }

    
}




//  reset button functionality

const resetButton = document.querySelector('.reset');
resetButton.addEventListener('click', () => {
    location.reload();
})




const boxes = document.querySelectorAll(".box");
Array.from(boxes).forEach( (box) => {
    box.addEventListener("click", (event) => {
        let button = event.target;
        let idValue = parseInt( event.target.getAttribute('id') );
        if(event.target.innerHTML == "")
        {
            if(click % 2 == 0) {
                event.target.innerHTML = 'X';
                
                
            }
            else {
                event.target.innerHTML= 'O';
            }

            event.target.style.backgroundColor = 'red';
            event.target.fontWeight = "bold";
            fillBoard(idValue, click);
            click++;
            let winner = findWinner();

            if (winner == 'X' || winner == 'O') {
                const msgDiv = document.querySelector('.winner');
                msgDiv.innerHTML = `${winner} has won the match`;
                msgDiv.style.display = 'block';

            }

            if( winner !== 'X' && winner !== 'O' && click >= 9) {
                const msgDiv = document.querySelector('.winner');
                msgDiv.innerHTML = `Match Tie`;
                msgDiv.style.display = 'block';

            }

        }
        


    })
})