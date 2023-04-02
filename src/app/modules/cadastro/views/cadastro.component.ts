import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProgressComponent } from 'src/app/shared/components/progress/progress.component';
import { LoadingService } from 'src/app/shared/services/loading.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {
  isLoading: boolean = true;

  formulario: FormGroup
  constructor(
    private formBuilder: FormBuilder,
    private serviceLoading: LoadingService
  ) { }

  ngOnInit(): void {
    this.serviceLoading.notificarInicio();
    setTimeout(() => {
       this.serviceLoading.notificarFim();
      
    }, 10000);
   
   this.formulario = this.formBuilder.group({
    nome: [null],
    dataNascimento: [null],
    email: [null],
    senha: [null]
   })
  }
   goNext(progress: ProgressComponent) {
    progress.next();
  }

  onStateChange(event) {
    console.log(event);
  }
  
  goSubmit(){
    console.log(this.formulario);
    
  }
  
}
