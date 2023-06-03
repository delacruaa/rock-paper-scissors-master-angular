import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ScoreService {
  public win = new BehaviorSubject<number>(0);
  public draw = new BehaviorSubject<number>(0);
  public lose = new BehaviorSubject<number>(0);
  constructor() {}

  getWinScore() {
    return this.win.asObservable();
  }
  getDrawScore() {
    return this.draw.asObservable();
  }
  getLoseScore() {
    return this.lose.asObservable();
  }
}
