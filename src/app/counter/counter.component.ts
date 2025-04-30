import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {

  count = 0;
  
  handleCounter(val:string){
    if(val == 'plus'){
      this.count++;
    }
    else if (val=='minus'&& this.count > 0){
      this.count--;
    }
    else if (val == 'reset'){
      this.count=0;
    }
  }
}
