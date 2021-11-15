import {Component, OnInit} from '@angular/core';
import {MastermindService} from "../../services/mastermind.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private mastermindService: MastermindService) {
  }

  ngOnInit(): void {
  }

  startNewGame(): void {
    this.mastermindService.gameState = 1;
  }
}
