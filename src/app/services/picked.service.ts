import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PickedService {
  public picked = new BehaviorSubject<string>('');
  public isActive = new BehaviorSubject<boolean>(false);
  getYourPicked() {
    return this.picked.asObservable();
  }

  getIsactive() {
    return this.isActive.asObservable();
  }
}
