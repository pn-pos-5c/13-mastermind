import {Component, OnInit} from '@angular/core';
import {MastermindService} from "../../services/mastermind.service";
import {DataProviderService} from "../../services/data-provider.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private mastermindService: MastermindService, private dataProvider: DataProviderService) {
  }

  ngOnInit(): void {
  }

  startNewGame(): void {
    this.mastermindService.gameState = 1;
  }

  async resumeGame(gameId: string): Promise<void> {
    await this.dataProvider.resumeGame(gameId);
    this.mastermindService.gameState = 2;
    console.log(this.dataProvider.game);
    console.log(this.dataProvider.guessHistory);
  }
}
