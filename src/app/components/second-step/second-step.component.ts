import { Component, OnInit } from '@angular/core';
import { PickedService } from 'src/app/services/picked.service';
import { ScoreService } from 'src/app/services/score.service';

@Component({
  selector: 'app-second-step',
  templateUrl: './second-step.component.html',
  styleUrls: ['./second-step.component.scss'],
})
export class SecondStepComponent implements OnInit {
  public type = '';
  public draw = 0;
  public win = 0;
  public lose = 0;
  public housePicked = '';
  constructor(
    private pickedService: PickedService,
    private scoreService: ScoreService
  ) {}

  ngOnInit(): void {
    this.pickedService.getYourPicked().subscribe((data) => {
      this.type = data;
    });
    this.scoreService.getDrawScore().subscribe((data) => {
      this.draw = data;
    });
    this.scoreService.getLoseScore().subscribe((data) => {
      this.lose = data;
    });
    this.scoreService.getWinScore().subscribe((data) => {
      this.win = data;
    });

    setTimeout(() => {
      this.housePicked = ['rock', 'paper', 'scissors'][
        Math.floor(Math.random() * 3)
      ];
      if (this.housePicked == this.type) {
        this.draw = this.draw + 1;
        this.scoreService.draw.next(this.draw);
      } else if (
        (this.type === 'rock' && this.housePicked === 'scissors') ||
        (this.type === 'paper' && this.housePicked === 'rock') ||
        (this.type === 'scissors' && this.housePicked === 'paper')
      ) {
        this.win = this.win + 1;
        this.scoreService.win.next(this.win);
      } else {
        this.lose = this.lose + 1;
        this.scoreService.lose.next(this.lose);
      }
    }, 1000);
  }

  playAgain() {
    this.pickedService.picked.next('');
    this.pickedService.isActive.next(false);
  }

  randomPicked() {
    return this.housePicked;
  }
}
