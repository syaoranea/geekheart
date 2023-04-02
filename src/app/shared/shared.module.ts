import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ContadorComponent } from './components/contador/contador.component';
import { LoadingComponent } from './components/loading/loading.component';
import { MenuResponsivelComponent } from './components/menu-responsivel/menu-responsivel.component';
import { ProgressComponent } from './components/progress/progress.component';


@NgModule({
  declarations: [
    ContadorComponent,
    MenuResponsivelComponent,
    LoadingComponent,
    ProgressComponent

  ],
  imports: [
    CommonModule
  ],
  exports:[
    ContadorComponent,
    MenuResponsivelComponent,
    LoadingComponent,
    ProgressComponent
  ]
})
export class SharedModule { }
