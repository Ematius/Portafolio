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
    if(this.showCV) {
      this.showCV = !this.showCV;
  } else {
    this.showCV = !this.showCV;
  }}
}
