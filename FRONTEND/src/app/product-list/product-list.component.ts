import { Component } from '@angular/core';
import { ListService } from '../list.service';

@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {


  constructor(public listService:ListService) {}


}
