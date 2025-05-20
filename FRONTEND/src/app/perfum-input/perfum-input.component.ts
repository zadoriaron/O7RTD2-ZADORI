import { Component } from '@angular/core';
import { EditorService } from '../editor.service';
import { Router } from '@angular/router';

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

  constructor(public editorService:EditorService, private router:Router){}

  isFilled:boolean = false

  checkFill():boolean
  {
    if(this.perfumName != "" && this.recommendedSeason != "" && this.price != 0 && this.imageUrl != "")
    {
      return false
    }
    else
    {
      return true
    }
  }

  checkFillForModify():boolean
  {
    if(this.price != 0)
    {
      return false
    }
    else
    {
      return true
    }
  }


  navigateToEditor()
  {
    this.router.navigate(["/Editor"])
    this.editorService.loadPerfums()
  }


}
