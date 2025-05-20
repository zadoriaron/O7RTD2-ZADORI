import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Perfum } from './perfum';
import { Purchase } from './purchase';

@Injectable({
  providedIn: 'root'
})
export class EditorService {

  constructor(private http:HttpClient) { 
    this.loadPerfums()
    this.loadPurchases()
  }

  perfumes:Perfum[] = []

  purchases:Purchase[] = []

  apiBasePerfum:string = "https://localhost:7265/api/Perfum/"

  apiBasePurchase:string = "https://localhost:7265/api/Purchase/"

  loadPerfums()
  {
    this.http.get<Perfum[]>(this.apiBasePerfum + "GetAllPerfum").subscribe(x => {
        this.perfumes = x
    });
  }

  loadPurchases()
  {
    this.http.get<Purchase[]>(this.apiBasePurchase + "GetAllPurchases").subscribe(x => {
        this.purchases = x
    });
  }

  deletePerfum(perfumId:string)
  {
    let params:HttpParams = new HttpParams().set("id", perfumId)

    return this.http.delete(this.apiBasePerfum + "DeletePerfumById", {params}).subscribe(
      () => {
        alert("Termék törölve")
        this.loadPerfums()
      }
    )
  }

  createNewPerfum(perfumName:string, recommendedSeason:string, price:number, imageUrl:string)
  {
     let newPerfum = {
      perfumName: perfumName,
      recommendedSeason: recommendedSeason,
      price: price,
      imageUrl: imageUrl
     }

     return this.http.post(this.apiBasePerfum + "AddPerfum", newPerfum).subscribe(
      () => 
        alert("Parfüm hozzáadva")
     )
  }

  modifyPerfumPrice(id:string, price:number)
  {
    let params = new HttpParams()
    .set('id', id)
    .set('price', price.toString());

    return this.http.put(this.apiBasePerfum + 'UpdatePerfum', null, { params: params });
  }
}
