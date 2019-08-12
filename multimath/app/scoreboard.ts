import { Result } from "./result";

export class Scoreboard {
  private results: Result[] = [];
  addResult(newResult: Result): void {
    this.results.push(newResult);
  }

  updateScoreboard(): void {
    let output: string = "<h2>Scoreboard</h2>";
    for (let i = 0; i < this.results.length; i++) {
      let result: Result = this.results[i];
      output += "<h4>";
      output +=
        result.playerName + ": " + result.score + "/" + result.problemCount;
      output += "</h4>";
    }

    let scoreElement: HTMLElement = document.getElementById("scores")!;
    scoreElement.innerHTML = output;
  }
}
