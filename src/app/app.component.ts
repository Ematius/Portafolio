import { Component } from '@angular/core';
import { HomeComponent } from "./pages/home/home.component";
import { AboutComponent } from "./pages/about/about.component";
import { ContactComponent } from "./pages/contact/contact.component";
import { FooterComponent } from "./core/footer/footer.component";
import { ProjectsComponent } from './pages/projects/projects.component';
import { HeaderComponent } from './core/header/header.component';
import { KnowledgeComponent } from "./pages/knowledge/knowledge.component";


@Component({
  selector: 'app-root',
  imports: [
    HomeComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    HeaderComponent,
    ProjectsComponent,
    KnowledgeComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Portafolio';
}
