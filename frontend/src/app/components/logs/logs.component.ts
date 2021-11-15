import {Component, OnInit} from '@angular/core';
import {MastermindService} from "../../services/mastermind.service";

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.scss']
})
export class LogsComponent implements OnInit {
  logs: string[] = [];

  constructor(mastermindService: MastermindService) {
    mastermindService.subject.subscribe(resolve => this.logs.push(resolve));
  }

  ngOnInit(): void {
  }
}
