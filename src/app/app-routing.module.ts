import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanvasComponent } from './canvas/canvas.component';
import { AlertComponent } from './blocks/alert/alert.component';
import { AddBlockComponent } from './add-block/add-block.component';

const routes: Routes = [
  {
    path: "", 
    component: CanvasComponent
  }, 
  {
    path: "add", 
    component: AddBlockComponent
  },
  {
    path: "block/alert", 
    component: AlertComponent
  }, 
  {
    path: "block/alert/:id", 
    component: AlertComponent
  }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
