import { Injectable } from '@angular/core';
import { Perfum } from './perfum';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  perfumes:Perfum[] = []

  brands:string[] = []

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
    });

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
  

}
