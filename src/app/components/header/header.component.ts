import { Component, OnInit } from '@angular/core';
import { ScoreService } from 'src/app/services/score.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public draw = 0;
  public win = 0;
  public lose = 0;
  constructor(private scoreService: ScoreService) {}

  ngOnInit(): void {
    this.scoreService.getDrawScore().subscribe((data) => {
      this.draw = data;
    });
    this.scoreService.getLoseScore().subscribe((data) => {
      this.lose = data;
    });
    this.scoreService.getWinScore().subscribe((data) => {
      this.win = data;
    });
  }
}
