import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  public isOpenModal = new BehaviorSubject<boolean>(false);
  constructor() {}

  getIsOpenModal() {
    return this.isOpenModal.asObservable();
  }
}
