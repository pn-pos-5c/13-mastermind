import {Component} from '@angular/core';
import {MastermindService} from "./services/mastermind.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mastermind';

  constructor(public mastermindService: MastermindService) {
  }
}
