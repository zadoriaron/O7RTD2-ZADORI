import { Component } from '@angular/core';
import { EditorService } from '../editor.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

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

  priceToModify:number = 0

  constructor(public editorService:EditorService, private router:Router, private route:ActivatedRoute){}

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
    if(this.priceToModify != null && this.priceToModify != 0)
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

  ModifyPrice()
  {
    let id = this.route.snapshot.paramMap.get('id')!;
    this.editorService.modifyPerfumPrice(id, this.priceToModify)
    this.navigateToEditor()
  }
}
