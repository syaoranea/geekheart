import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ContadorComponent } from './components/contador/contador.component';
import { LoadingComponent } from './components/loading/loading.component';
import { MenuResponsivelComponent } from './components/menu-responsivel/menu-responsivel.component';


@NgModule({
  declarations: [
    ContadorComponent,
    MenuResponsivelComponent,
    LoadingComponent,

  ],
  imports: [
    CommonModule
  ],
  exports:[
    ContadorComponent,
    MenuResponsivelComponent,
    LoadingComponent,
  ]
})
export class SharedModule { }
