import { getValue } from './utility';
import { Result } from './result';
import { Player } from './player';
import { Scoreboard as ResultPanel } from './scoreboard'


 export class Game {
    private scoreboard: ResultPanel = new ResultPanel();
    problemCount: number;
    factor: number;

    constructor(public player: Player, numOfProblems: number, multFactor: number){
        this.problemCount - numOfProblems;
        this.factor = multFactor;
    }
    
    displayGame(): void {
        let gameForm: string = '';
        for( let i= 1; i<= this.problemCount; i++){
            gameForm += '<div class="form-group">';
            gameForm += '<label for = answer>' + i + '" class="col-sm-2 control-label">';
            gameForm += String(this.factor) + ' x ' + i + ' = </label>';
            gameForm += '<div class="col-sm-1"><input type="text" class="form-control" id="answer">';
            gameForm += '</div>'
        }

        let gameElement: HTMLElement = document.getElementById('game')!;
        gameElement.innerHTML = gameForm;

        document.getElementById('calculate')!.removeAttribute('disabled');
    }

    calculateScore(): void {
    
        let score: number = 0;
    
        // loop through the text boxes and calculate the number that are correct
        for (let i = 1; i <= this.problemCount; i++) {
            let answer: number = Number(getValue('answer' + i));
            if(i * this.factor === answer) {
                score++;
            }
        }
    
        // create a new result object to pass to the scoreboard
        let result: Result = {
            playerName: this.player.name,
            score: score,
            problemCount: this.problemCount,
            factor: this.factor
        };
    
        // add the result and update the scoreboard
        this.scoreboard.addResult(result);
        this.scoreboard.updateScoreboard();
    
        // disable the calculate score button
        document.getElementById('calculate')!.setAttribute('disabled', 'true');
    }
}




