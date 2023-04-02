import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  dataFim: Date = new Date('2023-06-18T19:00:00');
  
  @Output() rota: EventEmitter<string> = new EventEmitter<string>();

  showMenu = false;
  menu: string[] = [ "home", "registrar", "contato"]

  @HostListener('window:resize', ['$event'])
  onResize(event: { target: { innerWidth: number; }; }) {
    if(event.target.innerWidth >= 990){
      this.showMenu = false
    }
    console.log(`Largura da janela: ${event.target.innerWidth}`);
  }
  
   constructor(private router: Router) { }

  ngOnInit(): void {
    
  }

  menuResponsivo(){
    this.showMenu = this.showMenu ? false : true;
  }

  goTo(link: string){
     this.router.navigate([link]);
  //  this.rota.emit(link);
  }

}