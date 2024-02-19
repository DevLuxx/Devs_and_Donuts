import { Component } from '@angular/core';
import { DonutsService } from '../../services/donuts.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-donuts',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './donuts.component.html',
  styleUrl: './donuts.component.css'
})
export class DonutsComponent {
  constructor(private donutsService: DonutsService){
  }

  donuts$ = this.donutsService.getDonuts();
}