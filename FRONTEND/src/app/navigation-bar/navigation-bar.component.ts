import { Component, OnInit } from '@angular/core';
import { ListService } from '../list.service';
import { Observable } from 'rxjs';
import { Perfum } from '../perfum';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navigation-bar',
  standalone: false,
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.scss'
})
export class NavigationBarComponent{

  constructor(public listService: ListService, private router:Router) {}

  diagramNavigate()
  {
    this.router.navigate(['/Diagram']);
    this.listService.loadPerfumes();

  }


}
