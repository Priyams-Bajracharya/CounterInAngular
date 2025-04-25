import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first-ng-app';
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
