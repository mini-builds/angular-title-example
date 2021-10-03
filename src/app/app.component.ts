import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  clickCount = 0;

  constructor(private title: Title) {
    this.title.setTitle(`Click count: ${this.clickCount}`);
  }

  buttonClicked() {
    this.clickCount++;
    this.title.setTitle(`Click count: ${this.clickCount}`);
  }

}
