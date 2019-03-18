import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CanvasComponent } from './canvas/canvas.component';
import { AlertComponent } from './blocks/alert/alert.component';
import { AddBlockComponent } from './add-block/add-block.component';

@NgModule({
  declarations: [
    AppComponent,
    CanvasComponent,
    AlertComponent,
    AddBlockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
