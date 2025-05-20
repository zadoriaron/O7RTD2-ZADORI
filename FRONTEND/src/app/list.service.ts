import { Injectable } from '@angular/core';
import { Perfum } from './perfum';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Route, Router } from '@angular/router';
import { Season } from './diagram/diagram.component';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  perfumes:Perfum[] = []

  brands:string[] = []

  seasonStats:Season[] = []

  private apiBaseUrl: string = "https://localhost:7265/api/Perfum/";

  constructor(private http: HttpClient, private router:Router) { 
    this.loadPerfumes();
  }

  loadPerfumes() {
    this.http.get<Perfum[]>(this.apiBaseUrl + "GetAllPerfum").subscribe(x => {
        this.perfumes = x
        this.perfumes.forEach((p:Perfum) =>
        {
          this.brands.push(p.perfumName.split(":")[0])
          
        })

        this.getUniqueBrands()
        this.countPerfumesBySeason()
    });

    
  }

  navigateToList()
  {
    this.router.navigate([''])
  }

  getUniqueBrands(): string[] {
    return Array.from(new Set(this.brands));
  }

  getPerfumesByBrand(brand:string):void
  {
    this.http.get<Perfum[]>(this.apiBaseUrl + "PerfumesByBrand", {params: {brand}}).subscribe({
      next: (response) => {
        this.perfumes = response
        console.log("perfume by brand arrived")
      },
      error: (err) => {
        console.log("something went wrong")
      }
    })

    this.router.navigate([''])
  }

  getPerfumesByString(searchString:string)
  {
    this.http.get<Perfum[]>(this.apiBaseUrl + "PerfumesByString", {params: {searchString}}).subscribe({
      next: (response) => {
        this.perfumes = response
      },
      error: (err) => {
        console.log("something went wrong")
      }
    })
  }

  countPerfumesBySeason() {
  let seasonMap = new Map<string, number>();

  for (const perfume of this.perfumes) {
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
