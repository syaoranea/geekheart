import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-menu-responsivel',
  templateUrl: './menu-responsivel.component.html',
  styleUrls: ['./menu-responsivel.component.scss']
})
export class MenuResponsivelComponent implements OnInit {

  @Input() menuList: string[];
  constructor(

  ) { }

  ngOnInit(): void {
  }

  goToRegistrar(){
    console.log('click');
 
  }
}
