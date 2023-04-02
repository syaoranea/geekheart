import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ContadorComponent } from './components/contador/contador.component';
import { MenuResponsivelComponent } from './components/menu-responsivel/menu-responsivel.component';


@NgModule({
  declarations: [
    ContadorComponent,
    MenuResponsivelComponent,

  ],
  imports: [
    CommonModule
  ],
  exports:[
    ContadorComponent,
    MenuResponsivelComponent,
  ]
})
export class SharedModule { }
