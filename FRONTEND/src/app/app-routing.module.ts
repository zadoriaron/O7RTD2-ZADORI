import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { DiagramComponent } from './diagram/diagram.component';
import { EditorComponent } from './editor/editor.component';

const routes: Routes = [
  {path: "", component:ProductListComponent},
  {path: "Diagram", component:DiagramComponent},
  {path:  "Editor", component:EditorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
