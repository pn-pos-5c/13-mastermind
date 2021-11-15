import {Component, OnInit} from '@angular/core';
import {DataProviderService} from "../../services/data-provider.service";

@Component({
  selector: 'app-gameboard',
  templateUrl: './gameboard.component.html',
  styleUrls: ['./gameboard.component.scss']
})
export class GameboardComponent implements OnInit {
  attempt = 1;
  colors: string[] = ['', '', '', ''];
  showGuess = true;
  message = 'Sorry, no more tries left :(';

  constructor(public dataProvider: DataProviderService) {
  }

  ngOnInit(): void {
  }

  colorChosen(slot: number, color: string): void {
    this.colors[slot] = color;
  }

  submitAttempt(): void {
    this.dataProvider.submitGuess(this.colors).subscribe(resolve => {
      this.dataProvider.guessHistory.push(resolve);

      this.attempt++;
      this.colors = ['', '', '', ''];

      if (this.dataProvider.guessHistory[this.dataProvider.guessHistory.length - 1].correctSlot === 4) {
        this.showGuess = false;
        this.message = 'Great, you have solved the pattern :)';

      } else if (this.dataProvider.game.tries - this.attempt < 0) {
        this.showGuess = false;
      }
    });
  }
}
