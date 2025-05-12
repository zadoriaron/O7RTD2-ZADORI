import { Injectable } from '@angular/core';
import { Perfum } from './perfum';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  perfumes:Perfum[] = []

  brands:string[] = []

  private apiBaseUrl: string = "https://localhost:7265/api/Perfum/GetAllPerfum";

  constructor(private http: HttpClient) { 
    this.loadPerfumes();
  }

  loadPerfumes() {
    this.http.get<Perfum[]>(this.apiBaseUrl).subscribe(x => {
        this.perfumes = x
        this.perfumes.forEach((p:Perfum) =>
        {
          this.brands.push(p.perfumName.split(":")[0])
          
        })

        this.getUniqueBrands()
    });
  }

  getUniqueBrands(): string[] {
    return Array.from(new Set(this.brands));
  }
  

}
