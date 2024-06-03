import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HeadComponent } from './head/head.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeadComponent,AboutComponent,RouterLink,RouterLinkActive,HomeComponent,NewsComponent,ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project';
  LOGO = '../assets/logo2.png'
  banner = '../assets/banner.png'


}
