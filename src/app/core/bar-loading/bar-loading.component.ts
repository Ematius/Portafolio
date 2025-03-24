import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar-loading',
  imports: [],
  templateUrl: './bar-loading.component.html',
  styleUrl: './bar-loading.component.scss',
})
export class BarLoadingComponent implements OnInit {
  percent = 0;

  ngOnInit(): void {
    window.addEventListener('scroll', () => {
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      this.percent = Math.round((window.scrollY / scrollable) * 100);

    });
  }
}
