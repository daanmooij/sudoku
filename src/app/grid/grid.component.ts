import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.scss'
})
export class GridComponent implements OnInit {
  grid: number[][] = [];

  ngOnInit() {
    this.grid = Array(9).fill(null).map(() => Array(9).fill(0));
  }
}
