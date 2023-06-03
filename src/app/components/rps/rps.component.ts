import { Component } from '@angular/core';
import { PickedService } from 'src/app/services/picked.service';

@Component({
  selector: 'app-rps',
  templateUrl: './rps.component.html',
  styleUrls: ['./rps.component.scss'],
})
export class RpsComponent {
  constructor(private pickedService: PickedService) {}

  getYourPicked(picked: string) {
    this.pickedService.picked.next(picked);
    this.pickedService.isActive.next(true);
  }
}
