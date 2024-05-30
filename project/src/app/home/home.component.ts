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
  Img1 = '../assets/food1.jpg'
  Img2 = '../assets/food2.jpg'
  Img3 = '../assets/food3.jpg'
  Img4 = '../assets/food4.jpg'
  Img5 = '../assets/phone-icon.png'
  Img6 = '../assets/location-icon.png'
  Img7 = '../assets/twitter-icon.png'
  Img8 = '../assets/email-icon.png'
}
