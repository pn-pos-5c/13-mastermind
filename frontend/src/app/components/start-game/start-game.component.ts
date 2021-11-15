import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, Validators} from "@angular/forms";
import {DataProviderService} from "../../services/data-provider.service";
import Game from "../../models/Game";
import {MastermindService} from "../../services/mastermind.service";

@Component({
  selector: 'app-start-game',
  templateUrl: './start-game.component.html',
  styleUrls: ['./start-game.component.scss']
})
export class StartGameComponent implements OnInit {
  gameForm = this.fb.group({
    name: ['', Validators.required],
    tries: ['', [Validators.required, Validators.min(6), Validators.max(12)]]
  });

  constructor(private fb: FormBuilder, private dataProvider: DataProviderService, private mastermindService: MastermindService) {
  }

  ngOnInit(): void {
  }

  get name(): AbstractControl {
    return <AbstractControl>this.gameForm.get('name');
  }

  get tries(): AbstractControl {
    return <AbstractControl>this.gameForm.get('tries');
  }

  startNewGame(): void {
    this.gameForm.markAllAsTouched();

    if (this.gameForm.valid) {
      let game: Game = {
        name: this.name.value,
        tries: this.tries.value
      };

      this.dataProvider.startNewGame(game).subscribe(resolve => {
        this.dataProvider.game = resolve;
        this.mastermindService.gameState = 2;
      });
    }
  }
}
