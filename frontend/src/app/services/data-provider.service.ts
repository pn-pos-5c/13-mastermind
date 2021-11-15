import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import Game from "../models/Game";
import Guess from "../models/Guess";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataProviderService {
  rootUrl = 'http://localhost:5000/api/games';
  game!: Game;
  colors: string[] = [];
  guessHistory: Guess[] = [];

  constructor(private http: HttpClient) {
    this.getColors();
  }

  startNewGame(game: Game): Observable<Game> {
    return this.http.post<Game>(`${this.rootUrl}`, game);
  }

  getColors(): void {
    this.http.get<string[]>(`${this.rootUrl}/colors`).subscribe(resolve => this.colors = resolve);
  }

  submitGuess(guess: string[]): Observable<Guess> {
    return this.http.post<Guess>(`${this.rootUrl}/guess/${this.game.id}`, guess);
  }
}
