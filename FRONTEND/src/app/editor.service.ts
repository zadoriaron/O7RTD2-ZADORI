import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Perfum } from './perfum';

@Injectable({
  providedIn: 'root'
})
export class EditorService {

  constructor(private http:HttpClient) { }

  perfumes:Perfum[] = []
}
