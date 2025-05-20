import { Component } from '@angular/core';
import { EditorService } from '../editor.service';

@Component({
  selector: 'app-editor',
  standalone: false,
  templateUrl: './editor.component.html',
  styleUrl: './editor.component.scss'
})
export class EditorComponent {

  constructor(public editorService:EditorService) {}



}
