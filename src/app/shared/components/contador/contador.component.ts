import { Component, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.scss']
})
export class ContadorComponent implements OnInit {
  @Input() dataFim: Date;
  @Output() diasRestantes: number;
  @Output() horasRestantes: number;
  @Output() minutosRestantes: number;
  @Output() segundosRestantes: number;

  constructor() {
    setInterval(() => {
      this.atualizarContagem();
    }, 1000);
   }

  ngOnInit(): void {
    
  }

  atualizarContagem(): void {
    const diff = this.dataFim.getTime() - new Date().getTime();
    this.diasRestantes = Math.floor(diff / (1000 * 60 * 60 * 24));
    this.horasRestantes = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    this.minutosRestantes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    this.segundosRestantes = Math.floor((diff % (1000 * 60)) / 1000);
  }

}
