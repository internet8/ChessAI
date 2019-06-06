let chess;
let lastMoves = [];
let aboutToMove = false;
let startPoint;
let turnCount = 0;
let audio = new Audio('move.mp3');

$( document ).ready(function() {
    chess = new Chess();
    drawBoard(chess.board());
    $('table').find('td').click(function(){
       console.log($(this).attr('id'));
       console.log($(this).attr('class'));
       if (!aboutToMove) {
           highlightPossibleMoves($(this).attr('class'));
       } else {
           performMove($(this).attr('class'));
       }
    });
});

function drawBoard (board) {
    let counter = 0;
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            if (board[i][j] != null) {
                $('#' + counter.toString()).html('<img src="pieces/' + getPieceFileName(board[i][j]) + '" height="70px" width="70px" alt="piece">');
            } else {
                $('#' + counter.toString()).html('');
            }
            counter ++;
        }
    }
    audio.play();
    if (chess.in_checkmate()) {
        setTimeout(alert("Checkmate!"), 500);
    } else if (chess.in_stalemate()) {
        setTimeout(alert("Stalement!"), 500);
    } else if (chess.in_draw()) {
        setTimeout(alert("Draw!"), 500);
    }
}

function highlightPossibleMoves (place) {
    aboutToMove = true;
    startPoint = place;
    for (let i = 0; i < lastMoves.length; i++) {
        $('.' + normalizeMove(lastMoves[i])).css({'outline': 'none'});
    }

    let moves = chess.moves({square: place});
    for (let i = 0; i < moves.length; i++) {
        $('.' + normalizeMove(moves[i])).css({'outline-style': 'solid', 'outline-width': 'medium', 'outline-color': 'red'});
    }
    lastMoves = moves;
}

function performMove (destination) {
    for (let i = 0; i < lastMoves.length; i++) {
        $('.' + normalizeMove(lastMoves[i])).css({'outline': 'none'});
    }
    for (let i = 0; i < lastMoves.length; i++) {
        if (normalizeMove(lastMoves[i]) == normalizeMove(destination)) {
            chess.move({ from: startPoint, to: normalizeMove(destination), promotion:'q'});
            startPoint = "";
            aboutToMove = false;
            drawBoard(chess.board());
            turnCount ++;
            $("#lastMoveId").html("Last move: " + destination);
            setTimeout(function() { AIMove(); }, 200);
            return;
        }
    }
    aboutToMove = false;
    highlightPossibleMoves(destination);
}

function normalizeMove (moveIn) {
    if (moveIn == "O-O") {
        // castle right
        if (chess.turn() == "w") {
            return "g1";
        } else {
            return "g8";
        }
    } else if (moveIn == "O-O-O") {
        // castle left
        if (chess.turn() == "w") {
            return "c1";
        } else {
            return "c8";
        }
    }
    else if (moveIn.substring(0, 2) == "r1" || moveIn.substring(0, 2) == "r2" || moveIn.substring(0, 2) == "r3" || moveIn.substring(0, 2) == "r4") {
        moveIn = moveIn.substring(2);
    }
    else if (moveIn.substring(0, 2) == "N1" || moveIn.substring(0, 2) == "N2" || moveIn.substring(0, 2) == "N3" || moveIn.substring(0, 2) == "N4") {
        moveIn = moveIn.substring(2);
    }
    else if (moveIn.substring(0, 2) == "B1" || moveIn.substring(0, 2) == "B2") {
        moveIn = moveIn.substring(2);
    }
    for (let i = 0; i < moveIn.length; i++) {
        if (!isNaN(moveIn.charAt(i))) {
            return moveIn.substring(i-1, i+1);
        }
    }
}

function getPieceFileName (piece) {
    if (piece.color == "w") {
        switch (piece.type) {
            case "p":
                return "WhitePawn.png";
            case "n":
                return "WhiteKnight.png";
            case "b":
                return "WhiteBishop.png";
            case "r":
                return "WhiteRook.png";
            case "q":
                return "WhiteQueen.png";
            case "k":
                return "WhiteKing.png";
            default:
                return "";
        }
    } else {
        switch (piece.type) {
            case "p":
                return "BlackPawn.png";
            case "n":
                return "BlackKnight.png";
            case "b":
                return "BlackBishop.png";
            case "r":
                return "BlackRook.png";
            case "q":
                return "BlackQueen.png";
            case "k":
                return "BlackKing.png";
            default:
                return "";
        }
    }
}
