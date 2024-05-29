import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AboutComponent } from '../about/about.component';

@Component({
  selector: 'app-head',
  standalone: true,
  imports: [AboutComponent,CommonModule,RouterLink,RouterOutlet],
  templateUrl: './head.component.html',
  styleUrl: './head.component.css'
})
export class HeadComponent {
  LOGO = '../assets/logo2.png'
}
