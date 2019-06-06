// position value tables
let pawnEvalWhite =
    [
        [0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0],
        [5.0,  5.0,  5.0,  5.0,  5.0,  5.0,  5.0,  5.0],
        [1.0,  1.0,  2.0,  3.0,  3.0,  2.0,  1.0,  1.0],
        [0.5,  0.5,  1.0,  2.5,  2.5,  1.0,  0.5,  0.5],
        [0.0,  0.0,  0.0,  2.0,  2.0,  0.0,  0.0,  0.0],
        [0.5, -0.5, -1.0,  0.0,  0.0, -1.0, -0.5,  0.5],
        [0.5,  1.0, 1.0,  -2.0, -2.0,  1.0,  1.0,  0.5],
        [0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0]
    ];

let pawnEvalBlack = reverseArray(pawnEvalWhite);

let knightEvalWhite =
    [
        [-5.0, -4.0, -3.0, -3.0, -3.0, -3.0, -4.0, -5.0],
        [-4.0, -2.0,  0.0,  0.0,  0.0,  0.0, -2.0, -4.0],
        [-3.0,  0.0,  1.0,  1.5,  1.5,  1.0,  0.0, -3.0],
        [-3.0,  0.5,  1.5,  2.0,  2.0,  1.5,  0.5, -3.0],
        [-3.0,  0.0,  1.5,  2.0,  2.0,  1.5,  0.0, -3.0],
        [-3.0,  0.5,  1.0,  1.5,  1.5,  1.0,  0.5, -3.0],
        [-4.0, -2.0,  0.0,  0.5,  0.5,  0.0, -2.0, -4.0],
        [-5.0, -4.0, -3.0, -3.0, -3.0, -3.0, -4.0, -5.0]
    ];

let knightEvalBlack = reverseArray(knightEvalWhite);

let bishopEvalWhite = [
    [ -2.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -2.0],
    [ -1.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0, -1.0],
    [ -1.0,  0.0,  0.5,  1.0,  1.0,  0.5,  0.0, -1.0],
    [ -1.0,  0.5,  0.5,  1.0,  1.0,  0.5,  0.5, -1.0],
    [ -1.0,  0.0,  1.0,  1.0,  1.0,  1.0,  0.0, -1.0],
    [ -1.0,  1.0,  1.0,  1.0,  1.0,  1.0,  1.0, -1.0],
    [ -1.0,  0.5,  0.0,  0.0,  0.0,  0.0,  0.5, -1.0],
    [ -2.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -2.0]
];

let bishopEvalBlack = reverseArray(bishopEvalWhite);

let rookEvalWhite = [
    [  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0],
    [  0.5,  1.0,  1.0,  1.0,  1.0,  1.0,  1.0,  0.5],
    [ -0.5,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0, -0.5],
    [ -0.5,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0, -0.5],
    [ -0.5,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0, -0.5],
    [ -0.5,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0, -0.5],
    [ -0.5,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0, -0.5],
    [  0.0,   0.0, 0.0,  0.5,  0.5,  0.0,  0.0,  0.0]
];

let rookEvalBlack = reverseArray(rookEvalWhite);

let evalQueenWhite =
    [
    [ -2.0, -1.0, -1.0, -0.5, -0.5, -1.0, -1.0, -2.0],
    [ -1.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0, -1.0],
    [ -1.0,  0.0,  0.5,  0.5,  0.5,  0.5,  0.0, -1.0],
    [ -0.5,  0.0,  0.5,  0.5,  0.5,  0.5,  0.0, -0.5],
    [  0.0,  0.0,  0.5,  0.5,  0.5,  0.5,  0.0, -0.5],
    [ -1.0,  0.5,  0.5,  0.5,  0.5,  0.5,  0.0, -1.0],
    [ -1.0,  0.0,  0.5,  0.0,  0.0,  0.0,  0.0, -1.0],
    [ -2.0, -1.0, -1.0, -0.5, -0.5, -1.0, -1.0, -2.0]
];

let evalQueenBlack = reverseArray(evalQueenWhite);

let kingEvalWhite = [

    [ -3.0, -4.0, -4.0, -5.0, -5.0, -4.0, -4.0, -3.0],
    [ -3.0, -4.0, -4.0, -5.0, -5.0, -4.0, -4.0, -3.0],
    [ -3.0, -4.0, -4.0, -5.0, -5.0, -4.0, -4.0, -3.0],
    [ -3.0, -4.0, -4.0, -5.0, -5.0, -4.0, -4.0, -3.0],
    [ -2.0, -3.0, -3.0, -4.0, -4.0, -3.0, -3.0, -2.0],
    [ -1.0, -2.0, -2.0, -2.0, -2.0, -2.0, -2.0, -1.0],
    [  2.0,  2.0,  0.0,  0.0,  0.0,  0.0,  2.0,  2.0 ],
    [  2.0,  3.0,  1.0,  0.0,  0.0,  1.0,  3.0,  2.0 ]
];

let kingEvalBlack = reverseArray(kingEvalWhite);

function reverseArray (array) {
    return array.slice().reverse();
};

// minimax
function minimaxRoot (depth, chess, isMaximisingPlayer) {
    if (chess.in_checkmate()) {
        return "Checkmate";
    } else if (chess.in_stalemate()) {
        return "Stalement";
    } else if (chess.in_draw()) {
        return "Draw";
    }

    let newGameMoves = chess.moves();
    let bestMove = -9999;
    let bestMoveFound;

    for(let i = 0; i < newGameMoves.length; i++) {
        let newGameMove = newGameMoves[i];
        chess.move(newGameMove);
        let value = minimax(depth - 1, chess, -10000, 10000, !isMaximisingPlayer);
        chess.undo();
        if(value >= bestMove) {
            bestMove = value;
            bestMoveFound = newGameMove;
        }
    }
    return bestMoveFound;
};

function minimax (depth, chess, alpha, beta, isMaximisingPlayer) {
    if (depth == 0) {
        return -getBoardValue();
    }

    let newGameMoves = chess.moves();

    if (isMaximisingPlayer) {
        let bestMove = -9999;
        for (let i = 0; i < newGameMoves.length; i++) {
            chess.move(newGameMoves[i]);
            bestMove = Math.max(bestMove, minimax(depth - 1, chess, alpha, beta, !isMaximisingPlayer));
            chess.undo();
            alpha = Math.max(alpha, bestMove);
            if (beta <= alpha) {
                break;
            }
        }
        return bestMove;
    } else {
        let bestMove = 9999;
        for (let i = 0; i < newGameMoves.length; i++) {
            chess.move(newGameMoves[i]);
            bestMove = Math.min(bestMove, minimax(depth - 1, chess, alpha, beta, !isMaximisingPlayer));
            chess.undo();
            beta = Math.min(beta, bestMove);
            if (beta <= alpha) {
                break;
            }
        }
        return bestMove;
    }
};

function getBoardValue () {
    let board = chess.board();
    let value = 0;
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            if (board[i][j] != null) {
                value += getPieceValue(board[i][j].color, board[i][j].type, i, j);
            }
        }
    }
    return value;
}

function getPieceValue (color, piece, x, y) {
    if (color == "w") {
        switch (piece) {
            case "p":
                return 10 + pawnEvalWhite[x][y];
            case "n":
                return 30 + knightEvalWhite[x][y];
            case "b":
                return 30 + bishopEvalWhite[x][y];
            case "r":
                return 50 + rookEvalWhite[x][y];
            case "q":
                return 90 + evalQueenWhite[x][y];
            case "k":
                return 900 + kingEvalWhite[x][y];
        }
    } else {
        switch (piece) {
            case "p":
                return -(10 + pawnEvalBlack[x][y]);
            case "n":
                return -(30 + knightEvalBlack[x][y]);
            case "b":
                return -(30 + bishopEvalBlack[x][y]);
            case "r":
                return -(50 + rookEvalBlack[x][y]);
            case "q":
                return -(90 + evalQueenBlack[x][y]);
            case "k":
                return -(900 + kingEvalBlack[x][y]);
        }
    }
}

function AIMove () {
    let move = minimaxRoot (3, chess, true);
    chess.move(move);
    $("#lastMoveId").html("Last move: " + move);
    drawBoard(chess.board());
}
