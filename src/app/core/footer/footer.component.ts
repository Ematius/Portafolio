import { AfterViewInit, Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent implements AfterViewInit {
  @ViewChild('img') img!: ElementRef;
  isVisible = false;

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.isVisible = true;
          } else {
            this.isVisible = false;
          }
        });
      },
      { threshold: 0.2 }
    );
    observer.observe(this.img.nativeElement);
  }
}
