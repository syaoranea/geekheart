import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ContadorComponent } from './components/contador/contador.component';
import { LoadingComponent } from './components/loading/loading.component';
import { MenuResponsivelComponent } from './components/menu-responsivel/menu-responsivel.component';
import { ProgressStepDirective } from './components/progress/progress-step.directive';
import { ProgressStepComponent } from './components/progress/progress-step/progress-step.component';
import { ProgressComponent } from './components/progress/progress.component';


@NgModule({
  declarations: [
    ContadorComponent,
    MenuResponsivelComponent,
    LoadingComponent,
    ProgressComponent,
     ProgressStepComponent,
    ProgressStepDirective,

  ],
  imports: [
    CommonModule
  ],
  exports:[
    ContadorComponent,
    MenuResponsivelComponent,
    LoadingComponent,
    ProgressComponent,
    ProgressStepComponent,
    ProgressStepDirective,
  ]
})
export class SharedModule { }
