import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ContadorComponent } from './components/contador/contador.component';

@NgModule({
  declarations: [
    ContadorComponent,

  ],
  imports: [
    CommonModule
  ],
  exports:[
    ContadorComponent,
  ]
})
export class SharedModule { }
