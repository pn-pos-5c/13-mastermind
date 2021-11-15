import {Injectable} from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MastermindService {
  gameState = 1;
  subject = new Subject<string>();

  constructor() {
  }

  next(message: string): void {
    this.subject.next(message);
  }
}
