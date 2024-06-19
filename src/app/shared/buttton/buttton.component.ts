import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-buttton',
  templateUrl: './buttton.component.html',
  styleUrl: './buttton.component.css'
})
export class ButttonComponent {
 
  @Input('size')
  size='S'; //S,M,L
  @Input('shade');
  shade='NA';//D,L,W,NA
  animation='NA';//C,F,NA

  constructor(){

  }
  ngOnInit():void{

  }
}
