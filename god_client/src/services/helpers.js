export const getWinnerMove = (player1Move, player2Move) => {
    if(player1Move == player2Move) {
        return "Tie"
    }

    if(player1Move == "Scissors" || player2Move == "Scissors" ) {
        if(player1Move == "Paper" || player2Move == "Paper") {
            return "Scissors";
        } else {
            return "Rock";
        }
    } else if(player1Move == "Rock" || player2Move == "Rock") {
        if(player1Move == "Paper" || player2Move == "Paper") {
            return "Paper";
        } else {
            return "Rock";
        }
    } else {
        if(player1Move == "Scissors" || player2Move == "Scissors") {
            return "Scissors";
        } else {
            return "Rock";
        }
    }
};