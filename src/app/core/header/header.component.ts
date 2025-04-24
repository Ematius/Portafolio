import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {

  isOpenMenu = false;

  toggleMenu() {
    this.isOpenMenu = !this.isOpenMenu;
  }
}
