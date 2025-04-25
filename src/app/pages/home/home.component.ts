import { Component, OnInit } from '@angular/core';
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  ngOnInit() {
    this.animateText();
  }

  private animateText(): void {

    gsap.registerPlugin(TextPlugin);

    const tl = gsap.timeline({ delay: 1 });
    tl.fromTo('h1', { text: '' }, { text: 'Bienvenido', duration: 1 });

  }
}
