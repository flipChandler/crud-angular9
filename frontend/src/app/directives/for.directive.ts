import { Directive, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[myFor]'
})
export class ForDirective implements OnInit {

  @Input('myForEm') numbers: number[]
  @Input('myForUsando') text: string

  constructor() {
    console.log('MyFor');
   }

   ngOnInit(): void {
    console.log(this.numbers);
    console.log(this.text);
   }
  
}
