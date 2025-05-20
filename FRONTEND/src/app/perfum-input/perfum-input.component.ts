import { Component } from '@angular/core';
import { EditorService } from '../editor.service';

@Component({
  selector: 'app-perfum-input',
  standalone: false,
  templateUrl: './perfum-input.component.html',
  styleUrl: './perfum-input.component.scss'
})
export class PerfumInputComponent {

  perfumName:string = ""
  recommendedSeason:string = ""
  price:number = 0
  imageUrl:string = ""
  
  constructor(private editorService:EditorService){}



}
