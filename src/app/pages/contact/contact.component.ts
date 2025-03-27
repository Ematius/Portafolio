import { Component } from '@angular/core';



@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  showCV = false; 
  keepCV = false;

  toggleCV() {
    if (!this.showCV) {

      this.keepCV = false;
      this.showCV = true;
    } else {

      this.keepCV = true;
    }
  }
}
