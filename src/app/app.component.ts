import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor() {
    this.doSomethingA();
    this.doSomethingB();
  }

  doSomethingA() {
    for (let i=0; i<100; i++) {
      if(i<40) {
        if(i<20) {
          if(i<10) {
            if(i<40) {
              console.log('Work');
            }
          }
        }
      }
    }
  }

  doSomethingB() {
    for (let i=0; i<100; i++) {
      if(i<40) {
        if(i<20) {
          if(i<10) {
            if(i<40) {
              console.log('Work');
            }
          }
        }
      }
    }
  }
}
