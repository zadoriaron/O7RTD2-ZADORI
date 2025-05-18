import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {

  constructor(private http:HttpClient) { }

  apiBaseUrl = "https://localhost:7265/api/Purchase/"

  makePurchase(perfumId:string):void
  {

    const params = new HttpParams().set('perfumId', perfumId)
    
    this.http.post<String>(this.apiBaseUrl + "CreatePurchase", null, {params: params}).subscribe({
      next: (response) => {
        console.log("CreatePurchase request result:", response)
        alert("Sikeres Vásárlás")
      },
      error: (err) =>{
        console.log("CreatePurchase request result:", err)
        alert("Valami hiba történt")
      }
      
    });
  }
}
