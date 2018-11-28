import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignement2-data-binding';
  username;
  reset() {
    this.username = "";
  }
  updateUsernameStatus() {
    if (this.username != "") {
      return false;
    } else {
      return true;
    }
  }
}
