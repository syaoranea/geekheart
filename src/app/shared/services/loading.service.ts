import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  private evento: EventEmitter<boolean> = new EventEmitter<boolean>();
  privateloadingAndamento: number = 0;

  constructor() { }

  notificarInicio(): void{
    if(this.privateloadingAndamento++ === 0){
      this.evento.emit(true)
    }
  }

  notificarFim(): void{
    if(this.privateloadingAndamento-- === 1){
      this.evento.emit(false)
    }
  }

  observar(): Observable<boolean>{
    return this.evento.asObservable()
  }
}
