import { Component, Input } from '@angular/core';
import { PickedService } from 'src/app/services/picked.service';

@Component({
  selector: 'app-picked',
  templateUrl: './picked.component.html',
  styleUrls: ['./picked.component.scss'],
})
export class PickedComponent {
  @Input() type: string = '';
}
