function startGame() {
    // start game
    var playerName = getInputValue("playername");
    logPlayer(playerName);
    postScore(80, playerName);
    postScore(-5, playerName);
}
function logPlayer(name) {
    if (name === void 0) { name = "MultiMath Player"; }
    console.log("New game starting for player: " + name);
}
function postScore(score, playerName) {
    if (playerName === void 0) { playerName = "MultuMath Player"; }
    var logger;
    if (score < 0) {
        logger = logError;
    }
    else {
        logger = logMessage;
    }
    var scoreElement = document.getElementById("postedScores");
    scoreElement.innerText = score + " - " + playerName;
    logger("Score: " + score);
}
function getInputValue(elementID) {
    var inputElement = (document.getElementById(elementID));
    if (inputElement.value === "") {
        return undefined;
    }
    else {
        return inputElement.value;
    }
}
document.getElementById("startGame").addEventListener("click", startGame);
var logMessage = function (message) { return console.log(message); };
function logError(error) {
    console.error(error);
}
var myResult = {
    playerName: "Monika",
    score: 5,
    problemCount: 6,
    factor: 7
};
var player = {
    name: "Dan",
    formatName: function () { return 'Daniel'; }
};
//# sourceMappingURL=app.js.map