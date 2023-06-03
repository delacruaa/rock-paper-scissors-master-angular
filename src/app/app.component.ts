import { Component, OnInit } from '@angular/core';
import { PickedService } from './services/picked.service';
import { ModalService } from './services/modal.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({ opacity: 0 })),
      state('*', style({ opacity: 1 })),
      transition('void <=> *', animate('300ms')),
    ]),
  ],
})
export class AppComponent implements OnInit {
  title = 'rock-paper-scissors-master-angular';
  public isActive!: boolean;
  public isOpenModal = false;
  constructor(
    private pickedService: PickedService,
    private modalService: ModalService
  ) {}

  ngOnInit(): void {
    this.pickedService.getIsactive().subscribe((data) => {
      this.isActive = data;
    });
    this.modalService.getIsOpenModal().subscribe((data) => {
      this.isOpenModal = data;
    });
  }

  openModal() {
    this.modalService.isOpenModal.next(true);
  }
}
