import { Component, OnInit } from '@angular/core';
import { ListService } from '../list.service';
import { Perfum } from '../perfum';

@Component({
  selector: 'app-diagram',
  standalone: false,
  templateUrl: './diagram.component.html',
  styleUrl: './diagram.component.scss'
})
export class DiagramComponent implements OnInit{

  constructor(public listService:ListService) {
      
  }
  ngOnInit(): void {
    this.countPerfumesBySeason();
  }

  

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

  getAvgPrice():number
  {
    let sumPrice:number = 0
    this.listService.perfumes.forEach((p:Perfum) => {
        sumPrice = sumPrice + p.price;
    })

    return sumPrice / this.listService.perfumes.length
  }

  seasonStats:Season[] = []

  countPerfumesBySeason() {
  let seasonMap = new Map<string, number>();

  for (const perfume of this.listService.perfumes) {
    const season = perfume.recommendedSeason;
    if (seasonMap.has(season)) {
      seasonMap.set(season, seasonMap.get(season)! + 1);
    } else {
      seasonMap.set(season, 1);
    }
  }

  this.seasonStats = Array.from(seasonMap.entries()).map(
    ([name, counter]) => new Season(name, counter)
  );
}






}

export class Season{
    name:string = ""
    counter:number = 0

    constructor(name:string, counter:number)
    {
      this.name = name
      this.counter = counter
    }
}
