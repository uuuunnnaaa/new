import { Component } from '@angular/core';
import { AboutComponent } from '../about/about.component';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AboutComponent,CommonModule,RouterLink,RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  Banner = '../assets/banner.jpg'
}
