import { Component } from '@angular/core';
import { ListService } from '../list.service';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

    constructor(public listService:ListService){}

    searchText = ""

}
