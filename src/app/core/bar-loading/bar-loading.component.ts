import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-bar-loading',
  imports: [],
  templateUrl: './bar-loading.component.html',
  styleUrl: './bar-loading.component.scss',
})
export class BarLoadingComponent {
  percent = 0;

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const scrollable =
      document.documentElement.scrollHeight - window.innerHeight;
    this.percent = Math.round((window.scrollY / scrollable) * 100);
  }
}
