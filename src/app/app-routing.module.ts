import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './modules/cadastro/views/cadastro.component';
import { LandingPageComponent } from './modules/landing-page/views/landing-page.component';

const routes: Routes = [
   { path: '', component: LandingPageComponent },
   { path: 'cadastrar', component: CadastroComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
