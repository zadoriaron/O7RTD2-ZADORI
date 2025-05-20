import { Component, OnInit } from '@angular/core';
import { EditorService } from '../editor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editor',
  standalone: false,
  templateUrl: './editor.component.html',
  styleUrl: './editor.component.scss'
})
export class EditorComponent implements OnInit{

  constructor(public editorService:EditorService, private router:Router) {}
  ngOnInit(): void {
    this.editorService.loadPerfums()
  }

  navigateToInput()
  {
    this.router.navigate(["/ParfumInput"])
  }



}
