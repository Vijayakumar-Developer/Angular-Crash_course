import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-buttton',
  templateUrl: './buttton.component.html',
  styleUrl: './buttton.component.css'
})
export class ButttonComponent {
 
  @Input('size')
  size = 'S'; // S,M,L

  @Input('shade')
  shade = 'NA'; // D,L,W,NA

  @Input('animation')
  animation='F'; // C,F
 
  @Input('name')
  name=''; 
  
  constructor(){

  }
  ngOnInit():void{

  }
}
