import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { DiagramComponent } from './diagram/diagram.component';
import { EditorComponent } from './editor/editor.component';
import { PerfumInputComponent } from './perfum-input/perfum-input.component';

const routes: Routes = [
  {path: "", component:ProductListComponent},
  {path: "Diagram", component:DiagramComponent},
  {path:  "Editor", component:EditorComponent},
  {path: "ParfumInput", component:PerfumInputComponent},
  {path: "ParfumInput/:id", component:PerfumInputComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
