import { Component } from '@angular/core';
import { ListService } from '../list.service';

@Component({
  selector: 'app-diagram',
  standalone: false,
  templateUrl: './diagram.component.html',
  styleUrl: './diagram.component.scss'
})
export class DiagramComponent {

  constructor(public listService:ListService) {}

  getHeight(count: number): number {
  let maxHeight:number = 800;
  let counts:number[] = this.listService.perfumes.map(p => p.purchaseCount);
  let maxCount = 0;

  counts.forEach((c:number) => {
    if(c > maxCount)
    {
      maxCount = c
    }
  });

  return (count / maxCount) * maxHeight;
}





}
