import { Component } from '@angular/core';
import { HalloffameService } from '../../services/halloffame.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-famous-people',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './famous-people.component.html',
  styleUrl: './famous-people.component.css'
})
export class FamousPeopleComponent {
  constructor(private hallOfFameService: HalloffameService){
  }
  famousPeople$ = this.hallOfFameService.getHallOfFame();
}
